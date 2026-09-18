import { Contact } from "../models/Contact.js";
import { sendContactEmail } from "../services/emailService.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handle Contact Form Submission
 * @route POST /api/contact
 */
export async function submitContact(req, res, next) {
  try {
    const rawData = req.body || {};

    // 1. Trim and normalize inputs
    const fullName = typeof rawData.fullName === "string" && rawData.fullName.trim()
      ? rawData.fullName.trim()
      : (typeof rawData.name === "string" ? rawData.name.trim() : "");
    const email = typeof rawData.email === "string" ? rawData.email.trim() : "";
    const phone = typeof rawData.phone === "string" ? rawData.phone.trim() : "";
    const college = typeof rawData.college === "string" && rawData.college.trim()
      ? rawData.college.trim()
      : (typeof rawData.institution === "string" && rawData.institution.trim()
          ? rawData.institution.trim()
          : (typeof rawData.organization === "string" ? rawData.organization.trim() : ""));
    const enquiryType = typeof rawData.enquiryType === "string" && rawData.enquiryType.trim()
      ? rawData.enquiryType.trim()
      : "General Enquiry";
    let message = typeof rawData.message === "string" ? rawData.message.trim() : "";

    if (!message) {
      message = "Inquiry submitted through website portal.";
    }

    // 2. Validation
    if (!fullName) {
      return res.status(400).json({
        success: false,
        message: "Full Name is required.",
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email address is required.",
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // 3. Process sanitized attachments (e.g. resume / docs)
    const rawAttachments = Array.isArray(rawData.attachments) ? rawData.attachments : [];
    const sanitizedAttachments = rawAttachments
      .filter((att) => att && typeof att.content === "string" && att.content.length > 0 && att.filename)
      .map((att) => ({
        filename: String(att.filename).replace(/[/\\?%*:|"<>]/g, "_").slice(0, 150),
        content: att.content,
        encoding: att.encoding || "base64",
        contentType: att.contentType || "application/octet-stream",
      }));

    // 4. Save to Database (Non-blocking fallback if MySQL is offline)
    try {
      await Contact.create({
        fullName,
        email,
        phone,
        college,
        enquiryType,
        message,
      });
    } catch (dbErr) {
      console.warn("⚠️ [Contact Controller] DB persistence skipped:", dbErr.message);
    }

    // 5. Dispatch Email via SMTP
    await sendContactEmail({
      fullName,
      email,
      phone,
      college,
      enquiryType,
      message,
      attachments: sanitizedAttachments,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("❌ [Contact Controller Error]:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
}

export default {
  submitContact,
};

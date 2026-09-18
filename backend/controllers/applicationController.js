import { Application } from "../models/Application.js";
import { sendContactEmail } from "../services/emailService.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handle Program & Job Application Submissions
 * @route POST /api/applications
 */
export async function submitApplication(req, res, next) {
  try {
    const rawData = req.body || {};

    // 1. Normalize fields
    const fullName = typeof rawData.fullName === "string" && rawData.fullName.trim()
      ? rawData.fullName.trim()
      : (typeof rawData.name === "string" ? rawData.name.trim() : "");
    const email = typeof rawData.email === "string" ? rawData.email.trim() : "";
    const phone = typeof rawData.phone === "string" ? rawData.phone.trim() : "";
    const programType = typeof rawData.programType === "string" && rawData.programType.trim()
      ? rawData.programType.trim()
      : (typeof rawData.type === "string" ? rawData.type.trim() : "Course Track");
    const preferredTrack = typeof rawData.preferredTrack === "string" && rawData.preferredTrack.trim()
      ? rawData.preferredTrack.trim()
      : (typeof rawData.track === "string" ? rawData.track.trim() : (typeof rawData.course === "string" ? rawData.course.trim() : ""));
    const college = typeof rawData.college === "string" && rawData.college.trim()
      ? rawData.college.trim()
      : (typeof rawData.institution === "string" ? rawData.institution.trim() : "");
    const degree = typeof rawData.degree === "string" ? rawData.degree.trim() : "";
    const graduationYear = typeof rawData.graduationYear === "string" ? rawData.graduationYear.trim() : "";
    const experienceLevel = typeof rawData.experienceLevel === "string" ? rawData.experienceLevel.trim() : "";
    const portfolioUrl = typeof rawData.portfolioUrl === "string" ? rawData.portfolioUrl.trim() : "";
    const linkedinUrl = typeof rawData.linkedinUrl === "string" ? rawData.linkedinUrl.trim() : "";
    let message = typeof rawData.message === "string" ? rawData.message.trim() : "";

    // 2. Validate mandatory fields
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

    // 3. Process sanitized attachments (Resume / Portfolio)
    const rawAttachments = Array.isArray(rawData.attachments) ? rawData.attachments : [];
    const sanitizedAttachments = rawAttachments
      .filter((att) => att && typeof att.content === "string" && att.content.length > 0 && att.filename)
      .map((att) => ({
        filename: String(att.filename).replace(/[/\\?%*:|"<>]/g, "_").slice(0, 150),
        content: att.content,
        encoding: att.encoding || "base64",
        contentType: att.contentType || "application/octet-stream",
      }));

    // 4. Save to Database (Non-blocking fallback)
    try {
      await Application.create({
        fullName,
        email,
        phone,
        programType,
        preferredTrack,
        college,
        degree,
        graduationYear,
        experienceLevel,
        portfolioUrl,
        linkedinUrl,
        message,
      });
    } catch (dbErr) {
      console.warn("⚠️ [Application Controller] DB persistence skipped:", dbErr.message);
    }

    // 5. Build rich message body for email notification
    let emailMessageDetails = `Application Type: ${programType}\n`;
    if (preferredTrack) emailMessageDetails += `Selected Track / Domain: ${preferredTrack}\n`;
    if (degree) emailMessageDetails += `Degree / Branch: ${degree}\n`;
    if (graduationYear) emailMessageDetails += `Graduation Year: ${graduationYear}\n`;
    if (experienceLevel) emailMessageDetails += `Experience: ${experienceLevel}\n`;
    if (linkedinUrl) emailMessageDetails += `LinkedIn Profile: ${linkedinUrl}\n`;
    if (portfolioUrl) emailMessageDetails += `Portfolio / GitHub: ${portfolioUrl}\n`;
    if (message) emailMessageDetails += `\nCandidate Note:\n${message}`;

    // 6. Dispatch Email Notification
    await sendContactEmail({
      fullName,
      email,
      phone,
      college,
      enquiryType: `Application - ${programType}${preferredTrack ? ` (${preferredTrack})` : ""}`,
      message: emailMessageDetails,
      attachments: sanitizedAttachments,
    });

    return res.status(200).json({
      success: true,
      message: "Your application has been received successfully.",
    });
  } catch (error) {
    console.error("❌ [Application Controller Error]:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to process your application. Please try again later.",
    });
  }
}

export default {
  submitApplication,
};

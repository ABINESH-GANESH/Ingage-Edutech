/**
 * InGage EduTech - Contact Form Express Backend Email Dispatch Service
 * Dispatches all inquiries privately to the Node.js Express Backend
 * Backend API: POST http://localhost:5000/api/contact
 */

export const BACKEND_API_URL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_BACKEND_URL) ||
  "http://localhost:5000/api/contact";

/**
 * Convert a Browser File or Blob object into a base64 attachment object for Nodemailer SMTP
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        return resolve(null);
      }
      const base64Index = result.indexOf(";base64,");
      if (base64Index !== -1) {
        const contentType = result.substring(5, base64Index);
        const base64Data = result.substring(base64Index + 8);
        resolve({
          filename: file.name,
          contentType: contentType || file.type || "application/octet-stream",
          content: base64Data,
          encoding: "base64",
          size: file.size,
        });
      } else {
        resolve({
          filename: file.name,
          contentType: file.type || "application/octet-stream",
          content: result,
          encoding: "base64",
          size: file.size,
        });
      }
    };
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Dispatches contact inquiry directly to the Node.js Express Backend
 * Flow: React -> POST http://localhost:5000/api/contact -> Node.js Express -> Nodemailer SMTP
 */
export async function sendContactMessage(formData) {
  const {
    name = "",
    fullName = "",
    email = "",
    phone = "",
    institution = "",
    college = "",
    enquiryType = "General Enquiry",
    message = "",
    attachments = [],
  } = formData;

  const payload = {
    fullName: (fullName || name || "").trim(),
    email: (email || "").trim(),
    phone: (phone || "").trim(),
    college: (college || institution || "").trim(),
    enquiryType: (enquiryType || "General Enquiry").trim(),
    message: (message || "").trim(),
    attachments: Array.isArray(attachments) ? attachments : [],
  };

  const response = await fetch(BACKEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    const errorMsg = data.message || "Unable to send your message. Please try again later.";
    throw new Error(errorMsg);
  }

  return {
    success: true,
    message: data.message || "Your message has been sent successfully.",
  };
}

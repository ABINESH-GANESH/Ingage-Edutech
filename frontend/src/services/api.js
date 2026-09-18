/**
 * InGage EduTech - Centralized Frontend API Service
 * Communicates with the independent Node.js Express Backend API.
 */

// Base API URL configured via environment variables
export const API_BASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL) ||
  "http://localhost:5000/api";

export const API_URL = API_BASE_URL;

/**
 * Convert a Browser File or Blob object into a base64 attachment object for payload submission
 * @param {File|Blob} file 
 * @returns {Promise<Object|null>}
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
 * Check backend health & status
 * @returns {Promise<Object>}
 */
export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    console.warn("Backend health check failed:", error);
    return { success: false, message: "Backend unreachable" };
  }
}

/**
 * Submit Contact / General Inquiry Form
 * @param {Object} formData 
 * @returns {Promise<Object>}
 */
export async function submitContact(formData) {
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

  const response = await fetch(`${API_BASE_URL}/contact`, {
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
    data: data.data || null,
  };
}

/**
 * Submit Student / Professional Application Form
 * @param {Object} applicationData 
 * @returns {Promise<Object>}
 */
export async function submitApplication(applicationData) {
  const {
    fullName = "",
    email = "",
    phone = "",
    programType = "Course Track",
    preferredTrack = "",
    college = "",
    degree = "",
    graduationYear = "",
    experienceLevel = "",
    portfolioUrl = "",
    linkedInUrl = "",
    message = "",
    resume = null,
    attachments = [],
  } = applicationData;

  const payload = {
    fullName: fullName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    programType: (programType || "Course Track").trim(),
    preferredTrack: (preferredTrack || "").trim(),
    college: (college || "").trim(),
    degree: (degree || "").trim(),
    graduationYear: (graduationYear || "").trim(),
    experienceLevel: (experienceLevel || "").trim(),
    portfolioUrl: (portfolioUrl || "").trim(),
    linkedInUrl: (linkedInUrl || "").trim(),
    message: (message || "").trim(),
    resume: resume || null,
    attachments: Array.isArray(attachments) ? attachments : (resume ? [resume] : []),
  };

  const response = await fetch(`${API_BASE_URL}/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    const errorMsg = data.message || "Unable to submit your application. Please try again later.";
    throw new Error(errorMsg);
  }

  return {
    success: true,
    message: data.message || "Application submitted successfully!",
    data: data.data || null,
  };
}

// Backward compatibility alias for contact email dispatcher
export const sendContactMessage = submitContact;

export default {
  API_BASE_URL,
  fileToBase64,
  checkHealth,
  submitContact,
  submitApplication,
  sendContactMessage,
};

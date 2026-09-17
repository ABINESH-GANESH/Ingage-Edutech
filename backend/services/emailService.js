import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

/**
 * HTML entities escaper to prevent user-injected HTML inside emails
 */
function escapeHtml(text) {
  if (!text) return "N/A";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br/>");
}

/**
 * Default fallback recipients if MAIL_TO is missing in .env
 */
const DEFAULT_RECIPIENTS = [
  "info@ingageedutech.com",
  "myingage@gmail.com",
  "dilliganesh@myingage.com",
  "abineshganesh01@gmail.com",
];

/**
 * Configure Nodemailer SMTP Transporter
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Verify SMTP Transporter configuration on server startup
 */
export async function verifyConnection() {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || process.env.SMTP_PASS === "YOUR_GMAIL_APP_PASSWORD") {
      console.warn(
        "⚠️  [SMTP Warning] SMTP_USER or SMTP_PASS is not configured in backend/.env. Emails will fail until a valid Gmail App Password is provided."
      );
      return false;
    }
    await transporter.verify();
    console.log("✅ [SMTP Verified] Connected to SMTP server successfully. Ready to deliver messages.");
    return true;
  } catch (error) {
    console.error("❌ [SMTP Error] Transporter connection verification failed:", error.message);
    return false;
  }
}

/**
 * Send Contact Inquiry Email via Nodemailer SMTP
 */
export async function sendContactEmail(data) {
  const {
    fullName = "",
    email = "",
    phone = "Not provided",
    college = "Not provided",
    enquiryType = "General Enquiry",
    message = "",
    attachments = [],
  } = data;

  // 1. Determine recipients strictly from environment variable
  const recipients = process.env.MAIL_TO
    ? process.env.MAIL_TO.split(",").map((addr) => addr.trim()).filter(Boolean)
    : DEFAULT_RECIPIENTS;

  // 2. Format Submission Timestamp in Indian Standard Time (IST)
  const submissionTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }) + " IST";

  // 3. Construct Subject
  const subject = `[InGage EduTech Inquiry] ${fullName} - ${enquiryType}`;

  // 4. Construct Plain Text Fallback
  const attachedFilesText = attachments.length > 0
    ? `\nATTACHED DOCUMENTS:\n${attachments.map((a) => `- ${a.filename} (Attached)`).join("\n")}\n`
    : "";

  const textContent = `
IN GAGE EDUTECH - WEBSITE CONTACT ENQUIRY
=========================================
A new enquiry has been submitted through the InGage EduTech website.

FULL NAME:
${fullName}

EMAIL ADDRESS:
${email}

PHONE NUMBER:
${phone || "Not provided"}

COLLEGE / INSTITUTION:
${college || "Not provided"}

ENQUIRY TYPE:
${enquiryType}

MESSAGE / REQUIREMENT:
${message}
${attachedFilesText}
SUBMISSION DATE & TIME:
${submissionTime}

-----------------------------------------
Target Recipients: ${recipients.join(", ")}
Reply-To: ${email}
`;

  // 5. Construct Professional, Responsive HTML Email
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f1f5f9;
      padding: 30px 15px;
    }
    .card {
      max-width: 620px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
    }
    .header {
      background: linear-gradient(135deg, #0f172a 0%, #15428F 100%);
      padding: 32px 28px;
      text-align: center;
      border-bottom: 4px solid #76B82A;
    }
    .header-badge {
      display: inline-block;
      background: rgba(118, 184, 42, 0.2);
      color: #76B82A;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 10px;
    }
    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .header p {
      margin: 8px 0 0 0;
      color: #cbd5e1;
      font-size: 14px;
    }
    .content {
      padding: 32px 28px;
    }
    .alert-banner {
      background: #f8fafc;
      border-left: 4px solid #15428F;
      padding: 12px 16px;
      border-radius: 6px;
      margin-bottom: 24px;
      font-size: 13.5px;
      color: #475569;
    }
    .field-row {
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f1f5f9;
    }
    .field-row:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .field-label {
      font-size: 11px;
      font-weight: 800;
      color: #64748b;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 15px;
      font-weight: 600;
      color: #0f172a;
      line-height: 1.5;
    }
    .field-value.highlight {
      color: #15428F;
    }
    .message-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 16px 18px;
      font-size: 14.5px;
      line-height: 1.6;
      color: #1e293b;
      margin-top: 6px;
      white-space: pre-wrap;
    }
    .reply-action-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 10px;
      padding: 16px;
      margin-top: 24px;
      text-align: center;
    }
    .reply-action-box p {
      margin: 0 0 10px 0;
      font-size: 13px;
      color: #166534;
      font-weight: 600;
    }
    .btn-reply {
      display: inline-block;
      background: #15428F;
      color: #ffffff !important;
      text-decoration: none;
      font-size: 13px;
      font-weight: 700;
      padding: 10px 22px;
      border-radius: 8px;
    }
    .footer {
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      padding: 20px 28px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
    }
    .footer p {
      margin: 4px 0;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <div class="header-badge">IN GAGE EDUTECH</div>
        <h1>Website Contact Enquiry</h1>
        <p>A new enquiry has been submitted through the institutional portal.</p>
      </div>

      <div class="content">
        <div class="alert-banner">
          📩 <strong>Direct Sender:</strong> Click "Reply" in your email client to respond directly to <strong>${escapeHtml(email)}</strong>.
        </div>

        <div class="field-row">
          <div class="field-label">FULL NAME</div>
          <div class="field-value">${escapeHtml(fullName)}</div>
        </div>

        <div class="field-row">
          <div class="field-label">EMAIL ADDRESS</div>
          <div class="field-value highlight"><a href="mailto:${escapeHtml(email)}" style="color: #15428F; text-decoration: none;">${escapeHtml(email)}</a></div>
        </div>

        <div class="field-row">
          <div class="field-label">PHONE NUMBER</div>
          <div class="field-value">${escapeHtml(phone || "Not provided")}</div>
        </div>

        <div class="field-row">
          <div class="field-label">COLLEGE / INSTITUTION</div>
          <div class="field-value">${escapeHtml(college || "Not specified")}</div>
        </div>

        <div class="field-row">
          <div class="field-label">ENQUIRY TYPE</div>
          <div class="field-value highlight">${escapeHtml(enquiryType)}</div>
        </div>

        <div class="field-row">
          <div class="field-label">MESSAGE / REQUIREMENT</div>
          <div class="message-box">${escapeHtml(message)}</div>
        </div>

        ${
          attachments.length > 0
            ? `
        <div class="field-row">
          <div class="field-label">ATTACHED RESUME / DOCUMENTS</div>
          <div class="field-value" style="color: #059669; font-size: 14px;">
            ${attachments
              .map(
                (att) =>
                  `📎 <strong>${escapeHtml(att.filename)}</strong> <span style="font-size: 12px; color: #64748b;">(Attached to this email)</span>`
              )
              .join("<br/>")}
          </div>
        </div>
        `
            : ""
        }

        <div class="field-row">
          <div class="field-label">SUBMISSION DATE & TIME</div>
          <div class="field-value" style="font-size: 13px; color: #64748b;">${escapeHtml(submissionTime)}</div>
        </div>

        <div class="reply-action-box">
          <p>Want to respond immediately to ${escapeHtml(fullName)}?</p>
          <a href="mailto:${escapeHtml(email)}?subject=Re:%20${encodeURIComponent(subject)}" class="btn-reply">
            Reply to ${escapeHtml(fullName)} (${escapeHtml(email)})
          </a>
        </div>
      </div>

      <div class="footer">
        <p><strong>InGage EduTech Corporate Hub</strong> • KG 360 Degree IT Park, Perungudi, Chennai</p>
        <p>This automated message was dispatched by the InGage EduTech SMTP Mail Service.</p>
        <p style="font-size: 11px; color: #94a3b8; margin-top: 8px;">
          Recipients: ${recipients.map((r) => escapeHtml(r)).join(", ")}
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`;

  // 6. Mail Options with Reply-To and Attachments properly configured
  const mailOptions = {
    from: `"InGage EduTech Website" <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO
      ? process.env.MAIL_TO.split(",").map((addr) => addr.trim()).filter(Boolean)
      : DEFAULT_RECIPIENTS,
    replyTo: email,
    subject: `[InGage EduTech Inquiry] ${fullName} - ${enquiryType}`,
    html: htmlContent,
    text: textContent,
    attachments: attachments.map((att) => {
      let contentBuffer;
      if (Buffer.isBuffer(att.content)) {
        contentBuffer = att.content;
      } else if (typeof att.content === "string") {
        // Strip data URL prefix if present (e.g., "data:application/pdf;base64,")
        const cleanBase64 = att.content.includes(";base64,")
          ? att.content.split(";base64,").pop()
          : att.content;
        contentBuffer = Buffer.from(cleanBase64, "base64");
      } else {
        contentBuffer = Buffer.from(String(att.content));
      }

      // Determine accurate MIME type from filename extension
      let mimeType = att.contentType;
      const ext = String(att.filename).split(".").pop().toLowerCase();
      if (ext === "pdf") {
        mimeType = "application/pdf";
      } else if (ext === "docx") {
        mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      } else if (ext === "doc") {
        mimeType = "application/msword";
      } else if (ext === "txt") {
        mimeType = "text/plain";
      } else if (ext === "png") {
        mimeType = "image/png";
      } else if (ext === "jpg" || ext === "jpeg") {
        mimeType = "image/jpeg";
      }

      return {
        filename: att.filename,
        content: contentBuffer,
        contentType: mimeType || "application/octet-stream",
        contentDisposition: "attachment",
      };
    }),
  };

  // 7. Dispatch via Nodemailer SMTP
  const info = await transporter.sendMail(mailOptions);
  console.log(`📨 [Email Sent] Message dispatched successfully (ID: ${info.messageId}) to:`, recipients.join(", "));
  return { success: true, messageId: info.messageId };
}

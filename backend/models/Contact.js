import { query } from "../config/db.js";

/**
 * Contact Model
 * Handles database operations for website contact enquiries
 */
export const Contact = {
  /**
   * Save a new contact enquiry to the database
   * @param {Object} data - Contact form data
   * @returns {Promise<Object|null>} Insert result or null if DB is offline
   */
  async create({ fullName, email, phone = null, college = null, enquiryType = "General Enquiry", message = null }) {
    const sql = `
      INSERT INTO contacts (full_name, email, phone, college, enquiry_type, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      fullName,
      email,
      phone || null,
      college || null,
      enquiryType || "General Enquiry",
      message || null,
    ];

    try {
      const result = await query(sql, params);
      return result;
    } catch (error) {
      console.error("❌ [Contact Model Error] Failed to insert contact:", error.message);
      return null;
    }
  },

  /**
   * Fetch latest contact inquiries
   * @param {number} limit 
   * @param {number} offset 
   * @returns {Promise<Array>}
   */
  async findAll({ limit = 50, offset = 0 } = {}) {
    const sql = `
      SELECT id, full_name, email, phone, college, enquiry_type, message, created_at
      FROM contacts
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;
    try {
      const rows = await query(sql, [limit, offset]);
      return rows || [];
    } catch (error) {
      console.error("❌ [Contact Model Error] Failed to fetch contacts:", error.message);
      return [];
    }
  },
};

export default Contact;

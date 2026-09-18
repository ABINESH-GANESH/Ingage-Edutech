import { query } from "../config/db.js";

/**
 * Application Model
 * Handles database operations for student and candidate program applications
 */
export const Application = {
  /**
   * Save a new application to the database
   * @param {Object} data - Application form data
   * @returns {Promise<Object|null>} Insert result or null if DB is offline
   */
  async create({
    fullName,
    email,
    phone = null,
    programType = "Course Track",
    preferredTrack = null,
    college = null,
    degree = null,
    graduationYear = null,
    experienceLevel = null,
    portfolioUrl = null,
    linkedinUrl = null,
    message = null,
  }) {
    const sql = `
      INSERT INTO applications (
        full_name, email, phone, program_type, preferred_track,
        college, degree, graduation_year, experience_level,
        portfolio_url, linkedin_url, message
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      fullName,
      email,
      phone || null,
      programType || "Course Track",
      preferredTrack || null,
      college || null,
      degree || null,
      graduationYear || null,
      experienceLevel || null,
      portfolioUrl || null,
      linkedinUrl || null,
      message || null,
    ];

    try {
      const result = await query(sql, params);
      return result;
    } catch (error) {
      console.error("❌ [Application Model Error] Failed to insert application:", error.message);
      return null;
    }
  },

  /**
   * Fetch latest applications
   * @param {number} limit 
   * @param {number} offset 
   * @returns {Promise<Array>}
   */
  async findAll({ limit = 50, offset = 0 } = {}) {
    const sql = `
      SELECT *
      FROM applications
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;
    try {
      const rows = await query(sql, [limit, offset]);
      return rows || [];
    } catch (error) {
      console.error("❌ [Application Model Error] Failed to fetch applications:", error.message);
      return [];
    }
  },
};

export default Application;

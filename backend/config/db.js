import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let pool = null;
let isConnected = false;

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "ingage_edutech",
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

/**
 * Initialize MySQL Database Connection Pool & Tables
 */
export async function initDatabase() {
  // If host is not provided, skip
  if (!process.env.DB_HOST && !process.env.DB_NAME) {
    console.log("ℹ️  [Database] MySQL credentials not configured in .env. Running in SMTP-only mode.");
    return { isConnected: false };
  }

  try {
    // 1. Connect without database first to ensure database exists
    const rootConnection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
      port: dbConfig.port,
    });

    await rootConnection.query(
      `CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
    );
    await rootConnection.end();

    // 2. Create the connection pool with target database
    pool = mysql.createPool(dbConfig);

    // 3. Test pool connection
    const connection = await pool.getConnection();

    // 4. Auto-create contacts table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        college VARCHAR(255),
        enquiry_type VARCHAR(100) DEFAULT 'General Enquiry',
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 5. Auto-create applications table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        program_type VARCHAR(100) DEFAULT 'Course Track',
        preferred_track VARCHAR(255),
        college VARCHAR(255),
        degree VARCHAR(100),
        graduation_year VARCHAR(20),
        experience_level VARCHAR(50),
        portfolio_url VARCHAR(500),
        linkedin_url VARCHAR(500),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    connection.release();
    isConnected = true;
    console.log(`✅ [Database] MySQL connected & tables verified: ${dbConfig.database} @ ${dbConfig.host}:${dbConfig.port}`);
    return { isConnected: true, pool };
  } catch (error) {
    isConnected = false;
    console.warn(`⚠️  [Database Warning] MySQL connection could not be established: ${error.message}`);
    console.warn(`💡 Note: Server will continue operating normally. Form submissions will dispatch via SMTP.`);
    return { isConnected: false, error: error.message };
  }
}

/**
 * Execute SQL Query with safety check
 * @param {string} sql 
 * @param {Array} params 
 * @returns {Promise<any>}
 */
export async function query(sql, params = []) {
  if (!isConnected || !pool) {
    return null;
  }
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (err) {
    console.error("❌ [Database Query Error]:", err.message);
    return null;
  }
}

export function getDbStatus() {
  return {
    isConnected,
    host: dbConfig.host,
    database: dbConfig.database,
    port: dbConfig.port,
  };
}

export default {
  initDatabase,
  query,
  getDbStatus,
};

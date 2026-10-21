import { Pool } from "pg";

// Supabase PostgreSQL connection (server-side only)
// Uses the DATABASE_URL from .env which points to Supabase with SSL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Supabase
  },
  max: 10, // Supabase free tier allows 10 connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

// Test connection on first use
let connected = false;
export async function testConnection() {
  if (connected) return true;
  try {
    const client = await pool.connect();
    const res = await client.query("SELECT NOW()");
    client.release();
    connected = true;
    console.log("✅ Supabase DB connected:", res.rows[0].now);
    return true;
  } catch (err) {
    console.error("❌ Supabase DB connection failed:", err);
    return false;
  }
}

export default pool;
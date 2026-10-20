import { Pool } from "pg";

// This connects directly to your local PostgreSQL (pgAdmin)
// It uses the DATABASE_URL from your .env.local file
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

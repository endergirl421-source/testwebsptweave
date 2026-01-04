import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  // ใช้ค่าจาก Environment Variables ที่ตั้งไว้ใน Vercel
  host: process.env.DATABASE_HOST || 'gateway01.ap-southeast-1.prod.aws.tidbcloud.co',
  user: process.env.DATABASE_USER || '3hmuz2h1bVWKz25.root',
  password: process.env.DATABASE_PASSWORD ||'SVvYxQkmj7wNjx2y', 
  database: process.env.DATABASE_NAME || 'web',
  port: 4000,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // ⚠️ สำคัญมาก: ต้องมีส่วนนี้เพื่อให้ต่อ TiDB Cloud ได้
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});

export default pool;
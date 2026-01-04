import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.co',
  user: '3hmuz2h1bVWKz25.root',
  // แนะนำให้ใช้ตัวแปรจาก Vercel แต่ถ้าจะใส่ตรงๆ ให้ใส่แบบนี้
  password: process.env.DATABASE_PASSWORD || 'SVvYxQkmj7wNjx2y', 
  database: 'sensor',
  port: 4000,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // ตั้งค่าเวลาเชื่อมต่อให้นานขึ้นเพื่อลดปัญหา ETIMEDOUT
  connectTimeout: 20000, 
  // ⚠️ ส่วนสำคัญที่สุดสำหรับ TiDB Cloud
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});

export default pool;
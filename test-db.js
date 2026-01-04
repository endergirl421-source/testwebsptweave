const mysql = require('mysql2/promise');

async function testConnection() {
    try {
        console.log("☁️ กำลังเชื่อมต่อ TiDB Cloud (แบบ Config แยก)...");

        // 👇 แก้ข้อมูลตรงนี้ให้ตรงกับในเว็บ TiDB ครับ
        const connection = await mysql.createConnection({
            host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com', // ดูจากหน้าเว็บ (ไม่ต้องมี mysql://)
            port: 4000,                                             // พอร์ตมาตรฐาน TiDB
            user: '3hmuz2h1bVWKz25.root',                                    // User ที่มี .root
            password: 'UOxnzm3ARGp6KzoZ',                                // รหัสผ่าน (ใส่ตรงนี้ ตัวอักษรพิเศษไม่เพี้ยนแน่นอน)
            database: 'sensor',                                       // ชื่อ Database
            ssl: {
                rejectUnauthorized: false                           // ยอมรับ SSL ของ TiDB
            }
        });

        console.log("✅ เย้! เชื่อมต่อสำเร็จแล้ว! (Connected)");

        const [rows] = await connection.execute('SHOW TABLES');
        console.log("ตารางที่เจอ:", rows);

        await connection.end();

    } catch (err) {
        console.error("❌ ยังไม่ได้ครับ:", err.message);
    }
}

testConnection();
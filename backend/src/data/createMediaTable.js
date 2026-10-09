import pool from "../config/db.js"

const createMediaTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS medias (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    rating VARCHAR(100) NOT NULL,
    dateFinished VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`
try {
    pool.query(queryText);
    console.log("Media table created if not exists")
} catch (error) {
    console.log("Error creating media table: ", error)
    
}
};

export default createMediaTable;
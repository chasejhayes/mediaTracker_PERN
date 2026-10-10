import pool from "../config/db.js"

export const getAllMediasService = async () => {
    const result = await pool.query("SELECT * FROM Medias");
    return result.rows;
};

export const getMediaByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM Medias where id = $1", [id]);
    return result.rows[0]
};

export const createMediaService = async (title, rating, dateFinished) => {
    const result = await pool.query("INSERT INTO Medias (title, rating, dateFinished) VALUES ($1, $2, $3) RETURNING *", [title, rating, dateFinished]);
    return result.rows[0]
};

export const updateMediaService = async (id, title, rating, dateFinished) => {
    const result = await pool.query("UPDATE Medias SET title=$1, rating=$2, dateFinished=$3 WHERE id=$4 RETURNING *", [title, rating, dateFinished, id]);
    console.log(result)
    console.log(result.rows[0])
    return result.rows[0]

};

export const deleteMediaService = async (id) => {
    const result = await pool.query("DELETE FROM Medias WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};
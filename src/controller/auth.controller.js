import bcrypt from "bcrypt";
import { pool } from "../db.js";

export async function register(req, res){
    const {username, password} = req.body;
    const hash = await bcrypt.hash(password, 10);
    const result = await pool.query(
        `INSERT INTO users(username, password_hash) 
        VALUES($1,$2)
        RETURNING user_id, username`,
        [username, hash]


    );
    res.status(201).json(result.rows[0]);


}
export async function login(req, res){

}
// internal library of node.js//
import fs from "fs";
import path from "path";

import {pool} from "../src/db.js";

export async function initDatabase() {
    try{
        const schemapath = path.resolve('db/schema.sql');
        const sql=fs.readFileSync(schemapath,"utf-8");
        await pool.query(sql);
        console.log("Database schema initialized");

    }catch(err){
        console.error("Database Initialization failed:", err);

    }
}
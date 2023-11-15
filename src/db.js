import { Pool } from 'pg'

export const pool = new Pool({
    user: "academy",
    database: "citybike",
    password: "academy",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    port: 5432,
    host: "localhost",
});
  
module.exports = { pool };
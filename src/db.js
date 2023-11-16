import { Pool } from 'pg'

export const pool = new Pool({
    // Move to ENV configuration file
    user: "academy",
    database: "citybike",
    password: "academy",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    port: 5432,
    host: "dev-academy-spring-2024-exercise-db-1",
});
  
module.exports = { pool };
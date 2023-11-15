import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

const { pool } = require("../../../db");

export async function GET() {
    const query = await pool.query(
        'SELECT * FROM station',
    );
    return NextResponse.json(query.rows);
}
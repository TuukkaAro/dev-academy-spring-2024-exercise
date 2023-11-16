import { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

const { pool } = require("../../../../db");

export async function GET(request: NextRequest, context: any) {
    
    const query = await pool.query(
        'SELECT * FROM station WHERE id = ' + context.params.id,
    );
    return NextResponse.json(query.rows);
}
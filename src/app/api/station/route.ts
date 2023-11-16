import { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

const { pool } = require("../../../db");

export async function GET() {
    let query;
    try {
        query = await pool.query(
            'SELECT * FROM station',
        );
    } catch (error) {
        return NextResponse.json( [] );
    }
    return NextResponse.json(query.rows);
}
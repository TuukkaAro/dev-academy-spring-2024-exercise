import { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

const { pool } = require("../../../db");

export async function GET() {

    try {
        const stations = await pool.query(
            'SELECT * FROM station',
        );
        return NextResponse.json(stations.rows);
    } catch (error) {
        console.error(error);
        return NextResponse.json( [ {
            station_name: 'failed to load',
            station_address: '',
            error: error
        } ] );
    }
}
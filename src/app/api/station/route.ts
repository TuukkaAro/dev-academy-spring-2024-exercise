import { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

const { pool } = require("../../../db");
//For no this file remains unused, since for whatever reason Next wouldn't stop compiling it as static page file.
export async function GET(request: NextRequest, context: any) {

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
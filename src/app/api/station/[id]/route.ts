import { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

const { pool } = require("../../../../db");

export async function GET(request: NextRequest, context: any) {

    if (context.params.id == 'all') {
        const stations = await pool.query(
            'SELECT * FROM station',
        );
        return NextResponse.json(stations.rows);
    } else {
        const stations = await pool.query(
            'SELECT * FROM station WHERE id = ' + context.params.id,
        );
        const departures = await pool.query(
            'SELECT * FROM journey WHERE departure_station_id = ' + stations.rows[0].id,
        );
        const returns = await pool.query(
            'SELECT * FROM journey WHERE return_station_id = ' + stations.rows[0].id,
        );
        let distanceSum: number = departures.rows.map((a: { distance: any; }) => a.distance).reduce(function (a: any, b: any) {
            return a + b;
        });
        let durationSum: number = departures.rows.map((a: { duration: any; }) => a.duration).reduce(function (a: any, b: any) {
            return a + b;
        });
        return NextResponse.json({
            station: stations.rows[0],
            departuresTotal: departures.rows.length,
            distanceAverage: distanceSum / departures.rows.length,
            durationAverage: durationSum / departures.rows.length,
            returnsTotal: returns.rows.length,
        });
    }
}
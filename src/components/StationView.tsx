//"use client"

import * as React from 'react';

interface Station {
    [key: string]: any
}

export default function StationView() {
    //const [stations, setStations] = React.useStte<Station[] | undefined>(undefined);
    const { pool } = require("../../db");
    var data = undefined;
    console.log('moi',);

    async function getData() {
        const res = await pool.query(
            'SELECT * FROM station',
        );
        //setStations(res.rows);
        data = res;
        return res;
    }
    getData()
    console.log('res', data);

    if (data) {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
        </React.Fragment>
    )
}
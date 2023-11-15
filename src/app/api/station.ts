import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

const { pool } = require("../../db");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    console.log('terveisa apista');
    const query = await pool.query(
        'SELECT * FROM station',
    );
    res.status(200).json({ message: 'Hello from Next.js!' })
}
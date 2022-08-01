import React from 'react'
import connectToDb from '../../Lib/mongodb';

async function api_binsearch(req, res) {
    try {
        if (req.query.bin) {
        let { db } = await connectToDb();
        let results = await db.collection("inventory").aggregate(
                [{ $match: {bin: req.query.bin}}]
        )
        .toArray();

        return res.send(results);
        }
        res.send([]);
} catch (error) {
        console.error(error);
        res.send([]);
}
}

export default api_binsearch
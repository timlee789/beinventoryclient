import React from 'react'
import { connectToDb } from '../../Lib/mongodb';

async function itemsearch(req, res) {
    try {
        if (req.query.item_code) {
       let { db } = await connectToDb();
        let results = await db.collection("inventory").aggregate(
                [{ $match: {item_code: req.query.item_code}}]
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

export default itemsearch
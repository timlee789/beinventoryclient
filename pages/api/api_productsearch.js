import React from 'react'
import { connectToDb } from '../../Lib/mongodb';

async function productsearch(req, res) {
   
    try {
        if (req.query.product_name) {
        let results;
        let { db } = await connectToDb();
        if (req.query.product_name.includes(",") || req.query.product_name.includes(" ")) {
        results = await db.collection("inventory").aggregate([
                {
                $search: {
                index: "product_search",
                compound:
                {must:
                [{text: {
                query: req.query.product_name,
                path: "product_name",
                fuzzy: {
                        maxEdits: 1,
                },
                },}]}
                },
                },
                {
                $project: {
                _id: 0,
                bin: 1,
                product_name: 1,
                bin: 1,
                box_qty: 1,
                pcs_qty: 1,
                item_code: 1,
                upc_code: 1,
                //score: { $meta: "searchScore" },
                },
                },
                {
                $limit: 20,
                },
        ])
        .toArray();
        console.log(results)
        return res.send(results);
        }

        results = await db.collection("inventory").aggregate([
        {
                $search: {
                index: "product_search",
                compound:
                {must:
                [{text: {
                query: req.query.product_name,
                path: "product_name",
                fuzzy: {
                        maxEdits: 1,
                },
                },}]}
                },
                $group:
                {
                        _id : "$product_name",
                        sum: { $sum: "$pcs_qty"}
                }
        },
        {
                $project: {
                _id: 0,
                bin: 1,
                product_name: 1,
                bin: 1,
                box_qty: 1,
                pcs_qty: 1,
                item_code: 1,
                upc_code: 1,
                //score: { $meta: "searchScore" },
                },
        },
        {
                $limit: 20,
        },
        ])
        .toArray();

        return res.send(results);
        }
        res.send([]);
} catch (error) {
        console.error(error);
        res.send([]);
}
}

export default productsearch
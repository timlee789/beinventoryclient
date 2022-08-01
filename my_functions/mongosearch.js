const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient } = require("mongodb");
const { query } = require('express');

dotenv.config()

const app = express();
const client = new MongoClient(process.env.MONGODB_URI);
client.connect().then(() => console.log("connected to db"));

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/upcmultisearch", async (req, res) => {
        try {
                if (req.query.upc_code) {
                let results;
                results = await client
                .db("beinventory")
                .collection("inventory")
                .aggregate(
                        [{ $match: {upc_code: req.query.upc_code}}]
                )
                .toArray();
        
                return res.send(results);
                }
                res.send([]);
        } catch (error) {
                console.error(error);
                res.send([]);
        }
        });

app.get("/upcsearchone", async (req, res) => {
        try {
                if (req.query.upc_code) {
                let results;
                results = await client
                .db("beinventory")
                .collection("itemdata")
                .aggregate(
                        [{ $match: {upc_code: req.query.upc_code}},
                        { $limit: 1}]
                )
                .toArray();
        
                return res.send(results);
                }
                res.send([]);
        } catch (error) {
                console.error(error);
                res.send([]);
        }
        });
app.get("/binsearch", async (req, res) => {
        try {
                if (req.query.bin) {
                let results;
                results = await client
                .db("beinventory")
                .collection("inventory")
                .aggregate(
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
        });
        
app.get("/search", async (req, res) => {
        try {
                if (req.query.product_name) {
                let results;
                if (req.query.product_name.includes(",") || req.query.product_name.includes(" ")) {
                results = await client
                .db("beinventory")
                .collection("inventory")
                .aggregate([
                        {
                        $search: {
                        index: "namesearch",
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
        
                results = await client
                .db("beinventory")
                .collection("inventory")
                .aggregate([
                {
                        $search: {
                        index: "namesearch",
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
        });
        
        app.get("/itemsearch", async (req, res) => {
                try {
                        if (req.query.item_code) {
                        let results;           
                        results = await client
                        .db("beinventory")
                        .collection("inventory")
                        .aggregate(
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
                });


const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`server is running at PORT ${PORT}`))

;
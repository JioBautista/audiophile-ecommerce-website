const express = require("express");
const router = express.Router();
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

router.get("/", cors(), async (request, response) => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const client = await pool.connect();
  const result = await client.query(
    `SELECT jsonb_agg(properties) AS data FROM products`
  );
  client.release();
  console.log(result);
  response.json(result.rows[0].data);
});

module.exports = router;

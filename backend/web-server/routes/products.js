const express = require("express");
const router = express.Router({ mergeParams: true });
const pool = require("../database/index");
const cors = require("cors");

router.get("/", cors(), async (req, res) => {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(`SELECT * FROM products`);
    res.json(rows);
    client.release();
    console.log(rows);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", cors(), async (req, res) => {
  try {
    const id = req.params.id;
    const client = await pool.connect();
    const { rows } = await client.query(
      `SELECT * FROM products WHERE id = ${id}`
    );
    res.json(rows);
    client.release();
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;

const express = require("express");
const router = express.Router({ mergeParams: true });
const pool = require("../database/index");

router.get("/", async (req, res) => {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(`SELECT * FROM products`);
    res.json(rows);
    client.release();
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
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

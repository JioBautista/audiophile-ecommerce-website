const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.get("/", async (request, response) => {
  const test_data = await prisma.playing_with_neon.findMany();
  response.json(test_data);
});

module.exports = router;

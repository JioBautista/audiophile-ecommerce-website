const express = require("express");
const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();
const app = express();

app.get("/", async (request, response) => {
  const test_data = await prisma.playing_with_neon.findMany();
  response.json(test_data);
});

const server = app.listen(3000);

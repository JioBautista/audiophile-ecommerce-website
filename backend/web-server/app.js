require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const productsRouter = require("./routes/products.js");

app.use("/", productsRouter);
app.listen(port, () => {
  console.log(`Server listening to http://localhost:${port}/`);
});

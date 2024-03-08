const express = require("express");
const app = express();
const port = 2500;
const productController = require('./controllers/productController')

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use('/products', productController)

app.listen(port, () => {
  console.log(`port run on ${port}`);
});

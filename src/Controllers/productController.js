// Layer untuk handle request dan response
// Biasanya juga handle validasi body

const express = require("express");
const router = express.Router();
const { getAllProducts, getAllProductsById, createProduct, deleteProductById, editProductById } = require("../Services/productService");

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productsId = parseInt(req.params.id);
    const products = await getAllProductsById(productsId)
    res.send(products);
  } catch (error) {
    res.status(400).send('product not found')
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const product = await createProduct(newProduct)
    res.send(product)
  } catch (error) {
    res.status(400).send(error.message)
  }
});

router.put("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const productData = req.body;

  if (
    !(
      productData.name &&
      productData.price &&
      productData.description &&
      productData.image
    )
  ) {
    return res.status(400).send("some fields missing");
  }

  const product = await editProductById(productId, productData)

  res.send({
    data: product,
    message: "update product success",
  });
});

router.patch("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const productData = req.body;

  const product = await editProductById(productId, productData)
  res.send({
    data: product,
    message: "kamu berhasil ubah 1 columns",
  });
});

router.delete("/:id", async (req, res) => {
  try {
    const productid = parseInt(req.params.id);
    await deleteProductById(productid)
    res.send("product terhapus");
  } catch (error) {
    res.status(400).send('product not found')
  }
});

module.exports = router;

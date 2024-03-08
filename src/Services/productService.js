//service layer untuk business logic seperti if condition dll,
//function nya reusable atau bisa {digunakan berulang kali}

const { findsProducts, findsProductById, insertProduct, editProduct, deleteProduct } = require("../Repository/productRepository");

const getAllProducts = async () => {
  const products = await findsProducts();
  return products;
};

const getAllProductsById = async (id) => {
  if (typeof id !== "number") {
    throw Error("id is not a number");
  }

  const products = await findsProductById(id)
  if (!products) {
    return res.status(400).send("product not found");
  }

  return products;
};

const createProduct = async (newProduct) => {
  const product = await insertProduct(newProduct)
  return product;
};

const editProductById = async (id, productData) => {
  const product = await editProduct(id, productData)
  return product;
};

const deleteProductById = async (id) => {
  await deleteProduct(id)
};

module.exports = {
  getAllProducts,
  getAllProductsById,
  createProduct,
  deleteProductById,
  editProductById,
};

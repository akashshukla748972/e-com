const Product = require("../models/product");

// get all Products
module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(`Error in Retrieving Products: ${err.message}`);
    res.status(500).json({ error: `Internal Server Error` });
  }
};

// insert a Product
module.exports.create = async (req, res) => {
  console.log("hello");
  try {
    const { id, name, quantity } = req.body;
    const newProduct = new Product({ id, name, quantity });
    const product = await newProduct.save();
    res.status(201).json({ data: { product } });
  } catch (err) {
    console.error(`Error in creating Product ${err.message}`);
    res.status(400).json({ error: `Bad Request` });
  }
};

// Delete Specific Product
module.exports.delete = async (req, res) => {
  try {
    const productId = req.params.id;
    // find and delete product
    const deletedProduct = await Product.findOneAndDelete({ id: productId });
    if (deletedProduct) {
      res.json({ message: `Product Deleted ` });
    } else {
      res.status(404).json({ error: `Product not Found` });
    }
  } catch (err) {
    console.error(`Error in Deleting Product ${err.message}`);
    res.status(500).json({ error: `Internal Server Error` });
  }
};

// Update Product
module.exports.update = async (req, res) => {
  try {
    const productId = req.params.id;
    const { number } = req.query.number;

    // validate the number parameter
    if (isNaN(number) || number <= 0) {
      return res
        .status(400)
        .json({ error: `Invalid or missing "number" parameter` });
    }
    // Find Product by ID
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ error: `Product not found` });
    }
    // Update the Quantity of product
    const updatedQuantity = product.quantity + parseInt(number);
    product.quantity = updatedQuantity;

    // Save the updataed product
    await product.save();

    return res
      .status(200)
      .json({ data: { product }, message: `Updated successfully` });
  } catch (err) {
    console.error("Error in updataing Quantity ${err.message}");
    res.status(500).json({ error: `Internal Server Error` });
  }
};

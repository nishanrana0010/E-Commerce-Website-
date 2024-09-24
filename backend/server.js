const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");

// Initialize the app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Load environment variables
dotenv.config();

// Middleware for parsing JSON bodies
app.use(express.json());

// Set up file upload handling using multer
const upload = multer();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Product Schema
const productSchema = new mongoose.Schema(
  {
    title: String,
    imageUrl: String,
    price: Number,
    category: String,
    image: Buffer, // Store image as a Buffer in MongoDB
  },
  { collection: "collection" }
);

const Product = mongoose.model("Product", productSchema);

// Route to GET all products
app.get("/collection", async (req, res) => {
  try {
    const category = req.query.category; // Get category from query params (e.g., 'womens')

    // If no category is provided, fetch all products
    let filter = {};
    if (category) {
      filter = { category }; // Filter by category if provided
    }

    const products = await Product.find(filter); // Find products based on the filter
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to GET a product by ID
app.get("/collection/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to POST a new product with image upload
app.post("/products", upload.single("image"), async (req, res) => {
  const { title, imageUrl, price, category } = req.body;

  // Create a new product
  const product = new Product({
    title,
    imageUrl,
    price,
    category,
    image: req.file.buffer, // Save the uploaded image as a Buffer
  });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

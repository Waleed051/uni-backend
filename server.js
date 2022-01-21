const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv");
const error = require("./middlewares/errorMiddleware");
const colors = require("colors");
const { products } = require("./data/products");

// Product Routes
const productRoutes = require("./routes/productRoutes");
// User Routes
const userRoutes = require("./routes/userRoutes");
// Order Routes
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();

connectDb();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running...");
});

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.use("/api/orders", orderRoutes);

app.use(error.notFound);

app.use(error.errorHandler);
console.log("dotenv", process.env);
app.listen(
  process.env.PORT || 5000,
  console.log("Server running on port 5000")
);

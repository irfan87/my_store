const express = require("express");
const dotenv = require("dotenv");

const products = require("./products");

dotenv.config();

const app = express();

// route for test
app.get("/", (req, res) => res.send("hello world!"));

// get the product
app.get("/api/products", (req, res) => {
	res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.status(200).json(product);
});

// verify the port
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
	PORT,
	console.log(`Server is running in ${MODE} mode on port ${PORT}`)
);

import express from "express";
import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

const router = express.Router();

// @desc FETCH ALL PRODUCTS
// @route GET /api/products
// @access Public Route
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.status(200).json(products);
	})
);

// @desc FETCH SINGLE PRODUCTS
// @route GET /api/products/1
// @access Public Route
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	})
);

export default router;

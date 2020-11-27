import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

import productRoute from "./routes/productRoutes.js";
import { errorHandler, pageNotFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.route("/", (req, res) => res.send("API is running...."));

app.use("/api/products", productRoute);

app.use(pageNotFound);

app.use(errorHandler);

// verify the port
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
	PORT,
	console.log(
		`Server is running in ${MODE} mode on port ${PORT}`.magenta.underline.bold
	)
);

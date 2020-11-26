import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import ProductsListing from "../components/ProductsListing/ProductsListing";

// import products from "../products";

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get("/api/products");

			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xlg={3} key={product._id}>
						<ProductsListing product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;

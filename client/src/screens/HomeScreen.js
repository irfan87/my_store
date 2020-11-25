import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductsListing from "../components/ProductsListing/ProductsListing";

import products from "../products";

const HomeScreen = () => {
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

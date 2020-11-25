import React from "react";
import { Card } from "react-bootstrap";
import Ratings from "../Ratings";

const ProductsListing = ({
	product: { _id, name, description, image, rating, numReviews, price },
}) => {
	return (
		<Card className="my-3 p-3 rounded">
			<a href={`/product/${_id}`}>
				<Card.Img src={image} alt={name} variant="top" />
			</a>
			<Card.Body>
				<a href={`/product/${_id}`}>
					<Card.Title as="div">
						<strong>{name}</strong>
					</Card.Title>
				</a>
				<Card.Text as="div">
					<div className="my-3">
						<Ratings value={rating} text={`${numReviews} reviews`} />
					</div>
				</Card.Text>
				<Card.Text as="h3">${price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProductsListing;

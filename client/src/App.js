import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<h1>My Store</h1>
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default App;

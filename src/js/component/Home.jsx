import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardGroup from "./CardGroup.jsx";
 
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<CardGroup />
		</div>
	);
};

export default Home;

import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CharacterCards } from "../component/CharacterCards";
import { PlanetCards } from "../component/PlanetCards";
import { VehicleCards } from "../component/VehicleCards";

export const Home = () => (
	<div className="text-center mt-5">
		{/* <h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
		<h2 className="d-flex justify-content-start"> Characters </h2>
		<hr />
		<CharacterCards />
		<h2 className="d-flex justify-content-start mt-5"> Planets </h2>
		<hr />
		<PlanetCards />
		<h2 className="d-flex justify-content-start mt-5"> Vehicles</h2>
		<hr />
		<VehicleCards />
	</div>
);

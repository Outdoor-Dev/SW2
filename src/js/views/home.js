import React, { useContext } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CharacterCards } from "../component/CharacterCards";
import { PlanetCards } from "../component/PlanetCards";
import { VehicleCards } from "../component/VehicleCards";
import { Context } from "../store/appContext";
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="characters">
				<h2>Characters</h2>
				<div className="character-card d-flex align-content  flex-wrap ">
					{store.characters.map((value, index) => {
						return <CharacterCards key={index} characters={value} index={index} />;
					})}
				</div>
			</div>

			<h2 className="d-flex justify-content-start mt-5"> Planets </h2>
			<hr />
			<PlanetCards />
			<h2 className="d-flex justify-content-start mt-5"> Vehicles</h2>
			<hr />
			<VehicleCards />
		</div>
	);
};

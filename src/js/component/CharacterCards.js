import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CharacterDetails } from "../views/CharacterDetails";
import { Context } from "../store/appContext";
export const CharacterCards = ({ character, index }) => {
	const { actions, store } = useContext(Context);

	const images = {
		"C-3PO":
			"https://static.wikia.nocookie.net/disney/images/c/cc/Profile_-_C-3PO.jpg/revision/latest?cb=20200418144012",
		"Luke Skywalker":
			"https://static.wikia.nocookie.net/starwars/images/3/3d/LukeSkywalker.png/revision/latest?cb=20201218190434",
		"R2-D2": "https://cdn.robgreer.com/aa6429a9-d544-4754-8263-4285c19d9c46/t/1024/26c8n5h6/mike-senna-r2d2.jpg",
		"Darth Vader": "https://i.pinimg.com/originals/1a/bc/b5/1abcb54c7291437e92e659884e30a1f1.jpg",
		"Leia Organa": "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
		"Owen Lars":
			"https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20171108050140",
		"Beru Whitesun lars": "https://theartmad.com/wp-content/uploads/2015/06/Beru-Lars-2.jpg",
		"R5-D4":
			"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F01%2Fthe-mandalorian-2000.jpg&q=85",
		"Biggs Darklighter":
			"https://static.wikia.nocookie.net/starwars/images/4/43/Biggs.png/revision/latest?cb=20130305010633",
		"Obi-Wan Kenobi":
			"https://cdn.vox-cdn.com/thumbor/KnYjrcxAozD5Q8pmr3QAXsJCwag=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg"
	};

	return (
		<div className="card ml-5 " style={{ width: 350, height: 440 }}>
			<div className="charactercards background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img
					src={images[character.name]}
					className="card-img-top"
					style={{ width: 305, height: 360 }}
					alt="..."
				/>
				<div className="card-body ">
					<h5 className="card-title ">{character.name}</h5>
					<p className="card-text">
						Height:
						{character.height}
					</p>
					<p className="card-text">
						Eye Color:
						{character.eye_color}
					</p>
					<p className="card-text">
						Hair Color:
						{character.hair_color}
					</p>

					<Link
						to={"/characterdetails"}
						className="btn btn-outline-dark d-flex justify-content-start mt-5"
						style={{ width: 110 }}
						onClick={() => {
							actions.setDetails(character);
						}}>
						Learn More
					</Link>
					<i className="far fa-heart d-flex justify-content-end pb-5" />
				</div>
			</div>
		</div>
	);
};

CharacterCards.propTypes = {
	character: PropTypes.object
};

CharacterCards.propTypes = {
	index: PropTypes.number
};

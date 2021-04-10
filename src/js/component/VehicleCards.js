import React from "react";

export const VehicleCards = () => {
	return (
		<div className="card ml-5 mt-5" style={{ width: 350, height: 440 }}>
			<img
				src="https://parade.com/wp-content/uploads/2018/03/golden-puppy-life-national-geographic-ftr.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text ">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>

				<a href="#" className="btn btn-outline-dark d-flex justify-content-start mt-5" style={{ width: 110 }}>
					Learn More
				</a>
				<i className="far fa-heart d-flex justify-content-end pb-5" />
			</div>
		</div>
	);
};

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light" style={{ height: 60 }}>
			<div className="container-fluid d-flex justify-content-end">
				<a className="navbar-brand ">Navbar</a>
				<form className="d-flex mr-5">
					<input className="form-control " type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-dark" type="submit">
						Search
					</button>
				</form>

				<div className="dropdown ">
					<button
						className="btn btn-outline-dark text-dark dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<li>
							<a className="dropdown-item" href="#">
								Action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Another action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

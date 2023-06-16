import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<React.Fragment>
			<header className="header">
				<nav className="navbar d-flex align-items-center">
					<div className="container flex-center-x">
						<Link className="navbar-brand" to="/">
							<h1 className="color2">Cocktails</h1>
						</Link>
					</div>
				</nav>
			</header>
		</React.Fragment>
	);
}

export default Header;

import React, { useState } from "react";
import "./App.css";
import { Home } from "./componentes/Home";
import { Switch, Route, useLocation } from "react-router-dom";
import { Navigation } from "./componentes/Navigation";
import { MovieDetails } from "./componentes/Movie/MovieDetails";
import { Search } from "./componentes/Search";
import { Profile } from "./componentes/Profile";
import styled from "styled-components";
import { Logged } from "./componentes/Auth/Logged";

// const theme = {

// }

const Main = styled.main`
`

const App: React.FC = () => {
	let location = useLocation<any>();
	// This piece of state is set when one of the
	// gallery links is clicked. The `background` state
	// is the location that we were at when one of
	// the gallery links was clicked. If it's there,
	// use it as the location for the <Switch> so
	// we show the gallery in the background, behind
	// the modal.
	let background = location.state && location.state.background;

	const [backgroundColor] = useState("#323233");
	document.body.style.backgroundColor = backgroundColor;
	return (
		<div>
			<Navigation></Navigation>

			<Main >
				<div>
					<Switch location={background || location}>
						<Route exact path="/" children={<Home />} />
						<Route exact path="/logged" children={<Logged />} />
						<Route exact path="/search" children={<Search />} />
						<Route path="/profile" children={<Profile />} />
					</Switch>
					{/* Show the modal when a background page is set */}
					{background && (
						<Route path="/movie-details/:id" children={<MovieDetails />} />
					)}
				</div>
			</Main>
		</div>
	);
};

export default App;

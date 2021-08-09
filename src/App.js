/* eslint-disable no-restricted-globals */
import "./App.css";

import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useGlobalDOMEvents, resetFocus } from "./events";

import { Home } from "./views/Home";
import { Credits } from "./views/Credits";
import { Guilds } from "./views/Guilds";
import { Channel } from "./views/Channel";
import { DMs } from "./views/DMs";

// import * as test from "./concord";

function App() {
	useGlobalDOMEvents();

	let location = useLocation();

	useEffect(() => {
		// On route change, re-set the focused element to 0,0
		resetFocus();
	}, [location]);

	return (
		<Switch>
			<Route path="/guilds">
				<Guilds />
			</Route>
			<Route path="/dms">
				hallo
				<DMs />
			</Route>
			<Route path="/channel/:id">
				<Channel />
			</Route>
			<Route path="/credits">
				<Credits />
			</Route>
			<Route path="/settings">Settings page</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
}

export default App;

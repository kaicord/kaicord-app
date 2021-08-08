/* eslint-disable no-restricted-globals */
import "./App.css";

import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useGlobalDOMEvents, resetFocus } from "./events";

import { Home } from "./views/Home";

function App() {
	useGlobalDOMEvents();

	let location = useLocation();
	useEffect(() => {
		// On route change, re-set the focused element to 0,0
		resetFocus();
	}, [location]);

	return (
		<Switch>
			<Route path="/guilds">Guilds page</Route>
			<Route path="/dms">DMs page</Route>
			<Route path="/settings">Settings page</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
}

export default App;

/* eslint-disable no-restricted-globals */
import "./App.css";

import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useGlobalDOMEvents, resetFocus } from "./events";

import { Home } from "./views/Home";
import { Credits } from "./views/Credits";
import { Guilds } from "./views/Guilds";

// import * as test from "./concord";

function App() {
	useGlobalDOMEvents();

	// var xhttp = new XMLHttpRequest({ mozSystem: true });
	// xhttp.onreadystatechange = function () {
	// 	console.log(`${this.readyState} ${this.status}`);
	// 	if (this.readyState === 4 && this.status === 200) {
	// 		// Typical action to be performed when the document is ready:
	// 		alert(xhttp.responseText);
	// 	}
	// };
	// xhttp.open("GET", "https://jipfr.nl", true);
	// xhttp.send();
	console.log(2);

	// alert(1);
	// console.log(test);

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
			<Route path="/dms">DMs page</Route>
			<Route path="/settings">Settings page</Route>
			<Route path="/credits">
				<Credits />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
}

export default App;

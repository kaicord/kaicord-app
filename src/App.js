/* eslint-disable no-restricted-globals */
import "./App.css";

import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useGlobalDOMEvents, resetFocus } from "./events";

import { Home } from "./views/Home";
import { Credits } from "./views/Credits";
import { Guilds } from "./views/Guilds";
import { Channel } from "./views/Channel";
import { DMs } from "./views/DMs";

import ConcordClient from "concord/src/client";

window.onerror = function (msg, url, linenumber) {
	alert(
		"Error message: " + msg + "\nURL: " + url + "\nLine Number: " + linenumber
	);
	return true;
};

console.log(123);

function App() {
	console.log("Running app");
	// const xhr = new XMLHttpRequest({ mozSystem: true });
	// xhr.addEventListener("load", function () {
	// 	const response = {
	// 		status: xhr.status,
	// 		body: xhr.responseText,
	// 		json: JSON.parse(xhr.responseText),
	// 	};
	// 	console.log(response);
	// });

	// xhr.onreadystatechange = () => {
	// 	// console.log(xhr, xhr.statusCode, Date.now());
	// 	// console.log(xhr.responseText)
	// 	// console.log('--------')
	// 	console.log(xhr.responseText);
	// };

	// xhr.open("POST", `https://jsonplaceholder.typicode.com/todos/1`);
	// xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

	// xhr.send();

	const [accountData, setAccountData] = useState(false);
	useEffect(() => {
		console.log("R");

		// new Promise((resolve) => {
		// 	const xhr = new XMLHttpRequest({ mozSystem: true });
		// 	xhr.addEventListener("load", function () {
		// 		const response = {
		// 			status: xhr.status,
		// 			body: xhr.responseText,
		// 			json: JSON.parse(xhr.responseText),
		// 		};
		// 		resolve(response);
		// 	});

		// 	xhr.onreadystatechange = () => {
		// 		// console.log(xhr, xhr.statusCode, Date.now());
		// 		// console.log(xhr.responseText)
		// 		// console.log('--------')
		// 		if (xhr.readyState === 4) {
		// 			console.log(xhr);
		// 		}
		// 	};

		// 	const verb = "GET";
		// 	const data = null;

		// 	xhr.open(verb, "https://jipfr.nl");
		// 	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		// 	const options = {};

		// 	if (options.headers) {
		// 		for (const key in options.headers) {
		// 			if (Object.hasOwnProperty.call(options.headers, key)) {
		// 				xhr.setRequestHeader(key, options.headers[key]);
		// 			}
		// 		}
		// 	}
		// 	console.log(verb, `https://jipfr.nl`, data);
		// 	xhr.send(data);
		// }).then(console.log);

		const client = new ConcordClient();

		client.onTwoFactorAuthenticationRequired(() => {
			const mfacode = prompt("mfa");
			client.mfa(mfacode);
		});

		client.onMessageCreate((message) => {
			console.log(3);
			// a new message has been sent
		});

		client.onReady(() => {
			console.log(client);
			console.log(client.getAuthorizationToken());
			localStorage.setItem("discord-token", client.getAuthorizationToken());
			// do stuff, client is connected and logged in
			setAccountData(client);
		});

		if (!localStorage.getItem("discord-token")) {
			console.log(4);
			const email = prompt("Email");
			const password = prompt("Password");
			client.login(email, password);
		} else {
			console.log(5);
			client.ghostLogin(localStorage.getItem("discord-token"));
		}
	}, []);

	useGlobalDOMEvents();

	let location = useLocation();

	useEffect(() => {
		// On route change, re-set the focused element to 0,0
		resetFocus();
	}, [location]);

	if (accountData) {
		return (
			<Switch>
				<Route path="/guilds">
					<Guilds groups={accountData.getGuilds()} />
				</Route>
				<Route path="/dms">
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
	} else {
		return <h1>Loading...</h1>;
	}
}

export default App;

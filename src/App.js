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
import { Guild } from "./views/Guild";

import { Loading } from "./components/Loading";

import { Client as ConcordClient } from "concord";

window.onerror = function (msg, url, linenumber) {
	alert(
		"Error message: " + msg + "\nURL: " + url + "\nLine Number: " + linenumber
	);
	return true;
};

function App() {
	console.log("Running app");

	const [client, setClient] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const client = new ConcordClient();

		client.onTwoFactorAuthenticationRequired(() => {
			const mfacode = prompt("mfa");
			client.mfa(mfacode);
		});

		client.onMessageCreate((message) => {
			// a new message has been sent
		});

		client.onReady(() => {
			localStorage.setItem("discord-token", client.getAuthorizationToken());
			// do stuff, client is connected and logged in
			setClient(client);
		});

		if (!localStorage.getItem("discord-token")) {
			const email = prompt("Email");
			const password = prompt("Password");

			client.login(email, password).catch((err) => {
				setError(err.toString().split("\n")[0].trim());
			});
		} else {
			client.ghostLogin(localStorage.getItem("discord-token"));
		}

		console.log(client);
	}, [client]);

	useGlobalDOMEvents();

	let location = useLocation();

	useEffect(() => {
		// On route change, re-set the focused element to 0,0
		window.scrollTo(0, 0);
		resetFocus();
	}, [location]);

	if (error) {
		return <Loading title={error} />;
	} else if (client) {
		console.log(5);
		console.log(client.getGuilds());
		return (
			<Switch>
				<Route path="/guilds">
					<Guilds
						guilds={client.getGuilds()}
						folders={client.getUserSettings().guild_folders}
					/>
				</Route>
				<Route path="/dms">
					<DMs />
				</Route>
				<Route path="/guild/:id">
					<Guild guilds={client.getGuilds()} />
				</Route>
				<Route path="/ch/:id">
					<Channel client={client} />
				</Route>
				<Route path="/credits">
					<Credits />
				</Route>
				<Route path="/settings">Settings page</Route>
				<Route path="/">
					<p class="is-message">
						hoi hoihoihoihoihoihoihoihoihoihoihoihoihoihoihoihoihoihoihoihoihoi
					</p>
					<Home />
				</Route>
			</Switch>
		);
	} else {
		return <Loading />;
	}
}

export default App;

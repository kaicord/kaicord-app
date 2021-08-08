import "./App.css";

import { useGlobalDOMEvents } from "./events";

import { HashRouter, Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";

function App() {
	useGlobalDOMEvents();

	return (
		<HashRouter>
			<Switch>
				<Route path="/guilds">HOI!</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</HashRouter>
	);
}

export default App;

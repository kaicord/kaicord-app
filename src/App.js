import "./App.css";

import { useEffect } from "react";

import { ListItem } from "./components/ListItem";
import { List } from "./components/List";

import SVG from "react-inlinesvg";

let focusedRow = -1;
let focusedCol = 0;

function onKeyDown(evt) {
	if (evt.key === "ArrowDown") {
		focusedCol = 0;
		focusedRow++;
		updateFocus();
	} else if (evt.key === "ArrowUp") {
		focusedCol = 0;
		focusedRow--;
		updateFocus();
	}
}

function onKeyUp() {}

export function useGlobalDOMEvents() {
	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		};
	}, []);
}

/**
 * The way the focus system is as follows:
 * You have rows which you can navigate with up/down,
 * and you have cols you can navigate with left/right
 */
function updateFocus() {
	// Find relevant focused row
	const focusRows = document.querySelectorAll("[tabrow]");
	while (focusedRow < 0) focusedRow = focusRows.length + focusedRow;
	const focusRow = focusRows[focusedRow % focusRows.length];

	// Find focused column
	const focusCols = focusRow.querySelectorAll("[tabcol]");
	while (focusedCol < 0) focusedCol = focusCols.length + focusedCol;
	const focusCol = focusCols[focusedCol % focusCols.length];

	// Focus on column
	if (focusCol) focusCol.focus();
}

function App() {
	useGlobalDOMEvents();

	return (
		<div>
			<List title="Chat">
				<ListItem>
					<span>Dms</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
				<ListItem>
					<span>Guilds</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
			</List>
			<List title="Appearance">
				<ListItem>
					<span>Color theme</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
				<ListItem>
					<span>Compact display</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
			</List>
		</div>
	);
}

export default App;

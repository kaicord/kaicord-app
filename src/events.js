import { useEffect } from "react";

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
	} else if (evt.key === "Backspace") {
		evt.preventDefault();
		// eslint-disable-next-line no-restricted-globals
		history.back();
	}
}

function onKeyUp() {}

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

/* eslint-disable no-restricted-globals */
import { useEffect } from "react";

let focusedRow = 0;
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
		let loc = location.href;

		history.back();

		if (loc === location.href) {
			window.close();
		}
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
	if (focusRow) {
		const focusCols = focusRow.querySelectorAll("[tabcol]");
		while (focusedCol < 0) focusedCol = focusCols.length + focusedCol;
		const focusCol = focusCols[focusedCol % focusCols.length];

		// Focus on column
		if (focusCol) focusCol.focus();
	}
}

export function resetFocus() {
	focusedCol = 0;
	focusedRow = 0;
	updateFocus();
}

export function useGlobalDOMEvents() {
	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);

		updateFocus();

		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		};
	}, []);
}

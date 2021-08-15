/* eslint-disable no-restricted-globals */
import { useEffect } from "react";

let focusedRow = 0;
let focusedCol = 0;

function onKeyDown(evt) {
	if (evt.key === "ArrowDown" || evt.key === "ArrowUp") {
		evt.preventDefault();
	}

	if (evt.key === "ArrowDown") {
		focusedCol = 0;
		focusedRow++;
		updateFocus();
	} else if (evt.key === "ArrowUp") {
		focusedCol = 0;
		focusedRow--;
		updateFocus();
	} else if (evt.key === "Enter") {
		evt.preventDefault();
		document.querySelector(".focus").click();
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
	[...document.querySelectorAll(".focus")].forEach((el) =>
		el.classList.remove("focus")
	);

	// Find relevant focused row
	const focusRows = document.querySelectorAll("[tabrow]");
	while (focusedRow < 0) focusedRow = focusRows.length + focusedRow;
	focusedRow = focusedRow % focusRows.length || 0;
	const focusRow = focusRows[focusedRow % focusRows.length];

	// Find focused column
	if (focusRow) {
		const focusCols = focusRow.querySelectorAll("[tabcol]");
		while (focusedCol < 0) focusedCol = focusCols.length + focusedCol;
		let focusCol = focusCols[focusedCol % focusCols.length];

		if (!focusCol) focusCol = focusRow;
		// Focus on selected element
		focusCol.classList.add("focus");
		focusCol.focus();
		console.log(focusCol);

		const rect = focusCol.getBoundingClientRect();
		const elY =
			rect.top - document.body.getBoundingClientRect().top + rect.height / 2;

		window.scrollTo({
			left: 0,
			top: elY - window.innerHeight / 2,
			// behavior: "smooth",
		});
	}
}

export function resetFocus() {
	focusedCol = 0;
	if (location.href.includes("/channel/")) {
		focusedRow = document.querySelectorAll(".is-message").length - 1;
	} else {
		focusedRow = 0;
	}
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

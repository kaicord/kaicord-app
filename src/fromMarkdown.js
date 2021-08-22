import marked from "marked";

export function markdownToHtml(md) {
	md = md
		.split(" ")
		.map((word) => {
			let w = [];
			let letters = word.split("");
			while (letters.length > 0) {
				w.push(letters.splice(0, 25).join(""));
			}
			return w.join("<wbr>");
		})
		.join(" ");

	const html = marked(md.trim()).trim().replace(/\n/g, "<br>");
	return html;
}

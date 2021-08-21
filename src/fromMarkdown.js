import marked from "marked";

export function markdownToHtml(md) {
	return marked(md.trim()).trim().replace(/\n/g, "<br>");
}

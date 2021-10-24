import marked from "marked";

export function markdownToHtml(md) {
	const html = marked(md.trim()).trim();
	return html;
}

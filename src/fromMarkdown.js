import marked from "marked";

export function markdownToHtml(md) {
	md = md.replace(/</g, "&lt;");
	const html = marked(md.trim()).trim();
	return html;
}

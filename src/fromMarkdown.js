import marked from "marked";

export function markdownToHtml(md) {
	md = md.replace(/</g, "&lt;");
	const html = marked(md.trim())
		.trim()
		.replace(/<a/g, `<span tabcol="true" class="is-link"`)
		.replace(/<\/a>/g, "</span>");

	return html;
}

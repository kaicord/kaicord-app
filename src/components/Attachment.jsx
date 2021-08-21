import { markdownToHtml } from '../fromMarkdown'

export function Attachment(props) {
	const att = props.attachment;
	if (att.url) {
		return <img className="is-image-attachment w-full rounded my-6 object-contain bg-fade" src={att.url} alt="" />
	}
}

export function Embed(props) {
	const embed = props.embed
	console.log(embed)

	let profile;
	if (embed.author) {
		profile = (
			<div className="flex space-x-3 items-center mb-2">
				<img className="w-5 h-5 rounded-full block" src={embed.author.icon_url} alt="" />
				<span>{embed.author.name}</span>
			</div>
		)
	}

	let video;
	if (embed.video) {
		video = (
			<div>
				<video src={embed.video.url} autoPlay muted loop />
			</div>
		)
	}

	return (
		<div className="p-2 pl-4 my-2 rounded bg-content border-l-4 border-border">
			{profile}
			<p className="my-3 font-bold">{embed.title}</p>
			<p dangerouslySetInnerHTML={{ __html: markdownToHtml(embed.description || "") }}></p>
			{video}
		</div>
	)
}
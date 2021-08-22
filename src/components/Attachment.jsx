import { markdownToHtml } from '../fromMarkdown'

export function Attachment(props) {
	const att = props.attachment;

	if (att.content_type.startsWith('video')) {
		return (
			<a target="_blank" href={att.url} rel="noreferrer" className="my-1 px-1 w-1/3 overflow-hidden" tabcol="true">
				<div className="relative attachment-wrapper">
					<div class="w-full" style={{ 'paddingBottom': '100%' }}></div>
					<video className="absolute top-0 left-0 is-image-attachment w-full h-full rounded object-cover bg-fade border border-border" src={att.url} />
				</div>
			</a>
		)
	}

	if (att.url) {
		return (
			<a target="_blank" href={att.url} rel="noreferrer" className="my-1 px-1 w-1/3 overflow-hidden attachment-wrapper" tabcol="true">
				<div className="relative">
					<div class="w-full" style={{ 'paddingBottom': '100%' }}></div>
					<img
						className="absolute top-0 left-0 is-image-attachment w-full h-full rounded object-cover bg-fade border border-border"
						src={att.url}
						alt="" />
				</div>
			</a>
		)
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
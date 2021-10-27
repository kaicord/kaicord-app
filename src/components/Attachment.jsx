import { markdownToHtml } from '../fromMarkdown'
import { getFallbackPicture } from '../getFallbackPicture';

import { Video } from './Video'

function didError(e) {
	e.target.src = getFallbackPicture()
}

export function Attachment(props) {
	const att = props.attachment;

	if ((att.content_type || "").startsWith('video')) {
		return (
			<div className="attachment-wrapper w-full mt-3 overflow-hidden">
				<Video src={att.url} />
			</div>
		)
	}

	if (att.url) {
		return (
			<a target="_blank" href={att.url} rel="noreferrer" className="w-full mt-3 overflow-hidden attachment-wrapper" tabcol="true">
				<div className="relative">
					<img
						className="is-image-attachment w-full h-full rounded object-cover bg-fade border border-border"
						src={att.url}
						alt="" />
				</div>
			</a>
		)
	}

	return <p>{JSON.stringify(att)}</p>
}

export function Embed(props) {
	const embed = props.embed

	if (embed.type === "image") {
		return (
			<div className="w-full mt-3 overflow-hidden">
				<img className="max-w-full rounded object-cover bg-fade border border-border" src={embed.url} alt="" />
			</div>
		)
	}

	let profile;
	if (embed.author) {
		profile = (
			<div className="flex space-x-3 items-center mt-2">
				{embed.author.icon_url ? <img className="w-5 h-5 rounded-full block" src={embed.author.icon_url} onError={didError} alt="" /> : ''}
				<span>{embed.author.name}</span>
			</div>
		)
	}

	let video;
	if (embed.video && !embed.video.url.includes("soundcloud")) {
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
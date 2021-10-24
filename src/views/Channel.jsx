
import { useState, useEffect } from "react";
import { MessageList, Message } from "../components/Messages";
import { Attachment, Embed } from "../components/Attachment";
import { Loading } from "../components/Loading";
import { resetFocus } from "../events";

import { useParams } from "react-router-dom";
import { markdownToHtml } from '../fromMarkdown'

export function Channel(props) {

	const [messages, setMessages] = useState([])
	const [loading, setLoading] = useState(true)

	const params = useParams()
	console.log(params)

	useEffect(() => {
		async function doMessageUpdate() {
			const msg = (await props.client.getGuildChannelMessages(params.id, {
				before: Date.now() * 10,
				after: Date.now(),
				around: Date.now() * 10
			})).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())

			setMessages(msg)
			setLoading(false);

			resetFocus()
		}
		doMessageUpdate()
	}, [params, props])

	function getSubtitle(msg) {
		if (msg.type === 7) {
			return "joined the server"
		} else if (msg.type === 6) {
			return "pinned a message"
		}
		return ""
	}

	return (
		<div>
			{loading ?
				<Loading title="Loading channel..." /> :
				<MessageList>
					{messages.map((msg, i) => {
						return (
							<Message key={i} subtitle={getSubtitle(msg)} name={msg.author.username} msg={msg}>
								<span dangerouslySetInnerHTML={{
									__html: markdownToHtml(msg.content)
								}}></span>
								<div className={`${msg.attachments.length > 0 ? 'flex' : 'hidden'} flex-wrap -mx-1 overflow-hidden mt-6`}>
									{msg.attachments.map(att => {
										return <Attachment attachment={att} />
									})}
								</div>
								{msg.embeds.map(att => {
									return <Embed embed={att} />
								})}
							</Message>
						)
					})}
				</MessageList>
			}
		</div>
	)
	// return <div>hoi</div>
}
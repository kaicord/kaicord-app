
import { useState, useEffect } from "react";
import { MessageList, Message } from "../components/Messages";
import { Attachment } from "../components/Attachment";
import { resetFocus } from "../events";

import { Loading } from "../components/Loading";
import { useParams } from "react-router-dom";

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
			console.log(msg);
			setMessages(msg)
			setLoading(false);

			resetFocus()
		}
		doMessageUpdate()
	}, [params, props])

	return (
		<div>
			{loading ?
				<Loading title="Loading channel..." /> :
				<MessageList>
					{messages.map((msg, i) => {
						return (
							<Message key={i} name={msg.author.username}>
								{msg.type === 7 ? 'joined the server' : msg.content}
								{msg.attachments.map(att => {
									return <Attachment attachment={att} />
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
export function MessageList(props) {
	return (
		<div>
			{props.children}
		</div>
	)
}

export function Message(props) {
	return (
		<div tabrow="true">
			<div className="is-message border-t border-border normal-case p-1 px-2" tabcol="true">
				{props.msg.referenced_message ? <div className="flex space-x-2 items-center truncate" tabcol="true">
					<img src="/silk/icons/arrow_turn_right.png" alt="" />
					<span>{props.msg.referenced_message.author.username}:</span>
					<span>{props.msg.referenced_message.content}</span>
				</div> : ''}
				<p><strong>{props.name}</strong>{props.subtitle ? <span className="ml-3">{props.subtitle}</span> : ''}</p>
				<div>{props.children}</div>
			</div>
		</div>
	)
}
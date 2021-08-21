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
				<p><strong>{props.name}</strong>{props.subtitle ? <span className="ml-3">{props.subtitle}</span> : ''}</p>
				<div>{props.children}</div>
			</div>
		</div>
	)
}
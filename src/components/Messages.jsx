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
				<p><strong>{props.name}</strong></p>
				<p>{props.children}</p>
			</div>
		</div>
	)
}
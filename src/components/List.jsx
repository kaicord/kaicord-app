export function List(props) {
	return (
		<div>
			{props.title ? <ListTitle>{props.title}</ListTitle> : ''}
			<div className="border-t border-b border-border">
				{props.children}
			</div>
		</div>
	)
}

export function ListTitle(props) {
	return (
		<h2 className="text-xss opacity-50 p-1">
			{props.children}
		</h2>
	)
}
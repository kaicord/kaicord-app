
export function ListItem(props) {
	return (
		<div tabrow="true">
			<a href="/" tabcol="true" className="block">
				<div
					className="text-xs w-full py-2 px-3 flex justify-between items-center"
				>
					{props.children}
				</div>
			</a>
		</div>
	)
}

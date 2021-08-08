
import { Link } from "react-router-dom"

import SVG from "react-inlinesvg";

export function ListItem(props) {

	const Content = (
		<div
			className="text-xs w-full py-2 px-2 flex justify-between items-center space-x-4"
		>
			{props.children}
		</div>
	)

	if (props.to && props.to.startsWith("http")) {
		return (
			<div tabrow="true">
				<a href={props.to} tabcol="true" target="_blank" rel="noreferrer" className="block">
					{Content}
				</a>
			</div>
		)
	} else if (props.to) {
		return (
			<div tabrow="true">
				<Link to={props.to} tabcol="true" className="block">
					{Content}
				</Link>
			</div>
		)
	} else {
		return (
			<div>
				{Content}
			</div>
		)
	}
}

export function ListItemWithArrow(props) {
	return (
		<ListItem to={props.to}>
			{props.img ?
				<img alt="" src={props.img} className="w-5 h-5 object-contain" />
				: ''}
			<span className="w-full">{props.children}</span>
			<SVG src="/icons/chevron-right.svg" width={24} height={24} />
		</ListItem>
	)
}
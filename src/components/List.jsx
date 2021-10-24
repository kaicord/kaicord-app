/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { useState } from "react";

import SVG from "react-inlinesvg";

export function List(props) {
	const [open, setOpen] = useState(false);

	const title = typeof props.title === "undefined" ? null : props.title ? props.title : "Unnamed folder";

	return (
		<div className={props.title ? '' : props.doSpacing ? 'my-3' : ''}>
			{title ?? null ? <ListTitle collapsible={props.collapsible} open={open} setOpen={setOpen}>{title}</ListTitle> : ''}
			<div className={`border-b border-border ${title ? 'border-t border-border' : (props.doSpacing && 'border-t border-border')} ${props.collapsible && !open ? 'hidden' : 'block'}`}>
				{props.collapsible && !open ? undefined : props.children}
			</div>
		</div>
	)
}

export function ListTitle(props) {

	function toggleOpen() {
		props.setOpen(!props.open)
	}

	return (
		<h2 onClick={toggleOpen} tabrow={props.collapsible ? 'true' : undefined} className="flex justify-between items-center text-xss p-1 w-full">
			<span className="opacity-50">{props.children}</span>
			{props.collapsible ? (<SVG className={props.open ? 'transform rotate-180' : ''} src="/icons/chevron-up.svg" width={24} height={24} />) : undefined}
		</h2>
	)
}
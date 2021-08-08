
import { ListItem } from "../components/ListItem";
import { List } from "../components/List";

import SVG from "react-inlinesvg";

export function Home() {
	return (
		<div>
			<List title="Chat">
				<ListItem>
					<span>Dms</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
				<ListItem>
					<span>Guilds</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
			</List>
			<List title="Appearance">
				<ListItem>
					<span>Color theme</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
				<ListItem>
					<span>Compact display</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
			</List>
		</div>
	)
}
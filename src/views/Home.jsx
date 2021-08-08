
import { ListItem } from "../components/ListItem";
import { List } from "../components/List";

import SVG from "react-inlinesvg";

export function Home() {
	return (
		<div>
			<List title="Chat">
				<ListItem to="/dms">
					<span>Dms</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
				<ListItem to="/guilds">
					<span>Guilds</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
			</List>
			<List title="Appearance">
				<ListItem to="/settings/theme">
					<span>Color theme</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
				<ListItem to="/settings/theme">
					<span>Compact display</span>
					<SVG src="/icons/chevron-right.svg" />
				</ListItem>
			</List>
		</div>
	)
}
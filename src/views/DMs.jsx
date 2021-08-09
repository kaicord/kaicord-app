
import { ListItemWithArrow } from "../components/ListItem";
import { List } from "../components/List";

export function DMs() {

	const names = [
		"jonbarrow"
	]

	return (
		<div>
			<List title="Your guilds">
				{names.map(name => {
					return (
						<ListItemWithArrow to="/channel/whatever" key={name} img="https://github.com/jonbarrow.png?size=16">
							<div>
								<p>{name}</p>
							</div>
						</ListItemWithArrow>
					)
				})}
			</List>
		</div>
	)
}
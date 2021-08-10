
import { ListItemWithArrow } from "../components/ListItem";
import { List } from "../components/List";

export function Guilds(props) {
	return (
		<div>
			<List title="Your guilds">
				{props.groups.map(guild => {
					return (
						<ListItemWithArrow to="/channel/whatever" key={guild.getID()} img={guild.getIconUrl()}>
							<div>
								<p>{guild.getName()}</p>
							</div>
						</ListItemWithArrow>
					)
				})}
			</List>
		</div>
	)
}
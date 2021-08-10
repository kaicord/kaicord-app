
import { ListItemWithArrow } from "../components/ListItem";
import { List } from "../components/List";

export function Guilds(props) {

	const guildNames = [
		"movie-web",
		"Adolla",
		"Jip and T70",
		"why'd the last dude stop",
		"Thing",
		"DesignCourse",
		"MCContent",
		"Code()",
		"Yoglin Corp",
		"Spotistats for Spotify",
		"PvP Legacy",
		"Tank Tactics",
		"Eta Mail",
		"Ouwe osso zn Jip"
	]
	console.log(props.groups)

	return (
		<div>
			{JSON.stringify(Object.keys(props.groups))}
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

import { ListItemWithArrow } from "../components/ListItem";
import { List } from "../components/List";

export function Guilds() {

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

	return (
		<div>
			<List title="Your guilds">
				{guildNames.map(name => {
					return (
						<ListItemWithArrow to="/channel/whatever" key={name} img="https://i.imgur.com/QvlxvGc.png">
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

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
						<ListItemWithArrow key={name} img="https://cdn.discordapp.com/icons/679090685680418829/bdaccece3c1834363e3a5c70a099096c.webp?size=16">
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
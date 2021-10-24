
import { ListItemWithArrow } from "../components/ListItem";
import { List } from "../components/List";

export function Guilds(props) {
	const groups = props.folders.map(folder => {
		return {
			...folder,
			guilds: folder.guild_ids.map(id => props.guilds.find(g => g.getID() === id)).filter(Boolean)
		}
	})

	return (
		<div>
			{groups.map(group => {
				return (
					<List collapsible={group.guilds.length > 1} title={group.guilds.length > 1 ? (group.name || group.guilds.map(g => g.getName()).join(', ')) : undefined} key={group.guild_ids.join(',')}>
						{group.guilds.map(guild => {
							return (
								<ListItemWithArrow to={`/guild/${guild.getID()}`} key={guild.getID()} img={guild.getIconUrl()}>
									<div>
										<p>{guild.getName()}</p>
									</div>
								</ListItemWithArrow>
							)
						})}
					</List>
				)
			})}
		</div>
	)
}

import { useParams } from "react-router-dom"

import { ListItemWithArrow, ListItem } from "../components/ListItem";
import { List } from "../components/List";

export function Guild(props) {
	// Get guild ID
	const { id: guildId } = useParams()

	// Find relevant guild
	const guild = props.guilds?.find((g) => g.getID() === guildId);

	if (!guild) {
		return <h1 className="w-full p-6 py-24 text-center">Guild not found</h1>
	}

	// Map channels into categories 
	const categories = []

	const channels = guild.getChannels().sort((a, b) => a.getPosition() - b.getPosition())

	for (const channel of channels) {
		if (channel.getType() === channel.TYPE_GUILD_CATEGORY) { // Create new category wrappers
			categories.push({
				name: channel.getName(),
				id: channel.getID(),
				channels: []
			})
		} else if (channel.getType() === channel.TYPE_GUILD_TEXT || channel.getType() === 2) { // Add channel to its category or create new category for itself
			const cat = categories.find(c => c.id === channel.getParentID())
			if (cat) {
				cat.channels.push(channel)
			} else {
				categories.push({
					name: null,
					id: null,
					channels: [channel]
				}) // Add category without name and just this channel
			}

		}
	}

	return (
		<div>
			<List title="This guild">
				<ListItem img={guild.getIconUrl()}>
					<div className="flex items-center space-x-6 w-full">
						{guild.getName()}
					</div>
				</ListItem>
			</List>
			{categories.map(category => {
				return (
					<List title={category.name} key={category.id || Math.random()} doSpacing="true">
						{category.channels.map(channel => {
							return (
								<ListItemWithArrow
									disabled={channel.getType() !== channel.TYPE_GUILD_TEXT}
									to={`/ch/${channel.getID()}`}
									img={channel.getType() === channel.TYPE_GUILD_TEXT ? '/silk/icons/comment.png' : '/silk/icons/sound.png'}
									key={channel.getID() || Math.random()}
								>
									<div className="w-full">{channel.getName()}</div>
								</ListItemWithArrow>
							)
						})}
					</List>
				)
			})}
		</div>
	)
}
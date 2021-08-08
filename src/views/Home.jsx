
import { ListItemWithArrow } from "../components/ListItem";
import { List } from "../components/List";

export function Home() {
	return (
		<div>
			<List title="Chat">
				<ListItemWithArrow img="/silk/icons/comment.png" to="/dms">
					Dms
				</ListItemWithArrow>
				<ListItemWithArrow img="/silk/icons/application.png" to="/guilds">
					Guilds
				</ListItemWithArrow>
			</List>
			<List title="Appearance">
				<ListItemWithArrow img="/silk/icons/palette.png" to="/settings/theme">
					Color Theme
				</ListItemWithArrow>
				<ListItemWithArrow img="/silk/icons/page_white_text_width.png" to="/settings/theme">
					Compact display
				</ListItemWithArrow>
			</List>
			<List title="Other">
				<ListItemWithArrow img="/silk/icons/page_white_camera.png" to="/credits">
					Credits
				</ListItemWithArrow>
			</List>
		</div>
	)
}
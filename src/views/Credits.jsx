
import { ListItemWithArrow } from "../components/ListItem";
import { List } from "../components/List";

export function Credits() {
	return (
		<div>
			<List title="App">
				<ListItemWithArrow img="https://github.com/jipfr.png?size=16" to="https://jipfr.nl">
					<div className="normal-case">
						<strong>Jip Fr</strong>
						<p>Built the app</p>
					</div>
				</ListItemWithArrow>
				<ListItemWithArrow img="https://github.com/jonbarrow.png?size=16" to="https://jonbarrow.dev">
					<div className="normal-case">
						<strong>Jon Barrow</strong>
						<p>Built the library used to connect Discord and Kaicord</p>
					</div>
				</ListItemWithArrow>
			</List>
			<List title="Other">
				<ListItemWithArrow img="/silk/icons/tick.png" to="http://www.famfamfam.com/lab/icons/silk/">
					<div className="normal-case">
						<strong>Silk</strong>
						<p>The wonderful 16x16 icons used</p>
					</div>
				</ListItemWithArrow>
			</List>
		</div>
	)
}
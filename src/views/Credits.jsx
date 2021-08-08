
import { ListItem, ListItemWithArrow } from "../components/ListItem";
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
				<ListItem>
					<div className="normal-case">
						<strong>Jon</strong>
						<p>Built the library used to connect Discord and Kaicord</p>
					</div>
				</ListItem>
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
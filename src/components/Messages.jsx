
import { scrollToEl } from '../events'

export function MessageList(props) {
	return (
		<div>
			{props.children}
		</div>
	)
}

export function Message(props) {
	return (
		<div tabrow="true" id={props.msg.id}>
			<div className="is-message border-t border-border normal-case p-1 px-2" tabcol="true">
				{props.msg.referenced_message ? <div onClick={() => scrollToEl(document.getElementById(props.msg.referenced_message.id))} className="flex space-x-2 items-center truncate" tabcol="true">
					<img className="w-4 h-4" src="/silk/icons/arrow_turn_right.png" alt="" />
					<span>{props.msg.referenced_message.author.username}:</span>
					<span>{props.msg.referenced_message.content}</span>
				</div> : ''}
				<p className="flex space-x-2 items-center">
					<img className="w-4 h-4 block rounded" src={`https://cdn.discordapp.com/avatars/${props.msg.author.id}/${props.msg.author.avatar}.jpg?size=16`} alt="" />
					<strong>{props.name}</strong>{props.subtitle ? <span className="ml-3">{props.subtitle}</span> : ''}
				</p>
				<div>{props.children}</div>
			</div>
		</div>
	)
}
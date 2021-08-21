export function Attachment(props) {
	const att = props.attachment;

	if (att.url) {
		return <img className="is-image-attachment w-full rounded my-6 object-contain bg-fade" src={att.url} alt="" />
	}
}
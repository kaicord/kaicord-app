import { createRef } from "react"

export function Video(props) {

	const video = createRef()

	function togglePlaying() {
		if (video.current.paused) {
			video.current.play()
		} else {
			video.current.pause()
		}
	}

	return (
		<div className="video">
			<video poster="https://www.nicepng.com/png/detail/23-234376_white-play-png-play-video-icon-white.png" className="block w-full rounded object-cover bg-fade border border-border" ref={video} src={props.src} tabcol="true" width="200" onClick={togglePlaying}>
				<source src={props.src} />
				Your browser does not support HTML video.
			</video>
		</div>
	)
}

import { MessageList, Message } from "../components/Messages";
import { resetFocus } from "../events";

const messages = [
	{
		"name": "Pandawan (the real Miguel)",
		"content": "Jkjk just a music channel "
	},
	{
		"name": "Jip",
		"content": "Yeah Coney Island is great"
	},
	{
		"name": "Jip",
		"content": "Also a member of the band helped out a bunch with Folklore (the album, not the song)(edited)"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "Yeah they seem p similar vibes tbh"
	},
	{
		"name": "Jip",
		"content": "They were also in Person of Interest, which is the greatest TV show of all time"
	},
	{
		"name": "Jip",
		"content": "Favorite band meets favorite show"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "They add to the vibe"
	},
	{
		"name": "Jip",
		"content": "Icons it is"
	},
	{
		"name": "Jip",
		"content": ""
	},
	{
		"name": "Jip",
		"content": "Credits page"
	},
	{
		"name": "Jip",
		"content": "Actually properly added Jon"
	},
	{
		"name": "Jip",
		"content": "Does anyone have any ideas for the icon? We can’t just take Discord’s lol"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "take discord's and turn it into an 8 bit version?"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "or idk something completely different"
	},
	{
		"name": "@Jip",
		"content": "Basic list design & navigation"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "I'm guessing the OS handles converting keys -> navigation no? Or do you have to implement that yourself?"
	},
	{
		"name": "@Qy (🔑)",
		"content": "what does the app receive as input? arrow keys?"
	},
	{
		"name": "@Qy (🔑)",
		"content": "Though there’s also some special buttons, like Call, EndCall, SoftLeft and SoftRight"
	},
	{
		"name": "Jip",
		"content": "So to answer your question @Pandawan (the real Miguel), you do have to implement it yourself"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "Oh oof ok"
	},
	{
		"name": "Binner",
		"content": "@Wɪʟʟɪᴀᴍ (and anyone else) what’s the use for Windows 365? Would it be beneficial for something like remote working? Also can you hook azure AD up to it?(edited)"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "One of the main ideas is remote working yeah. Virtualised desktops have long been popular for a few reasons:\n - Centrally manage software + updates\n - Client devices can be low power, the cost goes towards servers which are more economical \n - It's effectively like a VPN, but for your whole desktop + applications\n\nAzure have an offering that's existed for a while: https://azure.microsoft.com/en-us/services/virtual-desktop/\n\nI think Windows 365's aim is to provide a better platform for this which can also be sold to the commerical market. If your desktop is in the cloud, it's incredibly convenient to be mobile between PCs and Laptops (Probably even Chromebooks and other low powered devices) without having to reinstall, change config etc\n\nThe one downside is it won't work without internet. But that's an increasingly rare situation for people nowadays"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "* This is all afaik, I haven't had any experience with it personally and I haven't researched much, just going off what we use Remote Desktop for at work as well as the info from articles"
	},
	{
		"name": "Binner",
		"content": "I was just reading an article about it. It’s really interesting how the whole world is moving towards virtualised environments. Happening with gaming, and now more so with work. It makes sense however i don’t think it’ll catch on straight away. It’s taking us long enough to convince a client to move from on prem exchange to 365. It would be nice to see clients get a powerful system, but be able to control it using say an iPad. Only issue is as you say internet - not sure how you’d get around that? Because like if 365 goes down you can still get work done just not emails, whereas here if windows 365 goes down that’s your whole work"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "The move to virtualisation is definitely interesting. Our uni basically has all thin-clients for the non-CS computers, everything is virtualised. \n\nThere is definitely a reliance on the platform there. I'm not sure what the solution is other than to rely on Microsoft's SLAs. Can't find an SLA online but I can imagine it'll be the top 99%, hopefully with at least 3 9s on the end"
	},
	{
		"name": "@Wɪʟʟɪᴀᴍ",
		"content": "The move to virtualisation is definitely interesting. Our uni basically has all thin-clients for the non-CS computers, everything is virtualised.   There is definitely a reliance on the platform there. I'm not sure what the solution is other than to rely on Microsoft's SLAs. Can't find an SLA online but I can imagine it'll be the top 99%, hopefully with at least 3 9s on the end"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "At work, we run a single Windows Server instance which runs Remote Desktop Services and Remote Desktop gateway. This allows us to securely expose the remote desktop to the internet\n\nAt uni, I don't know the exact setup. But I know they use Citrix Remote Desktop and likely a large cluster of remote desktop servers to handle demand"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "I've seen a couple of businesses personally that have used virtualisation as default, I think the main switching factor is also allowing you to make use of old shitty PCs. You also don't need to pay for licensing on certain thin clients which can be a big cost saving"
	},
	{
		"name": "James",
		"content": "I don't really know enough about this, but could Microsoft offering Windows 365, and in the future becoming crazy popular with that, become an anti-trust issue?"
	},
	{
		"name": "James",
		"content": "I'm not really very familiar with what specifically defines an anti-trust issue lol"
	},
	{
		"name": "Random Internet Cat",
		"content": "Only if Microsoft acts anti-competitively"
	},
	{
		"name": "Random Internet Cat",
		"content": "Being popular is not an anti-trust issue"
	},
	{
		"name": "Random Internet Cat",
		"content": "(ianal)"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "Anti-trust from my limited understanding is actively doing things that disadvantage competitors some way. e.g. Google biasing search results to their own service\n\nThere is the potential for Microsoft to control things within Windows 365 which could have issues like that but I don't think they will, mainly because people would just not use it"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "Windows 365 is essentially a glorified VM hosted in the cloud that you can easily access and work on. They will likely leverage the existing Azure service which has existed for ages without issue"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "There’s a similar company that does virtualized browsers (since you can do p much everything on a browser nowadays) called Mighty. I don’t really like this idea of giving up on performance (both for the hardware maker and the software developer, since they now both have an excuse that there’s gonna be big servers to take care of the load), but anyway ig if it gives greater access to people then sure ig"
	},
	{
		"name": "@Pandawan (the real Miguel)",
		"content": "There’s a similar company that does virtualized browsers (since you can do p much everything on a browser nowadays) called Mighty. I don’t really like this idea of giving up on performance (both for the hardware maker and the software developer, since they now both have an excuse that there’s gonna be big servers to take care of the load), but anyway ig if it gives greater access to people then sure ig"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "I know I’m saying:\n- on the hardware side, laptop/computer makers no longer have to care about making a fast performing device since everything is run on a server, this could lead to stagnation\n- on the software side, devs could think (like they currently do regarding RAM & electron) that since everything is run on servers they have nearly limitless amount of RAM/CPU speeds and thus don’t need to optimize it to run fast"
	},
	{
		"name": "Wɪʟʟɪᴀᴍ",
		"content": "Yeah that's true"
	},
	{
		"name": "Pandawan (the real Miguel)",
		"content": "So it ends up in people not able to afford these services essentially getting cucked out"
	},
	{
		"name": "jonbarrow",
		"content": "Updated my website https://jonbarrow.dev/works"
	},
	{
		"name": "James",
		"content": "i really like it! one thing though: with the overflowing icons, it makes the spacing between items look a little bit dodgy"
	},
	{
		"name": "James",
		"content": "does that make sense?"
	},
	{
		"name": "@Pandawan (the real Miguel)",
		"content": "There’s a similar company that does virtualized browsers (since you can do p much everything on a browser nowadays) called Mighty. I don’t really like this idea of giving up on performance (both for the hardware maker and the software developer, since they now both have an excuse that there’s gonna be big servers to take care of the load), but anyway ig if it gives greater access to people then sure ig"
	},
	{
		"name": "@James",
		"content": "i really like it! one thing though: with the overflowing icons, it makes the spacing between items look a little bit dodgy"
	},
	{
		"name": "James",
		"content": ""
	},
	{
		"name": "jonbarrow",
		"content": "Each of those elements is spaced evenly?"
	},
	{
		"name": "James",
		"content": "i think this is a good example. there are two fullsize ones, one halfsize, and one doesn't have an icon at all. for the fullsize one, the top of the icon feels like it's too close to the top of the one above"
	},
	{
		"name": "James",
		"content": "each of the elements is, but the overflowing icons gives a different impression"
	},
	{
		"name": "jonbarrow",
		"content": "Tbf that’s the only icon of that size"
	}
]

export function Channel() {

	resetFocus()

	return (
		<div>
			<MessageList>
				{messages.map((msg, i) => {
					return (
						<Message key={i} name={msg.name}>{msg.content}</Message>
					)
				})}
			</MessageList>
		</div>
	)
}
const ConcordClient = require("concord/src/client");
require("colors");

// Init a new client
const client = new ConcordClient();

// Setup basic client events

// 2fa is emitted when you need to provide a 2FA code
client.on("2fa", async () => {
	const mfacode = prompt("2FA Code: ");
	client.mfa(mfacode);
});

// loggedin is emitted when the HTTP client has successfully logged in
client.on("loggedin", () => {
	client.webSocket().connect();
});

// Setup WebSocket events
// When Discord sends a DISPATCH event it will be emitted with the "d" prefix and the event name in lowercase
client.webSocket().once("d-ready", () => {
	// Do stuff with the guild and channel info
	const guilds = client.GUILDS;

	console.log(guilds[0].getIconUrl());
	console.log(guilds);

	// client.sendMessage("343011339918245892", {
	// 	content: "test message from concord",
	// });

	for (let i = 0; i < guilds.length; i++) {
		const guild = guilds[i];
		console.log(`${guild.getName()}`.green);

		const channels = guild.getChannels();

		for (let i = 0; i < channels.length; i++) {
			const channel = channels[i];

			if (i < channels.length - 1) {
				console.log(`├─${channel.getName()}`.cyan);
			} else {
				console.log(`└─${channel.getName()}`.cyan);
			}
		}
	}
});

// Login
async function main() {
	const email = prompt("Email address: ");
	const password = prompt("Password: ");

	client.login(email, password);
}

main();

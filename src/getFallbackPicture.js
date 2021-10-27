const animes = [
	"https://wallpaperaccess.com/full/4595683.jpg",
	"https://wallpaperaccess.com/full/4595687.jpg",
	"https://www.finetoshine.com/wp-content/uploads/2020/07/runa-yomozuki-anime-bearbeiten-anime-profile-picture-kakegurui-fan-art.jpg",
	"http://pm1.narvii.com/7599/c5bb112f8c58a307f2c6a826cbc693e844cc7080r1-640-640v2_uhq.jpg",
	"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cute-Anime-Profile-Picture.jpg",
	"https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg",
	"https://lh4.googleusercontent.com/proxy/0MopE2_EO3S-gB3IUP1YLbbGA4y-zKarH6o36TmHSFub-UKQxc6PxqnO0UNBFj6bRPewzqAMrTVfV9zYpzVNhVuB2TCFbpbzXRFZ7NpvMEuDbD11QHgJ6sjz-eBX9hp0DSJmK-oMPMjdIQpOTGc5igblyVFyvZjJtVct9XuJZrW54JzVhxyB1Akxw-SpeAMDsWBMERDMFALmf4aiR1szTvsENJDANFc89Ugn5KOcUjuxQUb2ZEkdFgMSstnyaw5pZrPO7MCCwWP9UgNHyS6z3PN53_b5Uae9MEI=w1200-h630-p-k-no-nu",
];

export function getFallbackPicture() {
	const randomAnimePicture = animes[Math.floor(Math.random() * animes.length)];
	return `//images.weserv.nl/?url=${encodeURIComponent(
		randomAnimePicture
	)}&w=32&h=32`;
}

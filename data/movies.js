const movies = [
	{
		key: "dune",
		title: "Dune",
		year: 2021,
		director: "Denis Villeneuve",
		minutes: 155,
		rating: 3.9,
		catchphrase: "IT BEGINS.",
		description:
			"Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence—a commodity capable of unlocking humanity's greatest potential—only those who can conquer their fear will survive.",
		src: require("../assets/movie/dune.jpg"),
	},
	{
		key: "insideout2",
		title: "Inside Out 2",
		year: 2024,
		director: "Kelsey Mann",
		minutes: 100,
		rating: 4.2,
		catchphrase: "Make room for new emotions.",
		description:
			"Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who've long been running a successful operation by all accounts, aren't sure how to feel when Anxiety shows up. And it looks like she's not alone.",
		src: require("../assets/movie/insideout2.jpg"),
	},
	{
		key: "interstellar",
		title: "Interstellar",
		year: 2014,
		director: "Christopher Nolan",
		minutes: 169,
		rating: 4.7,
		catchphrase: "Mankind was born on Earth. It was never meant to die here.",
		description:
			"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
		src: require("../assets/movie/interstellar.jpg"),
	},
	{
		key: "knivesout",
		title: "Knives Out",
		year: 2019,
		director: "Rian Johnson",
		minutes: 130,
		rating: 4.0,
		catchphrase: "Hell, any of them could have done it.",
		description:
			"When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
		src: require("../assets/movie/knivesout.jpg"),
	},
	{
		key: "lalaland",
		title: "La La Land",
		year: 2016,
		director: "Damien Chazelle",
		minutes: 128,
		rating: 4.3,
		catchphrase: "Here's to the fools who dream.",
		description:
			"Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
		src: require("../assets/movie/lalaland.jpg"),
	},
	{
		key: "parasite",
		title: "Parasite",
		year: 2019,
		director: "Bong Joon-ho",
		minutes: 132,
		rating: 4.6,
		catchphrase: "Act like you own the place.",
		description:
			"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
		src: require("../assets/movie/parasite.jpg"),
	},
	{
		key: "showman",
		title: "The Greatest Showman",
		year: 2017,
		director: "Michael Gracey",
		minutes: 105,
		rating: 4.1,
		catchphrase: "The impossible comes true.",
		description:
			"The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
		src: require("../assets/movie/showman.jpg"),
	},
	{
		key: "up",
		title: "Up",
		year: 2009,
		director: "Pete Docter",
		minutes: 96,
		rating: 4.5,
		catchphrase: "The greatest adventure is just getting back home.",
		description:
			"Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
		src: require("../assets/movie/up.jpg"),
	},
	{
		key: "us",
		title: "Us",
		year: 2019,
		director: "Jordan Peele",
		minutes: 116,
		rating: 3.8,
		catchphrase: "Watch yourself.",
		description:
			"Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
		src: require("../assets/movie/us.jpg"),
	},
	{
		key: "dune2",
		title: "Dune: Part Two",
		year: 2024,
		director: "Denis Villeneuve",
		minutes: 180,
		rating: 4.5,
		catchphrase: "Long live the fighters.",
		description:
			"Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
		src: require("../assets/movie/dune2.jpg"),
	},
	{
		key: "inception",
		title: "Inception",
		year: 2010,
		director: "Christopher Nolan",
		minutes: 148,
		rating: 4.8,
		catchphrase: "Your mind is the scene of the crime.",
		description:
			"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: “inception”, the implantation of another person's idea into a target's subconscious.",
		src: require("../assets/movie/inception.jpg"),
	},
	{
		key: "msperegrine",
		title: "Miss Peregrine's Home for Peculiar Children",
		year: 2016,
		director: "Tim Burton",
		minutes: 127,
		rating: 3.7,
		catchphrase: "Stay peculiar.",
		description:
			"A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.",
		src: require("../assets/movie/msperegrine.jpg"),
	},
	{
		key: "spiritedaway",
		title: "Spirited Away",
		year: 2001,
		director: "Hayao Miyazaki",
		minutes: 124,
		rating: 4.6,
		catchphrase: "On the other side of the tunnel was a mysterious town.",
		description:
			"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
		src: require("../assets/movie/spiritedaway.jpg"),
	},
	{
		key: "thebatman",
		title: "The Batman",
		year: 2022,
		director: "Matt Reeves",
		minutes: 155,
		rating: 4.4,
		catchphrase: "Unmask the truth.",
		description:
			"In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
		src: require("../assets/movie/thebatman.jpg"),
	},
	{
		key: "theconjuring",
		title: "The Conjuring",
		year: 2013,
		director: "James Wan",
		minutes: 112,
		rating: 4.0,
		catchphrase: "Based on the true case files of the Warrens.",
		description:
			"Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
		src: require("../assets/movie/theconjuring.jpg"),
	},
	{
		key: "wicked",
		title: "Wicked",
		year: 2024,
		director: "Jon M. Chu",
		minutes: 150,
		rating: 4.3,
		catchphrase: "Everyone deserves the chance to fly.",
		description:
			"When ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda, the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
		src: require("../assets/movie/wicked.jpg"),
	},
	{
		key: "wonka",
		title: "Wonka",
		year: 2023,
		director: "Paul King",
		minutes: 110,
		rating: 4.2,
		catchphrase: "Every good thing in this world started with a dream.",
		description:
			"Willy Wonka - chock-full of ideas and determined to change the world one delectable bite at a time - is proof that the best things in life begin with a dream, and if you're lucky enough to meet Willy Wonka, anything is possible.",
		src: require("../assets/movie/wonka.jpg"),
	},
	{
		key: "walle",
		title: "WALL-E",
		year: 2008,
		director: "Andrew Stanton",
		minutes: 98,
		rating: 4.4,
		catchphrase:
			"After 700 years of doing what he was built for, he'll discover what he was meant for.",
		description:
			"What if mankind had to leave Earth and somebody forgot to turn the last robot off? After hundreds of years doing what he was built for, WALL•E discovers a new purpose in life when he meets a sleek search robot named EVE. EVE comes to realize that WALL•E has inadvertently stumbled upon the key to the planet's future, and races back to space to report to the humans. Meanwhile, WALL•E chases EVE across the galaxy and sets into motion one of the most imaginative adventures ever brought to the big screen.",
		src: require("../assets/movie/walle.jpg"),
	},
];

export default movies;

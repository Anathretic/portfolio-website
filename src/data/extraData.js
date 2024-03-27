import Globe from '../images/icons/globe.svg';
import Note from '../images/icons/note.svg';
import StarWars from '../images/icons/star-wars.svg';

export const extraData = [
	{
		id: 4,
		icon: Globe,
		title: 'Countrypedia',
		subtitle:
			'Simple app built on a REST API to check information about a country you are interested in. For the sake of your eyes - a dark mode has been added!',
		href: 'https://countrypedia.online/',
	},
	{
		id: 5,
		icon: Note,
		title: 'NoteApp',
		subtitle:
			'Web application that allows you to create notes. The whole thing works in sync with firebase and all data is stored in a NoSQL database. Feel free to use!',
		href: 'https://noteapp.online/',
	},
	{
		id: 6,
		icon: StarWars,
		title: 'Star Wars & Calculator',
		subtitle:
			'A demonstration of the use of Next.js with Cypress and SWR for data fetching. It is split into 2 parts, allowing the use of component testing as well as E2E tests.',
		href: 'https://star-wars-and-calculator-app.vercel.app/',
	},
];

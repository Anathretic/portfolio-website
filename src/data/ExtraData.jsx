import { FaSpa } from 'react-icons/fa'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { CiStickyNote } from 'react-icons/ci'

const ExtraData = [
	{
		id: 4,
		icon: <FaSpa fontSize={22} />,
		color: 'bg-[#257791]',
		title: 'For You - SPA&Resort',
		subtitle: 'Spa salon website with a well-planned UI that allows you to quickly book a treatment via the booking form.',
		href: 'https://foryou-spa.online/',
	},
	{
		id: 5,
		icon: <GiEarthAfricaEurope fontSize={22} />,
		color: 'bg-[#000000]',
		title: 'Countrypedia',
		subtitle: 'Web application that allows you to search for the country you are interested in and check information about that country.',
		href: 'https://countrypedia.online/',
	},
	{
		id: 6,
		icon: <CiStickyNote fontSize={22} />,
		color: 'bg-[#CA909A]',
		title: 'Noteapp',
		subtitle: 'Web application that allows you to quickly create a note using a popup menu. Data is stored in local storage.',
		href: 'https://noteapp.online/',
	},
]

export default ExtraData

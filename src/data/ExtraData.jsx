import { BsFillSunFill } from 'react-icons/bs'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { CiStickyNote } from 'react-icons/ci'

const ExtraData = [
	{
		id: 4,
		icon: <BsFillSunFill fontSize={22} />,
		color: 'bg-[#6F38C5]',
		title: 'Just-paradise',
		subtitle: 'Travel agency website with a well-planned UI that allows to quickly guide a potential customer through the trip booking process.',
		href: 'https://just-paradise.pl/',
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

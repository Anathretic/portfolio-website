import { IconItem } from '../components/IconItem';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaBootstrap, FaGulp, FaFigma, FaNpm } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import {
	SiRedux,
	SiTailwindcss,
	SiMui,
	SiWebpack,
	SiVite,
	SiJest,
	SiFirebase,
	SiGraphql,
	SiStrapi,
	SiYarn,
	SiSupabase,
	SiReactquery,
	SiJson,
} from 'react-icons/si';

export const TechStackIcons = [
	{
		id: 50,
		icon: <FaHtml5 />,
		color: 'text-[#ff4d00]',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		timeout: 1000,
	},
	{
		id: 51,
		icon: <FaCss3Alt />,
		color: 'text-[#0465c7]',
		link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		timeout: 2500,
	},
	{ id: 52, icon: <FaSass />, color: 'text-[#bf0264]', link: 'https://sass-lang.com/', timeout: 2000 },
	{
		id: 53,
		icon: <RiJavascriptFill />,
		color: 'text-[#f2d200]',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		timeout: 3500,
	},
	{ id: 54, icon: <FaReact />, color: 'text-[#00f2e6]', link: 'https://react.dev/', timeout: 500 },
	{ id: 55, icon: <SiRedux />, color: 'text-[#764abc]', link: 'https://redux.js.org/', timeout: 1750 },
	{ id: 56, icon: <SiReactquery />, color: 'text-[#b81818]', link: 'https://tanstack.com/query/latest', timeout: 2400 },
	{
		id: 57,
		icon: <BiLogoTypescript />,
		color: 'text-[#007ab3]',
		link: 'https://www.typescriptlang.org/',
		timeout: 750,
	},
	{ id: 58, icon: <FaNodeJs />, color: 'text-[#006616]', link: 'https://nodejs.org/en', timeout: 1250 },
	{ id: 59, icon: <FaBootstrap />, color: 'text-[#9461fb]', link: 'https://getbootstrap.com/', timeout: 2750 },
	{ id: 60, icon: <SiTailwindcss />, color: 'text-[#017678]', link: 'https://tailwindcss.com/', timeout: 2250 },
	{ id: 61, icon: <SiMui />, color: 'text-[#025ae8]', link: 'https://mui.com/', timeout: 1500 },
	{ id: 62, icon: <SiVite />, color: 'text-[#646cff]', link: 'https://vitejs.dev/', timeout: 1600 },
	{ id: 63, icon: <FaGulp />, color: 'text-[#de4747]', link: 'https://gulpjs.com/', timeout: 3250 },
	{ id: 64, icon: <SiWebpack />, color: 'text-[#5468ff]', link: 'https://webpack.js.org/', timeout: 900 },
	{ id: 65, icon: <SiJest />, color: 'text-[#610769]', link: 'https://jestjs.io/', timeout: 1300 },
	{ id: 66, icon: <SiJson />, color: 'text-[#383838]', link: 'https://www.json.org/json-en.html', timeout: 1100 },
	{ id: 67, icon: <SiStrapi />, color: 'text-[#4945ff]', link: 'https://strapi.io/', timeout: 1500 },
	{ id: 68, icon: <SiFirebase />, color: 'text-[#dbbe02]', link: 'https://firebase.google.com/', timeout: 1650 },
	{ id: 69, icon: <SiSupabase />, color: 'text-[#3ecfb2]', link: 'https://supabase.com/', timeout: 1150 },
	{ id: 70, icon: <SiGraphql />, color: 'text-[#f6009c]', link: 'https://graphql.org/', timeout: 950 },
	{ id: 71, icon: <FaFigma />, color: 'text-[#bd1c00]', link: 'https://www.figma.com/', timeout: 1900 },
	{ id: 72, icon: <FaNpm />, color: 'text-[#991a1a]', link: 'https://www.npmjs.com/', timeout: 1450 },
	{ id: 73, icon: <SiYarn />, color: 'text-[#58326e]', link: 'https://yarnpkg.com/', timeout: 1950 },
];

const TechStack = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center'>
			<div className='flex-1 flex flex-col w-full justify-start items-center'>
				<div className='w-[90%] h-[1px] bg-gray-400 mt-3' />
				<div className='flex flex-col items-center justify-between md:p-20 py-12 px-4'>
					<div className='flex-1 flex flex-col justify-start items-start'>
						<h2 className='text-white text-3xl sm:text-5xl py-2 text-gradient text-center'>
							Technologies and tools..*
						</h2>
					</div>
				</div>
				<div className='flex flex-wrap justify-center text-8xl sm:w-9/12 max-w-[900px]'>
					{TechStackIcons.map(data => (
						<IconItem key={data.id} icon={data.icon} color={data.color} link={data.link} timeout={data.timeout} />
					))}
				</div>
				<p className='pt-6 text-white'>* but I use many more!</p>
				<div className='w-[90%] h-[1px] bg-gray-400 mt-20' />
			</div>
		</div>
	);
};

export default TechStack;

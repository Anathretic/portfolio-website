import { Link } from 'react-router-dom'

const ButtonMailto = ({ mailto, label }) => {
	return (
		<Link
			to='#'
			onClick={e => {
				e.preventDefault()
				window.location.href = mailto
			}}
			className='font-normal hover:text-red-500 transition duration-300'>
			{label}
		</Link>
	)
}

export default ButtonMailto

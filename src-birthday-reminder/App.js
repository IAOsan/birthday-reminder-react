import { useEffect, useState } from 'react';
import { birthdays as data } from './data';
import BirthDaysList from './components/BirthDaysList/BirthDaysList';
import BirthDayPreview from './components/BirthDayPreview/BirthDayPreview';
import './app.styles.scss';
import Heading from './components/Heading/Heading';
import CustomBtn from './components/CustomBtn/CustomBtn';

export default function App() {
	const [birthDays, setBirthDays] = useState([]);
	const [birthCount, setBirthCount] = useState(0);
	const containerClassname = `app-container ${
		birthCount === 0 ? 'app-container--empty' : ''
	}`;

	useEffect(() => {
		document.title = 'BirthDay Reminder';
		setBirthDays((prevState) => data);
	}, []);

	useEffect(() => {
		setBirthCount((prevState) => birthDays.length);
	}, [birthDays]);

	function clearBirthDays(e) {
		if (birthCount === 0) return;
		setBirthDays((prevState) => []);
	}

	function getTitle() {
		return `${birthCount === 0 ? 'No' : `${birthCount}`} birthdays today`;
	}

	return (
		<main className={containerClassname}>
			<Heading title={getTitle()} />
			{Array.isArray(birthDays) && birthDays.length > 0 && (
				<BirthDaysList
					data={birthDays}
					render={({ id, ...restProps }) => (
						<BirthDayPreview key={id.toString()} {...restProps} />
					)}
				/>
			)}
			<CustomBtn
				onClick={clearBirthDays}
				value='Clear All'
				type='button'
				className='btn btn--pink btn--block heading-4'
			/>
		</main>
	);
}

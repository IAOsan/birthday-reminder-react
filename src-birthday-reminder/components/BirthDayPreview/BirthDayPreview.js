export default function BirthDayPreview({ name, age, image }) {
	return (
		<article className='birthDay-preview d-flex d-flex-ai-c'>
			<img className='birthDay-preview__image' src={image} alt={name} />
			<div className='birthDay-preview__body'>
				<h3 className='heading-4'>{name}</h3>
				<p>{age} years</p>
			</div>
		</article>
	);
}

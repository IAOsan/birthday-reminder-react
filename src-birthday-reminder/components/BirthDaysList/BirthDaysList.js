export default function BirthDaysList({ data, render }) {
	return (
		<section>
			{data.map((birthday) => {
				return render && render(birthday);
			})}
		</section>
	);
}

export default function CustomBtn({ value, ...restProps }) {
	return <button {...restProps}>{value}</button>;
}

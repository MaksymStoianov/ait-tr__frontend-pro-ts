import "./styles.css";

function Box(props: object) {
	const { children } = props;

	return <div className="superellipse">{children}</div>;
}

export default Box;

import * as React from "react";
import { Button } from "./styles";
import "./styles.css";

type Lesson08Props = {
	children?: React.ReactNode;
};

function Lesson08(props: Lesson08Props) {
	const { children } = props;
	const pStyles = {
		color: "#222",
		fontSize: "15px",
	};

	return (
		<div className="lesson08-wrapper">
			<div
				style={{
					color: "#2196F3",
					fontSize: "18px",
				}}
			>
				Inline style example 1
			</div>
			<p style={pStyles}>Inline style example 2</p>
			{children}
			<Button>Привет</Button>
		</div>
	);
}

export default Lesson08;

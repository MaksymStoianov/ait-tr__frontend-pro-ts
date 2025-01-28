import styled from "@emotion/styled";

interface ButtonProps {
	color?: string;
}

export const Button = styled.button<ButtonProps>`
	background-color: blue;
	color: white;
	padding: 10px;
	border-radius: 5px;
`;

import { InputContainer, InputElement, LabelElement } from "./styles";
import { InputProps } from "./types";

function Input(props: InputProps) {
	const {
		id,
		name,
		type = "text",
		placeholder,
		label,
		value,
		onChange,
	} = props;

	return (
		<InputContainer>
			{label && <LabelElement htmlFor={id}>{label}</LabelElement>}
			<InputElement
				name={name}
				id={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</InputContainer>
	);
}

export default Input;

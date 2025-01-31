import Button from "../Button/Button";
import Input from "../Input/Input";
import { InputsContainer, LoginFormContainer, Title } from "./styles";

function LoginForm() {
	return (
		<LoginFormContainer>
			<Title>Login form</Title>
			<InputsContainer>
				<Input name="email" />
				<Input name="password" />
			</InputsContainer>
			<Button />
		</LoginFormContainer>
	);
}

export default LoginForm;

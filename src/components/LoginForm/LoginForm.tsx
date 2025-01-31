import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import { InputsContainer, LoginFormContainer, Title } from "./styles";

function LoginForm() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const onLogin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(email);
		console.log(password);
	};

	return (
		<LoginFormContainer onSubmit={onLogin}>
			<Title>Login form</Title>
			<InputsContainer>
				{/* <input onChange={(event: ChangeEvent<HTMLInputElement>)=>{console.log(event);
      }}/> */}
				<Input
					name="email"
					label="Email"
					value={email}
					onChange={onEmailChange}
					placeholder="Enter your email"
				/>
				<Input
					name="password"
					label="Password"
					value={password}
					onChange={onPasswordChange}
					placeholder="Enter your password"
				/>
			</InputsContainer>
			<Button type="submit" name="Login" />
		</LoginFormContainer>
	);
}

export default LoginForm;

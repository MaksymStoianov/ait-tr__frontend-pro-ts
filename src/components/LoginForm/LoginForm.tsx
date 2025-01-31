import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputsContainer, LoginFormContainer, Title } from "./styles";
import { LoginFormValues } from "./types";

function LoginForm() {
	// const [email, setEmail] = useState<string>("");
	// const [password, setPassword] = useState<string>("");

	// const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setEmail(event.target.value);
	// };

	// const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setPassword(event.target.value);
	// };

	// const onLogin = (event: FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	console.log(email);
	// 	console.log(password);
	// };

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Не верный формат")
			.required("Обязательное поле!")
			.min(5, "Min 5 symbols")
			.max(15, "Max 15 symbols")
			.typeError("Email must be string"),
		password: Yup.string()
			.required("Обязательное поле!")
			.test(
				"Check min password length",
				"Min 10 symbols",
				value => value.length >= 10
			),
		age: Yup.number()
			.positive("Должно быть положительное")
			.integer("Должно быть целое"),
		date: Yup.date(),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			age: "",
			date: "",
		} as LoginFormValues,
		validationSchema,
		validateOnChange: false,
		onSubmit: values => {
			console.log(values);
		},
	});

	return (
		<LoginFormContainer onSubmit={formik.handleSubmit}>
			<Title>Login form</Title>
			<InputsContainer>
				<Input
					name="email"
					type="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					placeholder="Enter your email"
					error={formik.errors.email}
				/>
				<Input
					name="password"
					type="password"
					label="Password"
					value={formik.values.password}
					onChange={formik.handleChange}
					placeholder="Enter your password"
					error={formik.errors.password}
				/>
				<Input
					name="age"
					type="number"
					label="age"
					value={formik.values.age}
					onChange={formik.handleChange}
					placeholder="Enter your age"
					error={formik.errors.age}
				/>
				<Input
					name="date"
					type="date"
					label="date"
					value={formik.values.date}
					onChange={formik.handleChange}
					placeholder="Enter your date"
					error={formik.errors.date}
				/>
			</InputsContainer>
			<Button type="submit" name="Login" />
		</LoginFormContainer>
	);
}

export default LoginForm;

import { ChangeEvent, useState } from "react";
import Input from "../../components/Input/Input";
import { Lesson09Wrapper } from "./styles";

function Lesson09() {
	const [userName, setUserName] = useState<string>("Max");
	const [userAge, setUserAge] = useState<string>("18");

	const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const onChangeUserAge = (event: ChangeEvent<HTMLInputElement>) => {
		setUserAge(event.target.value);
	};

	return (
		<Lesson09Wrapper>
			<Input
				id="user_name"
				name="user_name"
				label="User name"
				placeholder="Input ..."
				value={userName}
				onChange={onChangeUserName}
			/>
			<Input
				id="user_age"
				name="user_age"
				label="User age"
				placeholder="Input ..."
				value={userAge}
				onChange={onChangeUserAge}
			/>
			<div>
				{userName} {userAge}
			</div>
		</Lesson09Wrapper>
	);
}

export default Lesson09;

import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
	FormWrapper,
	Homework09Wrapper,
	ResultBlock,
	ResultWrapper,
} from "./styles";

function Homework09() {
	const [firstNote, setFirstNote] = useState<string>("");
	const [secondNote, setSecondNote] = useState<string>("");
	const [isShowResult, setIsShowResult] = useState<boolean>(false);
	const [firstResult, setFirstResult] = useState<string>("");
	const [secondResult, setSecondResult] = useState<string>("");

	const onChangeFirstNote = (event: ChangeEvent<HTMLInputElement>) => {
		setFirstNote(event.target.value);
	};

	const onChangeSecondNote = (event: ChangeEvent<HTMLInputElement>) => {
		setSecondNote(event.target.value);
	};

	const showResult = () => {
		setFirstResult(firstNote);
		setSecondResult(secondNote);
		setIsShowResult(!isShowResult);
	};

	return (
		<Homework09Wrapper>
			<FormWrapper>
				<Input
					name="first-note"
					placeholder="Enter first note"
					value={firstNote}
					onChange={onChangeFirstNote}
				/>
				<Input
					name="second-note"
					placeholder="Enter second note"
					value={secondNote}
					onChange={onChangeSecondNote}
				/>
				<Button
					name="SHOW / HIDE"
					onClick={showResult}
					disabled={!firstNote.trim() && !secondNote.trim()}
				/>
			</FormWrapper>
			{isShowResult && (
				<ResultWrapper>
					{firstResult && <ResultBlock>{firstResult}</ResultBlock>}
					{secondResult && <ResultBlock>{secondResult}</ResultBlock>}
				</ResultWrapper>
			)}
		</Homework09Wrapper>
	);
}

export default Homework09;

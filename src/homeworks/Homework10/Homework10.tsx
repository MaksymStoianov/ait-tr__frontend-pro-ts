import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import { DogImg, Homework10Wrapper, InputsWrapper } from "./styles";
import { ErrorMessage } from "../../components/ErrorMessage/styles";

function Homework10() {
	const URL = "https://dog.ceo/api/breeds/image/random";

	const [search, setSearch] = useState<string>("");
	const [note, setNote] = useState<string>("");
	const [urlImg, setUrlImg] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNote(event.target.value);
	};

	const getDogPhoto = async () => {
		try {
			setUrlImg("");
			setError("");
			setIsLoading(true);

			const result = await axios.get(URL);
			setUrlImg(result.data.message);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (search) {
			getDogPhoto();
		}
	}, [search]);

	return (
		<Homework10Wrapper>
			<InputsWrapper>
				<Input
					name="search"
					placeholder="Enter value"
					value={search}
					onChange={onSearchChange}
				/>
				<Input
					name="note"
					placeholder="Enter note"
					value={note}
					onChange={onNoteChange}
				/>
			</InputsWrapper>
			{urlImg && <DogImg src={urlImg} alt="Dog image" />}
			{error && <ErrorMessage>{error}</ErrorMessage>}
			{isLoading && <Spinner />}
		</Homework10Wrapper>
	);
}

export default Homework10;

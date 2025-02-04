import Layout from "components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

// ## Lessons
// import Lesson06 from './lessons/Lesson06/Lesson06'
// import Lesson07 from './lessons/Lesson07/Lesson07'
// import Lesson08 from './lessons/Lesson08/Lesson08'
// import Lesson09 from './lessons/Lesson09/Lesson09'
// import Lesson10 from './lessons/Lesson10/Lesson10'
// import Lesson11 from "./lessons/Lesson11/Lesson11";
// import Lesson12 from "./lessons/Lesson12/Lesson12";
import Lesson13 from "lessons/Lesson13/Lesson13";

// ## Homeworks
// import Homework06 from './homeworks/Homework06/Homework06'
// import Homework07 from './homeworks/Homework07/Homework07'
// import Homework08 from './homeworks/Homework08/Homework08'
// import Homework09 from './homeworks/Homework09/Homework09'
// import Homework10 from "./homeworks/Homework10/Homework10";
// import Homework11 from "./homeworks/Homework11/Homework11";
// import Homework12 from "./homeworks/Homework12/Homework12";
// import Homework13 from "./homeworks/Homework13/Homework13";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Layout>
				<Lesson13 />
				{/* <Homework13 /> */}

				{/* <Lesson12 /> */}
				{/* <Homework12 /> */}

				{/* <Lesson11 /> */}
				{/* <Homework11 /> */}

				{/* <Lesson10 /> */}
				{/* <Homework10 /> */}

				{/* <Lesson09 /> */}
				{/* <Homework09 /> */}

				{/* <Lesson08 /> */}
				{/* <Homework08 /> */}

				{/* <Lesson07 /> */}
				{/* <Homework07 /> */}

				{/* <Lesson06/> */}
				{/* <Homework06 /> */}
			</Layout>
		</BrowserRouter>
	);
}

export default App;

import About from "pages/About/About";
import Home from "pages/Home/Home";
import User from "pages/Users/components/User";
import Users from "pages/Users/Users";
import { Route, Routes } from "react-router-dom";
import "./styles";

function Lesson13() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/users" element={<Users />} />
			<Route path="/users/user" element={<User />} />
		</Routes>
	);
}

export default Lesson13;

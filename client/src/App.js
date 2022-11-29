import './App.css';
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";
import Login2 from "./pages/Login2";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {

	const [user, setUser] = useState(null);
	const [test, setTest] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			console.log(data)
			setUser(data.user);
		} catch (err) {
			console.log(err);
		}
	};

	const checkSuccess = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			console.log(data)
			setTest(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
		checkSuccess();
	}, []);

	useEffect(() => {
		console.log("Here is the user", user)
	}, [user]);

	return (
		<div className="container">
			<Navbar />
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					exact
					path="/profile"
					element={user ? <Profile {...{user, setUser}}  /> : <Navigate to="/" /> }
				/>
				<Route
					exact
					path="/login"
					element={<Login2 /> }
				/>
				<Route
					path="/signup"
					element={<SignUp />}
				/>
			</Routes>
		</div>
	);
}

export default App;


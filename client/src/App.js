import './App.css';
import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Login2 from "./pages/Login2";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user.json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Profile user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login2 />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <SignUp />}
				/>
			</Routes>
		</div>
	);
}

export default App;


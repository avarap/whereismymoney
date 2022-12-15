import './App.css';
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";
import Login2 from "./pages/Login2";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Cashflow from "./pages/Cashflow";
import Friends from './pages/Friends';
import DashboardLayout from "./pages/DashboardLayout";
import { Routes, Route} from "react-router-dom";
import { UserContext } from "./contexts/UserContextProvider"
import {  useContext } from "react";


function App() {
	const {userObject} = useContext(UserContext);
	console.log(userObject)

	return (
		<div className="container">
			<Routes>
				<Route exact path="/" element={<Home />} />
				{/* <Route
					exact
					path="/profile"
					element={user ? <Profile {...{ user, setUser }} /> : <Navigate to="/" />}
				/> */}
				<Route path="/" element={<DashboardLayout />}>
					<Route exact path="/profile" element={<Profile  /> } />
					<Route exact path="/dashboard" element={<Dashboard /> } />
					<Route exact path="/cashflow" element={<Cashflow /> } />
					<Route exact path="/friends" element={<Friends /> } />
				</Route>
				
				<Route exact path="/login" element={<Login2 />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;


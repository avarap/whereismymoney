import './App.css';
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";
import Login2 from "./pages/Login2";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/Dashboard";
import Cashflow from "./pages/cashflow/Cashflow";
import Friends from './pages/Friends';
import DashboardLayout from "./pages/dashboardlayout/DashboardLayout";
import { Routes, Route, Navigate} from "react-router-dom";
import { UserContext } from "./contexts/UserContextProvider"
import { useContext } from "react";
import DynamicTitle from './utils/DynamicTitle';



function App() {
	const { userObject } = useContext(UserContext);
	console.log(userObject)
	DynamicTitle("Where is my money");

	return (
		<div className="container">
			<Routes>
				<Route exact path="/" element={userObject ? <Navigate to="/profile" /> : <Home />} />
				<Route path="/" element={userObject ? <DashboardLayout /> : <Navigate to="/" />}>
					<Route
						exact path="/profile"
						element={<Profile {...{ userObject }} />}
					/>
					{/* <Route exact path="/profile" element={<Profile  /> } /> */}
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/cashflow" element={<Cashflow />} />
					<Route exact path="/friends" element={<Friends />} />
				</Route>

				<Route exact path="/login" element={<Login2 />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;


import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContextProvider';

function Profile() {

	const { userObject } = useContext(UserContext);

	const navigate = useNavigate();

	function logout() {
		axios({ method: "POST", url: `${process.env.REACT_APP_API_URL}/auth/logout`, withCredentials: true })
			.then((response) => {
				console.log("response status", response)
				if (response.status === 200) {
					navigate("/login");
					return null;
				}
			})

	}

	return (
		<div>
			{
				userObject ? (
					<h1>Welcome back {userObject.googleId}</h1>
				) : (
					<h1>Welcome To MY Website</h1>
				)
			}

			<button onClick={logout}>Log Out</button>
		</div>
		// <div >
		// 	<h1>Profile page: {userObject.googleId}</h1>
		// 	{/* {{userObject} ? (<p>{userObject.googleId}</p>) : ("Hasta la vista")} */}

		// 	<img
		// 				// src={user.picture}
		// 				alt="profile"
		// 				className="picture-home"
		// 			/>
		// 	<button  onClick={logout}>
		// 				Log Out
		// 			</button>
		// </div>
	);
}

export default Profile;

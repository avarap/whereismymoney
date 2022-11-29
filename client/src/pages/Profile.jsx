import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Profile({user, setUser}) {
	
	// const user = userDetails.user;
	// const logout = () => {
	// 	window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	// };
	const navigate = useNavigate();

	function logout() {
		axios({method: "POST", url: `${process.env.REACT_APP_API_URL}/auth/logout`, withCredentials: true})
		.then((response) => {
		   console.log("response status", response)

		   if (response.status === 200) {
			setUser(null);
			navigate("/");
		   }
	   })

   }
	
	return (
		<div >
			<h1>Profile page:</h1>
			<p>{user.googleId}</p>

			<img
						// src={user.picture}
						alt="profile"
						className="picture-home"
					/>
			<button  onClick={logout}>
						Log Out
					</button>
		</div>
	);
}

export default Profile;

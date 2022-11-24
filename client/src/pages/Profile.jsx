import React from 'react'
import axios from "axios"

function Profile() {
	
	// const user = userDetails.user;
	// const logout = () => {
	// 	window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	// };

	function logout() {
		axios({method: "POST", url: `${process.env.REACT_APP_API_URL}/auth/logout`, withCredentials: true})
		.then((response) => {
		   console.log("response status", response)

		   if (response.status === 200) {
			   // setCount("login")
		   }
	   })

   }
	
	return (
		<div >
			<h1>Profile page:</h1>

			<img
						// // src={user.picture}
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

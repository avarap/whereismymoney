import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContextProvider';

import Avatar from '@mui/material/Avatar';


function Profile() {

	const { userObject } = useContext(UserContext);


	// function logout() {
	// 	axios({ method: "POST", url: `${process.env.REACT_APP_API_URL}/auth/logout`, withCredentials: true })
	// 		.then((response) => {
	// 			console.log("response status", response)
	// 			if (response.status === 200) {
	// 				navigate("/login");
	// 				return null;
	// 			}
	// 		})

	// }

	

	return (
		<div>
			{
				userObject ? (
					<>
					<h1>Welcome back {userObject.googleId}</h1>
					<h2>{userObject.displayName}</h2>
					</>
				) : (
					<h1>Welcome To MY Website</h1>
				)
			}

			{	userObject ? (
				<>
					<h1>{userObject.displayName}</h1>
					<img src={`${userObject.picture}`} width="32px" alt=''/>
					<Avatar sx={{ width: 32, height: 32 }} src={`${userObject.picture}`}></Avatar>
				</>
				) : (
					<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
				) 
			}
        

			{/* <button onClick={logout}>Log Out</button> */}
		</div>
	)
		}


export default Profile;

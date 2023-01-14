import React from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from "axios";
// import Orders from '../components/Orders';
import Avatar from '@mui/material/Avatar';
import "./ProfileStyles.css";

function Profile() {

	const { userObject } = useContext(UserContext);

	const navigate=useNavigate();

	function logout() {
		axios({ method: "POST", url: `${process.env.REACT_APP_API_URL}/auth/logout`, withCredentials: true })
			.then((response) => {
				console.log("response status", response)
				if (response.status === 200) {
					navigate("/");
					return null;
				}
			})

	}

	return (
		<>
              {/* Profile information */}
              <Grid item xs={12}>
                <Paper className='profile-container'>
                  <Grid item style={{margin: "0 20px"}}>
		{	userObject ? (
				<>
					<Avatar className='profile-picture' src={`${userObject.picture}`}></Avatar>
				</>
				) : (
					<Avatar className='profile-picture'>M</Avatar>
				) 
			}
        </Grid>
		<Grid item>
	{
				userObject ? (
					<>
					<h1>Welcome back {userObject.displayName}</h1>
					<p>You are logged in with: {userObject.email}</p>
					<Button variant="contained" onClick={logout} className="logout-btn">Log Out</Button>
					</>
				) : (
					<h1>Welcome To MY Website</h1>
				)
			}
			</Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                </Paper>
              </Grid>
		</>
	)
		}


export default Profile;

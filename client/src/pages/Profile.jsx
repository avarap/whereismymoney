import React from 'react'
import { useContext, navigate } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from "axios";
import Orders from '../components/Orders';
import Avatar from '@mui/material/Avatar';

function Profile() {

	const { userObject } = useContext(UserContext);


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
		<>
              {/* Profile information */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 350,
                  }}
                >
                  <Grid item>
		{	userObject ? (
				<>
					<Avatar sx={{ width: 150, height: 150 }} src={`${userObject.picture}`}></Avatar>
				</>
				) : (
					<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
				) 
			}
        </Grid>
		<Grid item>
	{
				userObject ? (
					<>
					<h1>Welcome back {userObject.displayName}</h1>
					<p>You are logged in with: {userObject.email}</p>
					<Button variant="contained" onClick={logout}>Log Out</Button>
					</>
				) : (
					<h1>Welcome To MY Website</h1>
				)
			}
			</Grid>
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
		</>
	)
		}


export default Profile;

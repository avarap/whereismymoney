import React from 'react'
import { useContext, navigate } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from "axios";



import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'left',
	color: theme.palette.text.secondary,
  }));

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

<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} 
sx={{
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	px: [10],
	p: 20
  }}>
  <Box gridColumn="span 8">
    <Item>
	<Grid container spacing={4}
	
	sx={{
		p: 10
	  }}>
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
	</Grid>
	</Item>
  </Box>
</Box>


			
		</>
	)
		}


export default Profile;

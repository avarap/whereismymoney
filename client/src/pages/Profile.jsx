import React from 'react'
import { useContext, navigate } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from "axios";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Orders from '../components/Orders';
import Typography from '@mui/material/Typography';

// import ProfileBar from "../components/ProfileBar"

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

<Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
		  <Typography
              component="h1"
              variant="h3"
              color="inherit"
              marginBottom="20px"
              noWrap
              sx={{ flexGrow: 2 }}
            >
              Profile
            </Typography>
            <Grid container spacing={4}>
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
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
		</>
	)
		}


export default Profile;

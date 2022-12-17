import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { LoginButton } from "./LoginBtnStyle";

function LoginBtn() {

	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google`,
			"_self"
		);
	};

	return (
		<LoginButton color="primary" onClick={googleAuth}><GoogleIcon style={{ marginRight: "10px" }} />  SIGN UP WITH GOOGLE </LoginButton>
	)
}

export default LoginBtn;


  import {
    // AppbarActionIcons,
    AppbarOuterContainer,
    AppbarInnerContainer,
    LoginButton,
    Logo
  } from "../../styles/navbarHome";

  // import Actions from "./actions";
  // import { useUIContext } from "../../context/ui";
  
 function NavbarDesktop() {

  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google`,
			"_self"
		);
	};
  
    return (
      <AppbarOuterContainer>
      <AppbarInnerContainer>
        <Logo src="./images/wmm4.png" />
            <LoginButton variant="outlined" onClick={googleAuth}>Sign up with Google</LoginButton>
      </AppbarInnerContainer>
      </AppbarOuterContainer>
    );
  }

  export default NavbarDesktop;
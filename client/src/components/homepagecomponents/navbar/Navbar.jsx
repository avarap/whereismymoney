import {
  AppbarOuterContainer,
  AppbarInnerContainer,
  LoginButton,
  Logo
} from "./navbarStyles";

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
// import axios from "axios";
import CashFlowForm from "../components/CashFlowForm";

function Home() {
	
	// const user = userDetails.user;
	// const logout = () => {
	// 	window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	// };

	

	// async function logout() {
	// 	try {
	// 		const response = await axios({ method: "POST", url: `${process.env.REACT_APP_API_URL}/auth/logout`, withCredentials: true })
	// 		console.log(response)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	
	return (
		<div >
			<h1>Homepage</h1>
			<CashFlowForm/>

			{/* <img
						src={user.picture}
						alt="profile"
						className="picture-home"
					/> */}
			
		</div>
	);
}

export default Home;
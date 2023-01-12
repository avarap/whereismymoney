import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [userObject, setUserObject] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const getUser = async () => {
		
		console.log("we run getuser")
		if (loaded) return;
		console.log("we ask the server")

        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
            const response = await fetch(url, { credentials: "include" });
            console.log("this is response", response)
            const data = await response.json();
            console.log("this is data", data)
            setUserObject(data.user);
            console.log("going to profile")
        } catch (err) {
            console.log(err);
        } finally { 
            setLoaded(true);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

	// if (!loaded) return null;


    useEffect(() => {
        console.log("User context is mounting")
    }, []);

    useEffect(() => {
        console.log("loaded", loaded)
    }, [loaded]);

    // const valueProp = {user, login, logout}
    return (
        <UserContext.Provider value={{ userObject, setUserObject, loaded, setLoaded }} >
            {loaded ? children : null}

        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
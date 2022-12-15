import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [userObject, setUserObject] = useState(null);

    const getUser = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
            const { data } = await axios.get(url, { withCredentials: true });
            setUserObject(data.user);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    // useEffect(() => {
    //     console.log("Here is the user", userObject)
    // }, [userObject]);

    // const valueProp = {user, login, logout}
    return (
        <UserContext.Provider value={{ userObject }} >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
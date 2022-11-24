// import { createContext, useState } from "react";
// // import axios from 'axios';

// const UserContext = createContext();

// function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);

  

//   // useEffect(() => {
//   //   const getUser = () => {
//   //     fetch("http://localhost:5000/auth/login/success", {
//   //       method: "GET",
//   //       credentials: "include",
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "application/json",
//   //         "Access-Control-Allow-Credentials": true,
//   //       },
//   //     })
//   //       .then((response) => {
//   //         if (response.status === 200) return response.json();
//   //         throw new Error("authentication has been failed!");
//   //       })
//   //       .then((resObject) => {
//   //         setUser(resObject.user);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   };
//   //   getUser();
//   // }, []);

//   // const getUser = async () => {
//   //   try {
//   //     const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
//   //     const { data } = await axios.get(url, { withCredentials: true });
//   //     setUser(data.user._json);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getUser();
//   // }, []);
// // const valueProp = {user, login, logout}
//   return (
//     <UserContext.Provider value={{ user }} >
//       {children}
//     </UserContext.Provider>
//   );
// }

// export { UserContext, UserContextProvider };
// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// // import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// // import FormLabel from "@mui/material/FormLabel";
// // import RadioGroup from "@mui/material/RadioGroup";
// // import Radio from "@mui/material/Radio";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// // import Slider from "@mui/material/Slider";
// import Button from "@mui/material/Button";
// import InputLabel from "@mui/material/InputLabel";
// import { postData } from "../utils/useFetch";

// const defaultValues = {
//   valueDate: "",
//   description: "",
//   category: "",
//   totalAmount: 0,
//   // overall = [];
//   // overall.push({ percentage: 100, paid: "True", user: req.user._id });
//   picture: "",
//   owner: "",
// };

// const apiRoute = "/cashflow/create";

// const SearchForm = ({ onSearch }) => {
//   const [search, setSearch] = React.useState("");

//   const onInputChange = (value) => {
//     setSearch(value);
//     onSearch(value);
//   }

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setQuery({ ...tableValues, [name]: value, });
//   // };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   const respAPI = await postData(process.env.REACT_APP_API_URL + apiRoute, formValues);
//   //   console.log(respAPI);
//   //   setFormValues(defaultValues);
//   // };

//   return (
//     <Grid container alignItems="center" justify="center" direction="column" >
//       <Grid item xs={12} md={8} lg={9} sx={{ display: "flex" }}>
//         <TextField id="date-input" name="valueDate" label="Search..." type="text" className="searchbar" value={search} onChange={(e) => onInputChange(e.target.value)} sx={{ m: 1 }} />
//       </Grid>
//     </Grid>
//   );
// };

// export default SearchForm;
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { postData } from "../utils/useFetch";



const defaultValues = {
  _id:"",
  valueDate: "",
  description: "",
  category: "",
  totalAmount: 0,
  overall: [],
  // overall.push({ percentage: 100, paid: "True", user: req.user._id });
  picture: "",
  owner: "",
};

const apiRoute = "/cashflow/create";

const CashFlowForm = ({ updateData }) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const respAPI = await postData(process.env.REACT_APP_API_URL + apiRoute, formValues);
      if (respAPI.data.message === "Success") {
        formValues._id = respAPI.data._doc._id;
        updateData((old) => [...old, formValues]);
        console.log(respAPI.data._doc);
        setFormValues(defaultValues);
      }
    }catch(err){
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column">
        {/* <Paper sx={{ p: 2, display: "flex", flexDirection: "row", height: 540 }}> */}
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ display: "flex" }}>
          <TextField
            id="date-input"
            name="valueDate"
            //label="Date"
            type="date"
            inputFormat="DD/MM/YYYY"
            value={formValues.valueDate}
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />

          <TextField
            id="desc-input"
            name="description"
            label="Description"
            type="text"
            value={formValues.description}
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />
          <TextField
            id="amount-input"
            name="totalAmount"
            label="Amount"
            type="number"
            value={formValues.totalAmount}
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              name="category"
              label="Date"
              value={formValues.category}
              onChange={handleInputChange}>
              <MenuItem
                key="bank"
                value="bank">
                Bank
              </MenuItem>
              <MenuItem
                key="shops"
                value="shops">
                Shops
              </MenuItem>
              <MenuItem
                key="restaurant "
                value="restaurant">
                Restaurant
              </MenuItem>
              <MenuItem
                key="others "
                value="others">
                Others
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ m: 1 }}>
            Submit
          </Button>
        </Grid>
        {/* <Grid item xs={12} md={8} lg={9}>
                  <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Grid> */}
        {/* </Paper> */}
      </Grid>
    </form>
    // </MuiPickersUtilsProvider>
  );
};

export default CashFlowForm;

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
import { postData } from "../utils/useFetch";

const defaultValues = {
  valueDate: "",
  description: "",
  category: "",
  totalAmount: 0,
  // overall = [];
  // overall.push({ percentage: 100, paid: "True", user: req.user._id });
  picture: "",
  owner: "",
};

const apiRoute = "/cashflow/create";

const CashFlowForm = () => {

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value, });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const respAPI = await postData(process.env.REACT_APP_API_URL + apiRoute, formValues);
    console.log(respAPI);
    setFormValues(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField id="date-input" name="valueDate" label="Date" type="text" value={formValues.valueDate} onChange={handleInputChange} />
        </Grid>
        <Grid item>
          <TextField id="desc-input" name="description" label="Description" type="text" value={formValues.description} onChange={handleInputChange} />
        </Grid>
        <Grid item>
          <TextField id="amount-input" name="totalAmount" label="Amount" type="number" value={formValues.totalAmount} onChange={handleInputChange} />
        </Grid>
        
        <Grid item>
          <FormControl>
            <Select name="category" value={formValues.category} onChange={handleInputChange}>
              <MenuItem key="bank" value="bank">Bank</MenuItem>
              <MenuItem key="shops" value="shops">Shops</MenuItem>
              <MenuItem key="restaurant " value="restaurant">Restaurant</MenuItem>
              <MenuItem key="others " value="others">Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </Grid>
    </form>
  );
};

export default CashFlowForm;

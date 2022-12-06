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
        <Paper sx={{ p: 2, display: "flex", flexDirection: "row", height: 540 }}>
            <Grid item xs={12} md={8} lg={9}>              
                  <TextField id="date-input" name="valueDate" label="Date" type="text" value={formValues.valueDate} onChange={handleInputChange} />
                  <TextField id="desc-input" name="description" label="Description" type="text" value={formValues.description} onChange={handleInputChange} />
                  <TextField id="amount-input" name="totalAmount" label="Amount" type="number" value={formValues.totalAmount} onChange={handleInputChange} />
                  <FormControl>
                    <Select name="category" value={formValues.category} onChange={handleInputChange}>
                      <MenuItem key="bank" value="bank">Bank</MenuItem>
                      <MenuItem key="shops" value="shops">Shops</MenuItem>
                      <MenuItem key="restaurant " value="restaurant">Restaurant</MenuItem>
                      <MenuItem key="others " value="others">Others</MenuItem>
                    </Select>
                  </FormControl>              
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Grid>
        </Paper>
      </Grid>
    </form>
  );
};

export default CashFlowForm;

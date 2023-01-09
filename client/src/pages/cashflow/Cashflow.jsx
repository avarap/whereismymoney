import React, { useEffect, useState } from "react";
// import Orders from "../components/Orders";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CashFlowForm from "../../components/cashflowform/CashFlowForm";
import { getData } from "../../utils/useFetch";
import MaterialTable from "../../components/MaterialTable";
import "./CashflowStyles.css";
import DynamicTitle from '../../utils/DynamicTitle';

const defaultValues = [{
  valueDate: "",
  description: "",
  category: "",
  totalAmount: 0,
  overall: [],
  picture: "",
  owner: "",
}];

function Cashflow() {
  const [data, setData] = useState([]);
  
  DynamicTitle("Cashflow");

  const getUserData = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/cashflow`;
      const allData = await getData(url);
      //console.log('allData',allData);
      setData(allData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {/* Form */}
      <Grid item xs={12}>
        <Paper className="form-wrapper">
          <Typography component="h2" variant="h5" color="inherit" noWrap sx={{ flexGrow: 2 }}>
            Add a new expense
          </Typography>
          <CashFlowForm updateData={setData}/>
        </Paper>
      </Grid>
      {/* Recent Expenses */}
      <Grid item xs={12}>
        {/* <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}> */}
        {data ? <MaterialTable {...{data}}/> : <></>}
        {/* </Paper> */}
      </Grid>
    </>
  );
}

export default Cashflow;
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CashFlowForm from "../components/CashFlowForm";
import { getData } from "../utils/useFetch";
import MaterialTable from "../components/MaterialTable";

const defaultValues = {
  _id: "",
  valueDate: "",
  description: "",
  category: "",
  totalAmount: 0,
  overall: [],
  picture: "",
  owner: "",
};

function Cashflow() {
  const [data, setData] = useState([]);
  const currentDate = new Date().toISOString().substring(0, 10);
  defaultValues["valueDate"] = currentDate;

  const getUserData = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/cashflow`;
      const allData = await getData(url);
      console.log(allData.data);
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
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", justifyContent: "center", height: 180 }}>
          <Typography component="h2" variant="h5" color="inherit" noWrap sx={{ flexGrow: 2 }}>
            Add a new expense
          </Typography>
          <CashFlowForm updateData={setData} defaultValues={defaultValues} />
        </Paper>
      </Grid>
      {/* Recent Expenses */}
      <Grid item xs={12}>
        {data ? <MaterialTable {...{ data }} /> : <></>}
      </Grid>
    </>
  );
}

export default Cashflow;

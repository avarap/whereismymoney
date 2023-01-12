import React, { useEffect, useState } from "react";
import Chart from "../components/Chart";
import Deposits from "../components/Deposits";
import Orders from "../components/Orders";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getData } from "../utils/useFetch";

function Dashboard() {
  
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("12");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getUserData = async () => {
    try {
      const headers = { year: year, month: month };
      const url = `${process.env.REACT_APP_API_URL}/cashflow/overview`;
      const response = await getData(url, headers);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {/* Chart */}
      <Grid
        item
        xs={12}
        md={8}
        lg={9}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}>
          <Chart {...{ data }} />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid
        item
        xs={12}
        md={4}
        lg={3}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}>
          <Deposits
            {...{ data }}
            {...{ year }}
            {...{ month }}
          />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>{/* <Orders {...{ data }} /> */}</Paper>
      </Grid>
    </>
  );
}

export default Dashboard;

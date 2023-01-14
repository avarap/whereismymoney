import React, { useEffect, useState } from "react";
import Chart from "../components/Chart";
import Deposits from "../components/Balance";
// import Orders from "../components/Orders";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getData } from "../utils/useFetch";
import { Colors } from "./../styles/Theme";

function Dashboard() {
  const [year, setYear] = useState("2023");
  const [month, setMonth] = useState("1");
  const [data, setData] = useState([]);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

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
    console.log('Month ',currentMonth.toString());
    setYear(currentYear.toString());
    setMonth((currentMonth.toString()==='0' ? '1' : currentMonth.toString() ));
    getUserData();    
  }, []);
  return (
    <>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}>
          <Chart {...{ data }} />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240, backgroundColor: Colors.body_bg }}>
          <Deposits {...{ data }} {...{ year }} {...{ month }} />
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

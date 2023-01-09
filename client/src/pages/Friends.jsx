import React from "react";
import Chart from "../components/Chart";
import Orders from "../components/Orders";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Friends() {
  return (
    <>
      {/* Chart */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240, }}>
          {/* <Chart /> */}
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          {/* <Orders /> */}
        </Paper>
      </Grid>
    </>
  );
}

export default Friends;

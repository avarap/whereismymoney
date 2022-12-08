import React from 'react'
// import Orders from '../components/Orders';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CashFlowForm from '../components/CashFlowForm';
import MaterialTable from "../components/MaterialTable";
import { useState } from "react"

function Cashflow() {
  // const [item, setItem] = useState("");
  // const addNewItem = (newItem) => {
  //   setItem(oldItems => [...oldItems, newItem]);
  // }

  return (
    <>
              {/* Form */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    height: 180,
                  }}
                >
                  <Typography
              component="h2"
              variant="h5"
              color="inherit"
              noWrap
              sx={{ flexGrow: 2 }}
            >
              Add a new expense
            </Typography>
                  <CashFlowForm setFormValues={setFormValues} />
                </Paper>
              </Grid>
              {/* Recent Expenses */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <MaterialTable />
                </Paper>
              </Grid>
    </>
  )
}

export default  Cashflow;
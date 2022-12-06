import React from 'react'
import Orders from '../components/Orders';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CashFlowForm from '../components/CashFlowForm';


function Cashflow() {


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
                  <CashFlowForm />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
    </>
  )
}

export default  Cashflow;
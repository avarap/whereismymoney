import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "long" });
}

export default function Deposits({data, year, month}) {
  const currentAmount = data.reduce((accumulator, currentValue) => {return accumulator + currentValue.totalCategory}, 0);
  
  return (
    <React.Fragment>
      <Title>Recent Expenses</Title>
      <Typography
        component="p"
        variant="h4">
        €{currentAmount}
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ flex: 1 }}>
        on {getMonthName(month)}, {year}
      </Typography>
      <div>
        <Link
          color="text.secondary"
          href="#"
          onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
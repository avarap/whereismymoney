import * as React from "react";
import MUIDataTables, { TableBody } from "mui-datatables";
import { Paper } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { IconButton } from "@mui/material";
import { postData } from "../utils/useFetch";

const deleteButton = (value, tableMeta, updateValue) => {
  return <button onClick={() => console.log(tableMeta)}>Delete</button>;
};

const editButton = (value, tableMeta, updateValue) => {
  return (
    <IconButton onClick={() => console.log(value, tableMeta)}>
      <ModeEditIcon />
    </IconButton>
  );
};

const columns = [
  {
    label: "ID",
    name: "_id",
    options: {
      filter: false,
      display: false,
    },
  },
  {
    label: "Date",
    name: "_valueDate",
    options: {
      filter: true,
    },
  },
  {
    label: "Description",
    name: "description",
    options: {
      filter: true,
    },
  },
  {
    label: "Category",
    name: "category",
    options: {
      filter: true,
    },
  },
  {
    label: "Amount",
    name: "totalAmount",
    options: {
      filter: true,
    },
  },
  {
    label: "Delete",
    name: "Delete",
    options: {
      filter: false,
      sort: false,
      empty: true,
      print: false,
      customBodyRender: deleteButton,
    },
  },
  {
    label: "Edit",
    name: "Edit",
    options: {
      filter: false,
      sort: false,
      empty: true,
      print: false,
      customBodyRender: editButton,
    },
  },
];

const options = { filterType: "checkbox" };

const CustomPaper = () => {
  return <Paper sx={{ boxShadow: "none !important" }} />;
};

const CustomMuiPaper = (props) => {
  return (
    <TableBody {...props} ItemComponent={CustomPaper} VVV/>
  );
};

function MaterialTable({ data }) {
  return (
    <MUIDataTables
      title={"Expenses"}
      data={data}
      columns={columns}
      options={options}
      components={{
        TableBody: CustomMuiPaper,
      }}
    />
  );
}

export default MaterialTable;

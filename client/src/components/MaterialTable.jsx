import * as React from 'react';
import MUIDataTables, {TableBody} from "mui-datatables"
import { Paper} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton} from '@mui/material';



const columns = [
    {
      name: "Date",
      options: {
        filter: true,
      }
    },
    {
      label: "Description",
      name: "Title",
      options: {
        filter: true,
      }
    },
    {
      name: "Category",
      options: {
        filter: false,
      }
    },
    {
      name: "Amount",
      options: {
        filter: true,
      }
    },
    {
        name: "Delete",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <button onClick={() => console.log(value, tableMeta) }>
                Delete
              </button>
            );
          }
        }
      },
      {
        name: "Edit",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <IconButton onClick={() => console.log(value, tableMeta) }>
                <ModeEditIcon />
              </IconButton>
            );
          }
        }
      },
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
   ];
const options = {
    filterType: 'checkbox',
  };

  const CustomPaper = () => {
    return (
        <Paper
        sx={{boxShadow: "none !important"}}
        />
    );
};

const CustomMuiPaper = (props) => {
    return <TableBody {...props} ItemComponent={CustomPaper} />;
};

function MaterialTable() {

    // const [rows, setRows] = useState();

    // const deleteRow = (number) => {
    //   let copy = [...rows]
    //   copy.filter((item, index) => number !== index
    //   )
    //   setRows()
    // }

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
  )
}

export default MaterialTable;
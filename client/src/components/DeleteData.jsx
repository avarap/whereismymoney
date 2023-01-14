import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton} from '@mui/material';

function DeleteData(props) {

        const deleteData = dataId => {
            const filteredData = props.dataRow.filter(data => {
                return data.id !== props.dataId;
            });
    
            props.handleDeleteData(filteredData);
        };
        return (
    
            <IconButton onClick={deleteData}>
                <DeleteForeverIcon />
              </IconButton>
    
        );
    }
    
    export default DeleteData;
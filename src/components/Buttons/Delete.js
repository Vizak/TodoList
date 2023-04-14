import { Button } from '@mui/material';
import { React } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import remote from '../../services/remote';

const Delete = (context) =>
	<Button
		sx={ { display: 'inline-block' } }
		onClick={ () => remote.deleteTodos(context) }
		variant="filled"
	><DeleteOutlinedIcon/>
	</Button>;

export default Delete;

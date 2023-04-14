import { React } from 'react';
import { Button } from '@mui/material';
import remote from '../../services/remote';

const Edit = (context) =>
	<Button
		onClick={ () => remote.editTodos(context) }
		variant="contained"
	>Edit
	</Button>;

export default Edit;

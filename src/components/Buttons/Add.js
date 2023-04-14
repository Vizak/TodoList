import { React } from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';
import remote from '../../services/remote';

const Add = (context) =>
	<Button
		onClick={ () => remote.createTodos(context) }
		disabled={ TodoManager.hasInput(context) }
		variant="contained"
	>
		ADD
	</Button>;

export default Add;

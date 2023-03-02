import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../services/TodoManager';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			sx={ { display: 'inline-block' } }
			onClick={ () => setState({
				...state,
				todos: TodoManager.removeTodo(context),
			}) }
			variant="filled"
		><DeleteOutlinedIcon/>
		</Button>);
};

export default Delete;

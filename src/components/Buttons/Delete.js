import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../services/TodoManager';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				todos: TodoManager.removeObject(context),
			}) }
			variant="filled"
		><DeleteOutlinedIcon/>
		</Button>);
};

export default Delete;

import { Button } from '@mui/material';
import { React } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TaskManager from '../../services/TaskManager';

const DeleteTask = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				tasks: TaskManager.removeTask(context),
			}) }
			color="error"
			endIcon={ <DeleteOutlinedIcon/> }
		/>
	);
};

export default DeleteTask;

import { Button } from '@mui/material';
import { React } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TaskManager from '../../services/TaskManager';

const DeleteTask = (context) => {
	const { state, setState } = context;

	return (
		<Button
			className="align"
			onClick={ () => setState({
				...state,
				tasks: TaskManager.removeTask(context),
			}) }
			variant="contained"
			color="error"
		><DeleteOutlinedIcon/>
		</Button>);
};

export default DeleteTask;

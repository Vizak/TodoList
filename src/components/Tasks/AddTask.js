import { Button } from '@mui/material';
import { React } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TaskManager from '../../services/TaskManager';

const AddTask = (context) => {
	const { state, setState, data: task } = context;
	const { state: { todos }} = context;

	return (
		<Button
			style={ { left: '-48%' } }
			onClick={ () => setState({
				...state,
				todos: [...todos, task],
				tasks: TaskManager.removeTask(context),
			}) }
			color="primary"
			startIcon={ <AddOutlinedIcon/> }
		/>
	);
};

export default AddTask;

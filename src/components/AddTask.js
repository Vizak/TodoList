import { Button } from '@mui/material';
import { React } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AddTask = (context) => {
	const { state, setState, data: task } = context;
	const { state: { todos, tasks }} = context;

	return (
		<Button
			className="align"
			onClick={ () => setState({
				...state,
				todos: [...todos, task],
				tasks: tasks.filter((ele) => ele.id !== task.id),
			}) }
			color="error"
		><AddOutlinedIcon/>
		</Button>);
};

export default AddTask;

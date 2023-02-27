import { Button } from '@mui/material';
import { React } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const DeleteTask = (context) => {
	const { state, setState, data: task } = context;
	const { state: { tasks }} = context;

	return (
		<Button
			className="align"
			onClick={ () => setState({
				...state,
				tasks: tasks.filter((ele) => ele.id !== task.id),
			}) }
			color="error"
		><DeleteOutlinedIcon/>
		</Button>);
};

export default DeleteTask;

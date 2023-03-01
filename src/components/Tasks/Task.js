import { Box } from '@mui/material';
import { React } from 'react';

const Task = (context) => {
	const { data: tasks } = context;

	return (
		<Box className="taskText">
			{tasks.text}
		</Box>);
};

export default Task;

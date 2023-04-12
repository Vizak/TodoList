import { React } from 'react';
import { Box } from '@mui/material';
import AddTask from './AddTask';
import Task from './Task';
import DeleteTask from './DeleteTask';

const Tasks = (context) => {
	const { state: { tasks }} = context;

	return <Box className="taskBox">
		<label className="taskHeader">Task</label>
		<Box className="taskContainer">
			{tasks.map((task, key) => <Box key={ key } className="content">
				<AddTask { ...{ ...context, data: task } }/>
				<Task { ...{ ...context, data: task } }/>
				<DeleteTask { ...{ ...context, data: task } }/></Box>)}
		</Box>
	</Box>;
};

export default Tasks;

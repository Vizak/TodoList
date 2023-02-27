import { React } from 'react';
import { Box } from '@mui/material';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import DisplayTask from './DisplayTask';

const TaskLists = (context) => {
	const { state: { tasks }} = context;

	return <Box className="taskContainer">
		{tasks.map((task, key) => <Box key={ key } className="content">
			<DisplayTask { ...{ ...context, data: task } }/>
			<AddTask { ...{ ...context, data: task } }/>
			<DeleteTask { ...{ ...context, data: task } }/></Box>)}
	</Box>;
};

export default TaskLists;

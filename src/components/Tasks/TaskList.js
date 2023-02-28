import { React } from 'react';
import { Box } from '@mui/material';
import AddTask from './AddTask';
import DisplayTask from './DisplayTask';
import { peek } from '@laufire/utils/debug';
import DeleteTask from './DeleteTask';

const TaskLists = (context) => {
	const { state: { tasks }} = context;

	peek(tasks);
	return <Box className="taskContainer">
		{tasks.map((task, key) => <Box key={ key } className="content">
			<DisplayTask { ...{ ...context, data: task } }/>
			<AddTask { ...{ ...context, data: task } }/>
			<DeleteTask { ...{ ...context, data: task } }/></Box>)}
	</Box>;
};

export default TaskLists;

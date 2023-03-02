import { Box } from '@mui/material';
import { React } from 'react';
import Lists from './Lists';
import TaskPane from './TaskPane';

const Container = (context) =>
	<Box>
		<TaskPane { ...context }/>
		<Lists { ...context }/>
	</Box>;

export default Container;

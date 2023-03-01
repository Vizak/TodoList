import { Box } from '@mui/material';
import { React } from 'react';

const DisplayTask = (context) => {
	const { data: tasks } = context;

	return (
		<Box style={ { marginLeft: '10px', width: '33%' } }>
			{tasks.text}
		</Box>);
};

export default DisplayTask;

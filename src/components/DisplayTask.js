import { Box } from '@mui/material';
import { React } from 'react';

const DisplayTask = (context) => {
	const { data: tasks } = context;

	return (
		<Box style={ { marginTop: '10px' } }>
			{tasks.text}
		</Box>);
};

export default DisplayTask;

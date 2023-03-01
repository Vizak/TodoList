import { React } from 'react';
import { Box } from '@mui/material';
import Add from './Add';
import Edit from './Edit';

const ActionButton = (context) => {
	const { state: { editedTodo }, data: todo } = context;

	return <Box className="button">
		{
			editedTodo === null
				? <Add { ...{ ...context, data: todo } }/>
				: <Edit { ...{ ...context, data: todo } }/>
		}
	</Box>;
};

export default ActionButton;

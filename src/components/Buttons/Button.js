import { React } from 'react';
import { Box } from '@mui/material';
import Add from './Add';
import Edit from './Edit';

const Button = (context) => {
	const { state: { editedTodo }, data: todo } = context;

	return <Box>
		{
			editedTodo === null
				? <Add { ...{ ...context, data: todo } }/>
				: <Edit { ...{ ...context, data: todo } }/>
		}
	</Box>;
};

export default Button;

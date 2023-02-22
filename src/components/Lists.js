import { React } from 'react';
import { Box } from '@mui/material';
import { peek } from '@laufire/utils/debug';
import List from './List';

const Lists = (context) => {
	const { state: { todos }} = context;

	peek(todos);
	return todos.map((todo, key) =>

		<Box key={ key }>
			<List { ...{ ...context, data: todo } }/>
		</Box>);
};

export default Lists;

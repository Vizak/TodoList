import { React } from 'react';
import { Box } from '@mui/material';
import List from './List';
import TodoManager from '../services/TodoManager';

const Lists = (context) => {
	const { state: { filter }} = context;
	const filteredTodo = TodoManager.filters[filter](context);

	return filteredTodo.map((todo, key) =>

		<Box key={ key }>
			<List { ...{ ...context, data: todo } }/>
		</Box>);
};

export default Lists;

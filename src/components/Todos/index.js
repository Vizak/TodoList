import { Box } from '@mui/material';
import { React } from 'react';
import Container from './Container';
import TodoHeader from './TodoHeader';

const Todos = (context) =>
	<Box className="todoBox">
		<label className="header">Todo</label>
		<TodoHeader { ...context }/>
		<Container { ...context }/>
	</Box>;

export default Todos;

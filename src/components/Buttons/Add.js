import { React } from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const Add = (context) => {
	const { state, setState } = context;
	const { state: { todos }} = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				todos: [...todos, TodoManager.addTodo(context)],
				initialValue: '',
			}) }
			disabled={ TodoManager.hasInput(context) }
			variant="contained"
		>
			ADD
		</Button>);
};

export default Add;

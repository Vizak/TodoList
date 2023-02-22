import { React } from 'react';
import { Button } from '@mui/material';

const clear = (
	setState, state, todos
) =>
	<Button
		className="clear"
		onClick={ () => setState({
			...state,
			todos: todos.filter((todo) => todo.isCompleted !== true),
		}) }
		variant="contained"
		color="error"
		size="medium"
	> Clear All
	</Button>;

const ClearCompleted = (context) => {
	const { state, setState, state: { todos }} = context;

	const hasCompleted = todos.some((todo) => todo.isCompleted);

	return hasCompleted
		&& clear(
			setState, state, todos
		);
};

export default ClearCompleted;

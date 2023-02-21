import { React } from 'react';
import { Button } from '@mui/material';

const ClearCompleted = (context) => {
	const { state, setState, state: { todos }} = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				todos: todos.filter((todo) => todo.isCompleted !== true),
			}) }
			variant="contained"
			color="error"
			size="medium"
		> Clear All
		</Button>);
};

export default ClearCompleted;

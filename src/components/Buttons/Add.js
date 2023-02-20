import { React } from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const Add = (context) => {
	const { state, setState } = context;
	const { state: { initialValue, todos }} = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				todos: [...todos, { text: initialValue,
					id: TodoManager.getId(context) }],
				initialValue: '',
			}) }
			disabled={ TodoManager.toggleButton(context) }
			variant="outlined"
		>
			ADD
		</Button>);
};

export default Add;

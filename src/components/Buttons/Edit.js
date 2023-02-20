import { React } from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const Edit = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				todos: TodoManager.matchedId(context),
				editedTodo: null,
				initialValue: '',
			}) }

		>Edit
		</Button>);
};

export default Edit;

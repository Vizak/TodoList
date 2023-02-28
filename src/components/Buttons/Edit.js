import { React } from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const Edit = (context) => {
	const { state, setState } = context;

	return (
		<Button
			className="add"
			onClick={ () => setState({
				...state,
				todos: TodoManager.editTodo(context),
				editedTodo: null,
				initialValue: '',
			}) }

		>Edit
		</Button>);
};

export default Edit;

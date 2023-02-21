import { Checkbox } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';

const CheckBox = (context) => {
	const { state, setState, data: todo } = context;

	return (
		<Checkbox
			checked={ todo.isCompleted }
			onClick={ () => setState({
				...state,
				todos: TodoManager
					.toggleCheckBox({ ...{ ...context, data: todo }}),
			}) }
		/>);
};

export default CheckBox;

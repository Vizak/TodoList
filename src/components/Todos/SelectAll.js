import { React } from 'react';
import { Checkbox } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const checkBox = (
	context, setState, state
) =>

	<Checkbox
		class="checkbox"
		checked={ TodoManager.isChecked({ ...context }) }
		onClick={ ({ target: { checked }}) => setState({
			...state,
			todos: TodoManager
				.toggleAll({ ...context, checked }),
		}) }
		variant="contained"
		size="medium"
	/>;

const SelectAll = (context) => {
	const { state, setState, state: { todos }} = context;
	const isTicked = todos.some((todo) => todo.isCompleted);

	return isTicked
	&&	checkBox(
		context, setState, state
	)
	;
};

export default SelectAll;

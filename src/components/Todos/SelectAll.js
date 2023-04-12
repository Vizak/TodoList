import { React } from 'react';
import { Checkbox } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return (
		<Checkbox
			checked={ TodoManager.isChecked({ ...context }) }
			onClick={ ({ target: { checked }}) => setState({
				...state,
				todos: TodoManager.toggleAll({ ...context, checked }),
			}) }
			variant="contained"
			size="medium"
		/>);
};

export default SelectAll;

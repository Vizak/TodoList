import { React } from 'react';
import { CheckBox } from '@mui/icons-material';

const SelectAll = (context) => {
	const { state, setState, state: { todos }} = context;

	return (
		<CheckBox
			onClick={ () => setState({
				...state,
				todos: todos.filter((todo) => todo.isCompleted === true),
			}) }
			variant="contained"
			color="error"
			size="medium"
		> select All
		</CheckBox>);
};

export default SelectAll;

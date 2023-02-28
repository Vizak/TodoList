import { Button } from '@mui/material';
import { React } from 'react';

const TaskPane = (context) => {
	const { state, setState, config: { options }} = context;
	const { todos } = state;

	return todos.length && options.map((option, key) =>
		<Button
			key={ key }
			className="tasks"
			onClick={ () => setState({
				...state,
				filter: option,
			}) }
			variant="contained"
			color="success"
		>{option}
		</Button>);
};

export default TaskPane;

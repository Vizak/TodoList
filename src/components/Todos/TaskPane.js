import { Button } from '@mui/material';
import { React } from 'react';

const TaskPane = (context) => {
	const { state, setState, config: { options }} = context;
	const { todos } = state;
	const hasTodos = todos.length !== 0;

	return hasTodos && options.map((option, key) =>
		<span
			key={ key }
			className="taskPane"
		>
			<Button
				onClick={ () => setState({
					...state,
					filter: option,
				}) }
				color={ option === 'all' ? 'primary' : 'secondary' }
			>{option}
			</Button>
		</span>);
};

export default TaskPane;

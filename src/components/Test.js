import { React } from 'react';
import ClearCompleted from './Buttons/ClearCompleted';

const ToggleButton = (context) => {
	const { state: { todos }} = context;
	const data = todos.some((todo) => todo.isCompleted);

	return data
		? <ClearCompleted { ...context }/>
		: '';
};

export default ToggleButton;

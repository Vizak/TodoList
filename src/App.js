import { React, useState } from 'react';
import './App.scss';
import TaskLists from './components/Tasks/TaskList';
import Todos from './components/Todo/Todos';
import TaskManager from './services/TaskManager';

const todoState = (context) => ({
	initialValue: '',
	todos: [],
	editedTodo: null,
	filter: 'all',
	tasks: TaskManager.getTasks(context),
});

const App = (context) => {
	const [state, setState] = useState(todoState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Todos { ...extendedContext }/>
			<TaskLists { ...extendedContext }/>
		</div>
	);
};

export default App;

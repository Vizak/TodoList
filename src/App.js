import { peek } from '@laufire/utils/debug';
import { React, useState } from 'react';
import './App.scss';
import TaskLists from './components/Tasks/TaskList';
import Todos from './components/Todo/Todos';
import TaskManager from './services/TaskManager';

const todoState = {
	initialValue: '',
	todos: [],
	editedTodo: null,
	filter: 'all',
	tasks: [],
};

const App = (context) => {
	const { once } = context;
	const [state, setState] = useState(todoState);
	const extendedContext = { ...context, state, setState };

	peek(extendedContext);
	once(() => TaskManager.autoTaskGenerator(extendedContext));

	return (
		<div className="App">
			<Todos { ...extendedContext }/>
			<TaskLists { ...extendedContext }/>
		</div>
	);
};

export default App;

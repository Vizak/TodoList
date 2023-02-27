import { React, useState } from 'react';
import './App.scss';
import Button from './components/Buttons/Button';
import Lists from './components/Lists';
import Input from './components/Input';
import ClearCompleted from './components/Buttons/ClearCompleted';
import SelectAll from './components/SelectAll';
import TaskPane from './components/TaskPane';
import TodoManager from './services/TodoManager';
import TaskLists from './components/TaskLists';

const todoState = (context) => ({
	initialValue: '',
	todos: [],
	editedTodo: null,
	filter: 'all',
	tasks: TodoManager.getTasks(context),
});

const App = (context) => {
	const [state, setState] = useState(todoState(context));

	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Input { ...extendedContext }/>
			<Button { ...extendedContext }/>
			<TaskPane { ...extendedContext }/>
			<SelectAll { ...extendedContext }/>
			<Lists { ...extendedContext }/>
			<ClearCompleted { ...extendedContext }/>
			<TaskLists { ...extendedContext }/>
		</div>
	);
};

export default App;

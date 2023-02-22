import { React, useState } from 'react';
import './App.scss';
import Button from './components/Buttons/Button';
import Lists from './components/Lists';
import Input from './components/Input';
import ClearCompleted from './components/Buttons/ClearCompleted';
import SelectAll from './components/SelectAll';

const todoState = {
	initialValue: '',
	todos: [],
	editedTodo: null,
};

const App = (context) => {
	const [state, setState] = useState(todoState);

	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Input { ...extendedContext }/>
			<Button { ...extendedContext }/>
			<SelectAll { ...extendedContext }/>
			<Lists { ...extendedContext }/>
			<ClearCompleted { ...extendedContext }/>
		</div>
	);
};

export default App;

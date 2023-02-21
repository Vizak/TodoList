import { React, useState } from 'react';
import './App.scss';
import Button from './components/Buttons/Button';
import Container from './components/Container';
import Input from './components/Input';
import ToggleButton from './components/Test';

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
			<Container { ...extendedContext }/>
			<ToggleButton { ...extendedContext }/>
		</div>
	);
};

export default App;

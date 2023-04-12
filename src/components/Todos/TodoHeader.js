import { Box } from '@mui/material';
import { React } from 'react';
import ActionButton from '../Buttons/ActionButton';
import ClearCompleted from '../Buttons/ClearCompleted';
import Input from './Input';
import SelectAll from './SelectAll';

const TodoHeader = (context) =>
	<Box className="container">
		<SelectAll { ...context }/>
		<Input { ...context }/>
		<ActionButton { ...context }/>
		<ClearCompleted { ...context }/>
	</Box>;

export default TodoHeader;

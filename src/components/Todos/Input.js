import { React } from 'react';
import { TextField } from '@mui/material';

const Input = (context) => {
	const { state, setState } = context;
	const { state: { initialValue }} = context;

	return (
		<TextField
			className="inputBox"
			type="text"
			onChange={ ({ target: { value }}) => setState({
				...state,
				initialValue: value,
			}) }
			placeholder={ initialValue }
			value={ initialValue }
			variant="standard"
			color="success"
			size="small"
		/>);
};

export default Input;

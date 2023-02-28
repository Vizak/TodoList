import { React } from 'react';
import { Box, TextField } from '@mui/material';

const Input = (context) => {
	const { state, setState } = context;
	const { state: { initialValue }} = context;

	return <Box>
		<TextField
			onChange={ ({ target: { value }}) => setState({
				...state,
				initialValue: value,
			}) }
			placeholder={ initialValue }
			value={ initialValue }
			variant="outlined"
			size="small"
		/>
	</Box>;
};

export default Input;

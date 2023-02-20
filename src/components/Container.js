import { React } from 'react';
import { Box, Checkbox } from '@mui/material';
import Delete from './Buttons/Delete';
import Text from './Text';

const Container = (context) => {
	const { state: { todos }} = context;

	return todos.map((todo, key) =>

		<Box key={ key } className="container">
			<Checkbox/>
			<Text { ...{ ...context, data: todo } }/>
			<Delete { ...{ ...context, data: todo } }/>
		</Box>);
};

export default Container;

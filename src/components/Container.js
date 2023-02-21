import { React } from 'react';
import { Box } from '@mui/material';
import Delete from './Buttons/Delete';
import Text from './Text';
import { peek } from '@laufire/utils/debug';
import CheckBox from './CheckBox';

const Container = (context) => {
	const { state: { todos }} = context;

	peek(todos);
	return todos.map((todo, key) =>

		<Box key={ key } className="container">
			<CheckBox { ...{ ...context, data: todo } }/>
			<Text { ...{ ...context, data: todo } }/>
			<Delete { ...{ ...context, data: todo } }/>
		</Box>);
};

export default Container;

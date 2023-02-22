import { Box } from '@mui/material';
import { React } from 'react';
import Delete from './Buttons/Delete';
import CheckBox from './CheckBox';
import Text from './Text';

const List = (context) => {
	const { data: todo } = context;

	return <Box className="container">
		<CheckBox { ...{ ...context, data: todo } }/>
		<Text { ...{ ...context, data: todo } }/>
		<Delete { ...{ ...context, data: todo } }/>
	</Box>;
};

export default List;

import { Box } from '@mui/material';
import { React } from 'react';
import Lists from './Lists';
import FilterButton from './FilterButton';

const Container = (context) =>
	<Box>
		<FilterButton { ...context }/>
		<Lists { ...context }/>
	</Box>;

export default Container;

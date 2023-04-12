import { peek } from '@laufire/utils/debug';
import axios from 'axios';

const remote = {
	fetchTodos: async (context) => {
		const { state, setState, config: { url }} = context;

		const result = await axios.get(`${ url }todo`);
		const end = () => setState({
			...state,
			todos: peek(result.data),
		});

		return end();
	},
};

export default remote;

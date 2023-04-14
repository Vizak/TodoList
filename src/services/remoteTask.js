import axios from 'axios';
import TaskManager from './TaskManager';

const remoteTask = {

	fetchTasks: async (context) => {
		const { setState, config: { url }} = context;

		const result = await axios.get(`${ url }task`);

		setState((state) => ({
			...state,
			tasks: result.data,
		}));
	},

	deleteTodos: async (context) => {
		const { state, setState, config: { url }, data: todo } = context;

		await axios.delete(`${ url }todo/${ todo.id }`);
		setState({
			...state,
			todos: TaskManager.removeTodo(context),
		});
	},

};

export default remoteTask;

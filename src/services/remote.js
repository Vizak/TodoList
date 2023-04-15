/* eslint-disable no-magic-numbers */
import axios from 'axios';
import TodoManager from './TodoManager';

const remote = {
	fetchTodos: async (context) => {
		const { state, setState, config: { url }} = context;

		const result = await axios.get(`${ url }todo`);

		setState({
			...state,
			checkStatus: result.status,
			todos: result.data,
		});
	},

	deleteTodos: async (context) => {
		const { state, setState, config: { url }, data: todo } = context;

		await axios.delete(`${ url }todo/${ todo.id }`);

		setState({
			...state,
			todos: TodoManager.removeTodo(context),
		});
	},

	createTodos: async (context) => {
		const { state, setState, config: { url },
			state: { todos, initialValue }} = context;

		await axios.post(`${ url }todo`, { text: initialValue, completed: false });

		setState({
			...state,
			todos: [...todos, TodoManager.addTodo(context)],
			initialValue: '',
		});
	},

	editTodos: async (context) => {
		const { setState, config: { url },
			state: { editedTodo, initialValue, checkStatus }} = context;

		const code = await axios.put(`${ url }todo/${ editedTodo.id }`, { text: initialValue });

		// eslint-disable-next-line no-console
		console.log(checkStatus);

		setState((state) => ({
			...state,
			todos: TodoManager.editTodo(context),
			editedTodo: null,
			initialValue: '',
		}));

		const a = checkStatus >= 200 ? code : 'status error';

		return a;
	},

};

export default remote;

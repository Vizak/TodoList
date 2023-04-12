import { rndString } from '@laufire/utils/random';

const hasInput = ({ state: { initialValue }}) => initialValue === '';

const addTodo = (context) => {
	const { state: { initialValue }, config: { maxLen }} = context;

	return {
		id: rndString(maxLen),
		text: initialValue,
		completed: false,
	};
};

const removeTodo = ({ state: { todos }, data: todo }) =>
	todos.filter(({ id }) => id !== todo.id);

const editTodo = ({ state: { initialValue, editedTodo, todos }}) =>
	todos.map((todo) => (todo.id === editedTodo.id
		? { ...todo, text: initialValue }
		: todo));

const toggleCheckBox = (context) => {
	const { state: { todos }, data } = context;

	return todos.map((todo) => {
		const { completed } = todo;

		return todo.id === data.id
			? { ...todo, completed: !completed }
			: todo;
	});
};

const toggleAll = (context) => {
	const { state: { todos }, checked } = context;

	return todos.map((todo) => ({ ...todo, completed: checked }));
};

const isChecked = (context) => {
	const { state: { todos }} = context;

	return todos.length && todos.every((todo) => todo.completed);
};

const filters = {
	all: ({ state: { todos }}) => todos,
	active: ({ state: { todos }}) => todos.filter((todo) => !todo.completed),
	completed: ({ state: { todos }}) =>
		todos.filter((todo) => todo.completed),
};

const TodoManager = {
	hasInput,
	addTodo,
	removeTodo,
	editTodo,
	toggleCheckBox,
	toggleAll,
	isChecked,
	filters,
};

export default TodoManager;

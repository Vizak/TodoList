import { rndString } from '@laufire/utils/random';

const hasInput = ({ state: { initialValue }}) => initialValue === '';

const addTodo = (context) => {
	const { state: { initialValue }, config: { maxLen }} = context;

	return {
		id: rndString(maxLen),
		text: initialValue,
		isCompleted: false,
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
		const { isCompleted } = todo;

		return todo.id === data.id
			? { ...todo, isCompleted: !isCompleted }
			: todo;
	});
};

const toggleAll = (context) => {
	const { state: { todos }, checked } = context;

	return todos.map((todo) => ({ ...todo, isCompleted: checked }));
};

const isChecked = (context) => {
	const { state: { todos }} = context;

	return todos.length && todos.every((todo) => todo.isCompleted);
};

const TodoManager = {
	hasInput,
	addTodo,
	removeTodo,
	editTodo,
	toggleCheckBox,
	toggleAll,
	isChecked,
};

export default TodoManager;

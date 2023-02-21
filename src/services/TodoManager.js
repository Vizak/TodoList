import { rndString } from '@laufire/utils/random';

const toggleButton = ({ state: { initialValue }}) => initialValue === '';

const getId = (context) => {
	const { state: { initialValue }, config: { maxLen }} = context;

	return {
		id: rndString(maxLen),
		text: initialValue,
		isCompleted: false,
	};
};

const removeObject = ({ state: { todos }, data: todo }) =>
	todos.filter(({ id }) => id !== todo.id);

const matchedId = ({ state: { initialValue, editedTodo, todos }}) =>
	todos.map((todo) => (todo.id === editedTodo.id
		? { ...todo, text: initialValue }
		: todo));

const toggleCheckBox = (context) => {
	const { state: { todos }, data: todo } = context;

	return todos.map((data) => {
		const { isCompleted } = data;

		return data.id === todo.id
			? { ...data, isCompleted: !isCompleted }
			: data;
	});
};

const TodoManager = {
	toggleButton,
	getId,
	removeObject,
	matchedId,
	toggleCheckBox,
};

export default TodoManager;

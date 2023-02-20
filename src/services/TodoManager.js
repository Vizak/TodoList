import { rndString } from '@laufire/utils/random';

const toggleButton = ({ state: { initialValue }}) => initialValue === '';

const getId = ({ config: { maxLen }}) => rndString(maxLen);

const removeObject = ({ state: { todos }, data: todo }) =>
	todos.filter(({ id }) => id !== todo.id);

const matchedId = ({ state: { initialValue, editedTodo, todos }}) =>
	todos.map((todo) => (todo.id === editedTodo.id
		? { ...todo, text: initialValue }
		: todo));

const TodoManager = {
	toggleButton,
	getId,
	removeObject,
	matchedId,
};

export default TodoManager;

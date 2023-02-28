import { rndString } from '@laufire/utils/random';

const getTasks = ({ config: { taskList, maxLen }}) =>
	taskList.map((task) => ({ text: task, id: rndString(maxLen) }));

const removeTask = (context) => {
	const { state: { tasks }, data: task } = context;

	return tasks.filter((ele) => ele.id !== task.id);
};

const TaskManager = {
	getTasks,
	removeTask,
};

export default TaskManager;

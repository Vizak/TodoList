import { rndString, rndValue } from '@laufire/utils/random';

// const getTasks = (context) => {
// 	const { config: { taskList }} = context;

// 	return taskList.map((task) => taskName({ ...{ ...context, data: task }}));
// };

const taskName = ({ config: { maxLen }, data: task }) =>
	({ text: task, id: rndString(maxLen), isCompleted: false });

const removeTask = (context) => {
	const { state: { tasks }, data: task } = context;

	return tasks.filter((ele) => ele.id !== task.id);
};

const autoTaskGenerator = (context) => {
	const { setState, config: { delayTime, maxLen, taskList }} = context;

	return setInterval(() => setState((newState) => ({
		...newState,
		tasks: newState.tasks.length < maxLen
			? [...newState.tasks,
				taskName({ ...context, data: rndValue(taskList) })]
			: newState.tasks,
	})), delayTime);
};

const TaskManager = {
	removeTask,
	autoTaskGenerator,
};

export default TaskManager;

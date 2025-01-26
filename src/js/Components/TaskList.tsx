import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
	tasks: { text: string; completed: boolean }[];
	toggleTaskCompletion: (index: number) => void;
	handleEditClick: (index: number, text: string) => void;
	editIndex: number | null;
	editText: string;
	setEditText: React.Dispatch<React.SetStateAction<string>>;
	handleSaveEdit: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
	tasks,
	toggleTaskCompletion,
	handleEditClick,
	editIndex,
	editText,
	setEditText,
	handleSaveEdit,
}) => {
	return (
		<div className='list'>
			{tasks.map((task, index) => (
				<TaskItem
					key={index}
					task={task}
					index={index}
					toggleTaskCompletion={toggleTaskCompletion}
					handleEditClick={handleEditClick}
					editIndex={editIndex}
					editText={editText}
					setEditText={setEditText}
					handleSaveEdit={handleSaveEdit}
				/>
			))}
		</div>
	);
};

export default TaskList;

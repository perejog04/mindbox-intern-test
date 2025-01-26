import React from 'react';

interface TaskItemProps {
	task: { text: string; completed: boolean };
	index: number;
	toggleTaskCompletion: (index: number) => void;
	handleEditClick: (index: number, text: string) => void;
	editIndex: number | null;
	editText: string;
	setEditText: React.Dispatch<React.SetStateAction<string>>;
	handleSaveEdit: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
	task,
	index,
	toggleTaskCompletion,
	handleEditClick,
	editIndex,
	editText,
	setEditText,
	handleSaveEdit,
}) => {
	return (
		<>
			<div className='list-item'>
				<div
					className={`custom-checkbox ${task.completed ? 'checked' : ''}`}
					onClick={() => toggleTaskCompletion(index)}
				></div>
				{editIndex === index ? (
					<input
						type='text'
						value={editText}
						onChange={event => setEditText(event.target.value)}
						onBlur={handleSaveEdit}
						onKeyDown={event => {
							if (event.key === 'Enter') {
								handleSaveEdit();
							}
						}}
						autoFocus
					/>
				) : (
					<span
						className={`${task.completed ? 'task-name-checked' : 'task-name'}`}
						onClick={() => handleEditClick(index, task.text)}
					>
						{task.text}
					</span>
				)}
			</div>
			<div className='separator'></div>
		</>
	);
};

export default TaskItem;

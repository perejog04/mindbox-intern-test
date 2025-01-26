import React from 'react';

interface TaskInputProps {
	task: string;
	setTask: React.Dispatch<React.SetStateAction<string>>;
	handleEnterDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({
	task,
	setTask,
	handleEnterDown,
}) => {
	return (
		<div className='search-inner'>
			<form onSubmit={event => event.preventDefault()}>
				<input
					id='search'
					className='search-contact'
					type='text'
					name='search'
					autoComplete='off'
					placeholder='What need to be done?'
					value={task}
					onChange={event => setTask(event.target.value)}
					onKeyDown={handleEnterDown}
				/>
			</form>
		</div>
	);
};

export default TaskInput;

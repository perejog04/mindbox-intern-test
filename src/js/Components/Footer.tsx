import React from 'react';
import DisplayButtons from './DisplayButtons';

interface FooterProps {
	tasks: { text: string; completed: boolean }[];
	setTasksArray: React.Dispatch<
		React.SetStateAction<{ text: string; completed: boolean }[]>
	>;
	filter: 'all' | 'active' | 'completed';
	setFilter: React.Dispatch<
		React.SetStateAction<'all' | 'active' | 'completed'>
	>;
}

const Footer: React.FC<FooterProps> = ({
	tasks,
	setTasksArray,
	filter,
	setFilter,
}) => {
	return (
		<div className='list-footer'>
			<div className='list-footer-counter'>
				{`${tasks.filter(task => !task.completed).length} items left`}
			</div>
			<DisplayButtons filter={filter} setFilter={setFilter} />
			<div className='clear'>
				<button
					onClick={() =>
						setTasksArray(prevTasks =>
							prevTasks.filter(task => !task.completed)
						)
					}
				>
					Clear completed
				</button>
			</div>
		</div>
	);
};

export default Footer;

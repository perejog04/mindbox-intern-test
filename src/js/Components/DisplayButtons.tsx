import React from 'react';

interface DisplayButtonsProps {
	filter: 'all' | 'active' | 'completed';
	setFilter: React.Dispatch<
		React.SetStateAction<'all' | 'active' | 'completed'>
	>;
}

const DisplayButtons: React.FC<DisplayButtonsProps> = ({
	filter,
	setFilter,
}) => {
	return (
		<div className='selector'>
			<button
				className={filter === 'all' ? 'active-button' : ''}
				onClick={() => setFilter('all')}
			>
				All
			</button>
			<button
				className={filter === 'active' ? 'active-button' : ''}
				onClick={() => setFilter('active')}
			>
				Active
			</button>
			<button
				className={filter === 'completed' ? 'active-button' : ''}
				onClick={() => setFilter('completed')}
			>
				Completed
			</button>
		</div>
	);
};

export default DisplayButtons;

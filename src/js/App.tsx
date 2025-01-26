import { useState } from 'react';
import '../style/style.scss';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import Footer from './Components/Footer';

function App() {
	const [task, setTask] = useState('');
	const [tasksArray, setTasksArray] = useState<
		{ text: string; completed: boolean }[]
	>([]);
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
	const [editIndex, setEditIndex] = useState<number | null>(null);
	const [editText, setEditText] = useState('');

	const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && task.trim() !== '') {
			setTasksArray(prevTasks => [
				...prevTasks,
				{ text: task, completed: false },
			]);
			setTask('');
		}
	};

	const toggleTaskCompletion = (index: number) => {
		setTasksArray(prevTasks =>
			prevTasks.map((task, i) =>
				i === index ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const handleEditClick = (index: number, text: string) => {
		setEditIndex(index);
		setEditText(text);
	};

	const handleSaveEdit = () => {
		if (editIndex !== null) {
			setTasksArray(prevTasks =>
				prevTasks.map((task, i) =>
					i === editIndex ? { ...task, text: editText } : task
				)
			);
			setEditIndex(null);
			setEditText('');
		}
	};

	const filteredTasks = tasksArray.filter(task => {
		if (filter === 'active') return !task.completed;
		if (filter === 'completed') return task.completed;
		return true;
	});

	return (
		<>
			<div className='page'>
				<div className='main'>
					<div className='container'>
						<h1 className='name'>todos</h1>
						<div className='content'>
							<div className='list'>
								<TaskInput
									task={task}
									setTask={setTask}
									handleEnterDown={handleEnterDown}
								/>
								<hr />
								<TaskList
									tasks={filteredTasks}
									toggleTaskCompletion={toggleTaskCompletion}
									handleEditClick={handleEditClick}
									editIndex={editIndex}
									editText={editText}
									setEditText={setEditText}
									handleSaveEdit={handleSaveEdit}
								/>
								<Footer
									tasks={tasksArray}
									setTasksArray={setTasksArray}
									filter={filter}
									setFilter={setFilter}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

import { useState } from 'react'
import { useCheckList } from '../contexts/CheckListContext'
import moment from 'moment'

export const ChecklistInput = () => {
	const { addToList, clearList } = useCheckList()

	const [newTask, setNewTask] = useState({
		id: Date.now(),
		title: '',
		complete: false,
		date: moment().calendar(),
	})

	const handleChange = (event) => {
		setNewTask({
			...newTask,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (newTask.title) {
			addToList(newTask)
			setNewTask({
				id: Date.now(),
				title: "",
				complete: false,
				date: moment().calendar(),
			})
		} else {
			alert('did you add something?')
		}
	}

	return (
		<>
			<div>
				<h2>Today it's {moment().format('dddd')}!</h2>
			</div>
			<form className="input-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					id="input-form"
					placeholder="add things here"
					value={newTask.title}
					onChange={handleChange}
				/>

				<button type="submit">Add!</button>
				<button onClick={clearList}>Clear All</button>
			</form>
		</>
	)
}

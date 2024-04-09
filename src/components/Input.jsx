import { useState } from 'react'
import { useCheckList } from '../contexts/CheckListContext'

//funktionell komponent som ska få sin info via global state, men först skapar jag lokal state för att fatta.
export const Input = () => {
	const { bringItems, someItem, clearList } = useCheckList()
	const [onSubmit, setOnSubmit] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<>
			<ul>
				{bringItems.map((item) => (
					<li key={item.id}></li>
				))}
			</ul>
			<form onSubmit={handleSubmit}>
				<div>
					<input type="text"></input>
					<button onClick={(clearList) => null}>Check!</button>
				</div>
			</form>
		</>
	)
}

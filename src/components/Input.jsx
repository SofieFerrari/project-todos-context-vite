import { useState } from "react"
import { useCheckList } from "../contexts/CheckListContext"


//funktionell komponent som ska få sin info via global state, men först skapar jag lokal state för att fatta.
export const Input = () => {
	const { itemsData, clearList } = useCheckList()

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<>
			<ul>
				{itemsData.map((item) => (
					<li key={item.id}></li>
				))}
			</ul>
			{/* <form onSubmit={handleSubmit}>
				<div>
					<input type="text"></input>
					<button onClick={() => null}>Lägg till!</button>
				</div>
			</form> */}
		</>
	)
}

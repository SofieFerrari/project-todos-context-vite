import { useState } from 'react'
import { useCheckList } from '../contexts/CheckListContext'
import { useContext } from 'react'

const someItem = [
  { id: 1, thing: "vantar" },
  { id: 2, thing: "mössa" },
  { id: 3, thing: "stövlar" },

]

export const CheckList = () => {
  const {addToList} = useCheckList()
	return (
		<>
			<div>
				<h2>Det här ska med idag</h2>
				<ul></ul>
        <button onClick={()=> addToList(someItem)}>Ta bort allt</button>
			</div>
		</>
	)
}

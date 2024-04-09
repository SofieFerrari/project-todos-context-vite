import { useCheckList } from '../contexts/CheckListContext'


const someItem = [
  { id: 1, thing: "vantar" },
  { id: 2, thing: "mössa" },
  { id: 3, thing: "stövlar" },

]

export const CheckList = () => {
  const {addToList, clearList} = useCheckList()
	return (
		<>
			<div>
				<h2>Det här ska med idag</h2>
        <input type='checkbox'></input>
        <button onClick={(clearList)}>Ta bort allt</button>
			</div>
		</>
	)
}

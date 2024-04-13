import { useCheckList } from '../contexts/CheckListContext'

export const CheckButton = ({ item, index }) => {
	const { itemsData, checkedItem } = useCheckList()

	// Function to handle checkbox change
	const handleChange = () => {
		checkedItem(itemsData.id, index)
		console.log('Checked item with ID:', item.id)
	}

	return (
		<form>
			<input
				className="check-button"
				type="checkbox"
				checked={checkedItem} // Assuming 'complete' is a boolean indicating if the item is checked
				onChange={handleChange}
				id={`checkbox-${index}`}
				name="item-check"
			/>
		</form>
	)
}

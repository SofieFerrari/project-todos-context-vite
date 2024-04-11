import { useCheckList } from "../contexts/CheckListContext"

export const Header = () => {
	const { itemsData } = useCheckList
	return (
		<header>
			<h1>Bring to and from daycare</h1>
			<p>things: {itemsData ? itemsData.length : '0'}</p>
		</header>
	)
}

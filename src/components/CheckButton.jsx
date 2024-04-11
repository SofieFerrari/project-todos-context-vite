import { useRef } from "react"
import { useCheckList } from "../contexts/CheckListContext"

export const CheckButton = ({ item, index }) => {
  const { itemsData, checkedItem } = useCheckList
  const itemsRef = useRef()

  const clicked = () => {
    itemsRef.current.classList.toggle("complete")

    checkedItem(item.id, index)
    console.log("checkbutton", item.id)
  }

  return (
    <form>
      <input 
      type="checkbox" 
      ref={itemsRef}
      // className={item.complete ? "complete" : ""}
      // checked={item.complete}
      id={index}
      name="item-check"
      onChange={clicked}
      />
    </form>
  )
}
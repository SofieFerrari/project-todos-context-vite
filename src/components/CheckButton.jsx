import { useRef } from "react"
import { useCheckList } from "../contexts/CheckListContext"

export const CheckButton = ({ item, index }) => {
  const { itemsData, checkedItem } = useCheckList ()
  const itemsRef = useRef()

  const clicked = () => {
    itemsRef.current.classList.toggle("complete")

    checkedItem(itemsData.id, index)
    console.log("checkbutton", itemsData.id)
  }

  return (
    <form>
      <input 
      className="check-button"
      checked=""
      type="checkbox" 
      ref={itemsRef}
      id={index}
      name="item-check"
      onChange={clicked}
      />
    </form>
  )
}
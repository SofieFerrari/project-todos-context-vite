import { useCheckList } from "../contexts/CheckListContext"
import { ListRender } from "../components/ListRender"

export const ItemList = () => {
  const { itemsData, addToList, checkedItem } = useCheckList()

  const incompleted = itemsData.filter((item) => item.checked === false)
  const completed = itemsData.filter((item) => item.checked === true)

  return (
    <div>
      {incompleted.length != 0 ? (
        <div className="listan">
          <p>står det ngt här?</p>
          <ListRender array={incompleted} />
        </div>
      ) : (
        <div className="klar">
          <p>You have everything!</p>
        </div>
      )}

      {completed.length != 0 ? (
        <div className="listan">
          <p>står det något här med?</p>
          <ListRender array={completed} />
          </div>
      ) : null}
    </div>

  )
}
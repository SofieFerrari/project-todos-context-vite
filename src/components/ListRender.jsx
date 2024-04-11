import { CheckButton } from "./CheckButton"

export const ListRender = ({ array }) => {
  console.log("listrender array", array)

  return (
    <div>
      {array.map((item, index) => (
        <div className="item-container" key={item.id}>
          <div className={item.checked ? "item checked" : "item"}>
            <CheckButton item={item} itemId={itemId} />

          </div>
        </div>
      ))}
    </div>
  )

}
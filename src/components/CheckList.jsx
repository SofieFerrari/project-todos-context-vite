import { useState } from "react"


export const CheckList = () => {
const bringItems = []
const [checked, setChecked] = useState (false)

return (
	<>
		<div>
      <h2>Det här ska med idag</h2>
      <ul>{bringItems}</ul>
    </div>
	</>
)

}
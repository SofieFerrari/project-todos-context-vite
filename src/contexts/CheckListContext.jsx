import { createContext, useContext, useState } from "react"

const CheckListContext= createContext()

export const CheckListProvider = ({ children }) => {
  const [bringItems, setBringItems] = useState([])

  //chatgpts kod
  const addToList = (someItem) => {
  setBringItems(currentItems => [...currentItems, someItem])

  // const addToList = (someItem) => {
  //   setBringItems(...bringItems, someItem)

  }

    const clearList = () => {
			setBringItems([])
		}

  return (
    <CheckListContext.Provider value={{addToList, bringItems, clearList}}>
      {children}
    </CheckListContext.Provider>
  )
}

//här har jag gjort en hook som gör att jag kan komma åt global state
export const useCheckList = () => {
  return useContext(CheckListContext)
}
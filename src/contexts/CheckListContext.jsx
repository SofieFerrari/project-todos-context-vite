import { createContext, useContext, useState } from "react"

const CheckListContext= createContext()

export const CheckListProvider = ({children}) => {
  const [bringItems, setBringItems] = useState([])

  const addToList = (someItem) => {
    setBringItems(...bringItems, someItem)
  }

  return (
    <CheckListContext.Provider value={addToList}>
      {children}
    </CheckListContext.Provider>
  )
}

//här har jag gjort en hook som gör att jag kan komma åt global state
export const useCheckList = () => {
  return useContext(CheckListContext)
}
import { createContext, useContext, useState } from "react"

const CheckListContext= createContext()

export const CheckListProvider = ({ children }) => {
  const [itemsData, setItemsData] = useState([])

  //chatgpts kod, vad ska jag ha som argument? är det text.value eller ngt sånt? ta bort someItem från array?
  const addToList = (newItem) => {
  setItemsData(prevItems => [...prevItems, newItem])

  }

    const clearList = () => {
			setItemsData([])
		}

  return (
    <CheckListContext.Provider value={{addToList, itemsData, clearList}}>
      {children}
    </CheckListContext.Provider>
  )
}

//här har jag gjort en hook som gör att jag kan komma åt global state
export const useCheckList = () => {
  return useContext(CheckListContext)
}
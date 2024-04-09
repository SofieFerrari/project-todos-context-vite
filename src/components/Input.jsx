import { useState } from "react"


//funktionell komponent som ska få sin info via global state, men först skapar jag lokal state för att fatta.
export const Input = () => {
  const [onSubmit, setOnSubmit] = useState ("")

  const handleSubmit = (event) => {
    event.preventDefault()
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
      <input type="text">
      </input>
      <button onClick={() => null}>
        Check!
      </button>
      </div>
    </form>
    </>
  )

}
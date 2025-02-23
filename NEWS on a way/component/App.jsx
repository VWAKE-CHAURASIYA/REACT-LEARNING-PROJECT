import { useState } from "react"
import Navbar from "./component/Navbar"
import Newsboard from "./component/Newsboard"


const App = () => {
  // now for choosing catrogies here we use usestate 
  const [category, setCategory]= useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App

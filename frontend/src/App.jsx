import { useState } from 'react'
import Header from './Header/header'
import Content from './Content/content'
import Bot from './Bot/bot'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:'flex', flexDirection:'color'}}>
      <Header/>
      <Content/>
      <Bot/>
    </div>
  )
}

export default App

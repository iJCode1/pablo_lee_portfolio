import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Projects/>
    </div>
  )
}

export default App

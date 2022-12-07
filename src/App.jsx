import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Projects/>
      <Experience />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Projects/>
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

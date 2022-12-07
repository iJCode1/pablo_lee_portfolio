import { useState } from 'react'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import styled from 'styled-components'

const AppStyled = styled.div`
  ::before{
    content: '';
    position: ${props => props.navState ? "initial" : "fixed"};
    inset-block: ${props => props.navState ? "none" : "0"};
    inset-inline: ${props => props.navState ? "none" : "0"};
    background-color: ${props => props.navState ? "none" : "var(--background-2)"};
    z-index: 3;
  }

  @media screen and (min-width: 768px){
    ::before{
      background-color: initial;
    }
  }
`

function App() {
  const [navState, setNavState] = useState(true)

  return (
    <AppStyled navState={navState}>
      <Navbar navState={navState} setNavState={setNavState}/>
      <Header />
      <Projects/>
      <Experience />
      <Contact />
      <Footer />
    </AppStyled>
  )
}

export default App

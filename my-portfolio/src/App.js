import React, { Fragment } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Skills from './components/Skills'

function App() {
  return (
   <Fragment>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Contacts/>
   </Fragment>
  )
}

export default App
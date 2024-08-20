import { useState } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import TechStack from './components/TechStack'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-2 md:p-16 bg-black min-h-screen'>
      <Header/>
      <Intro/>
      <TechStack/>
      <Projects/>
     
    </div>
  )
}

export default App

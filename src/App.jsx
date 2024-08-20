import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contacts';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-2 md:p-16 bg-black min-h-screen'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

    </Routes>
      
    </div>
  )
}

export default App

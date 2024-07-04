import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects/Projects'
import POne from './components/Projects/POne/POne'
import PTwo from './components/Projects/PTwo/PTwo'
import PThree from './components/Projects/PThree/PThree'
import FurnitureProjects from './components/Projects/FurnitureProjects/FurnitureProjects'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Resume' element={<Resume />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='POne' element={<POne />} />
          <Route path='PTwo' element={<PTwo />} />
          <Route path='PThree' element={<PThree />} />
          <Route path='FurnitureProjects' element={<FurnitureProjects />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App

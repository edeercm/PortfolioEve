import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'
import ProjectOne from './components/Projects/ProjectOne/ProjectOne'
import ProjectTwo from './components/Projects/ProjectTwo/ProjectTwo'
import ProjectThree from './components/Projects/ProjectThree/ProjectThree'
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
          <Route path='ProjectOne' element={<ProjectOne />} />
          <Route path='ProjectTwo' element={<ProjectTwo />} />
          <Route path='ProjectThree' element={<ProjectThree />} />
          <Route path='FurnitureProjects' element={<FurnitureProjects />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App

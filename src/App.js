import React from 'react'
import Home from './Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './Pages/Projects';
import Team from './Pages/Team';
import Service from './Pages/Service';
import Stories from './Pages/Stories';
import Singlestory from './Pages/Singlestory';
import Singlestory1 from './Pages/Singlestory1';
import Singlestory2 from './Pages/Singlestory2';
import Singleproject from './Pages/Singleproject';
import Singleproject1 from './Pages/Singleproject1';
import Singleproject2 from './Pages/Singleproject2';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/stories' element={<Stories />} />
    <Route path='/team' element={<Team />} />
    <Route path='/service' element={<Service />} />
    <Route path='/singlestory' element={<Singlestory />} />
    <Route path='/singlestory1' element={<Singlestory1 />} />
    <Route path='/singlestory2' element={<Singlestory2 />} />
    <Route path='/singleproject' element={<Singleproject />} />
    <Route path='/singleproject1' element={<Singleproject1 />} />
    <Route path='/singleproject2' element={<Singleproject2 />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

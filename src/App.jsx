import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Edit from './components/Edit'
import Add from './components/Add'

function App() {

  return (
    <Router basename='/HealthCare/'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/edit' element={<Edit />} />
        <Route exact path='/add' element={<Add />} />
      </Routes>
    </Router>
  )
}

export default App

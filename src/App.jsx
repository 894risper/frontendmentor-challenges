
import './App.css'

import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NoPage from './pages/NoPage';
function App() {
return (

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="contacts" element={<Contacts/>}></Route>
    <Route path="*" element={<NoPage/>}></Route>


    </Route>
  </Routes>
  
  </BrowserRouter>

   
  )
}

export default App

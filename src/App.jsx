import { Toaster } from 'react-hot-toast';
import './App.css'

import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NoPage from './pages/NoPage';
function App() {
return (
<div >
<Toaster position="top-center" reverseOrder={false} />
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="contacts" element={<Contacts/>}></Route>
    <Route path="*" element={<NoPage/>}></Route>


    </Route>
  </Routes>
  
  </BrowserRouter>

  </div> 
  )
}

export default App

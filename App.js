import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Menupage from './components/Menupage';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/menu' element={<Menupage></Menupage>}></Route>
      <Route path='/contacts' element={<Contacts></Contacts>}></Route>
    </Routes>
    <Footer></Footer>

     
    </div>
  );
}

export default App;

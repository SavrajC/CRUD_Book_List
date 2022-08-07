import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Register from './pages/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
      <Routes>
          <Route path='/' element ={<Home />}/>
          <Route path='/movies' element ={<Movies />}/>
          <Route path='/dashboard' element ={<Dashboard />}/>
          <Route path='/login' element ={<Login />}/>
          <Route path='/register' element ={<Register />}/>
      </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;

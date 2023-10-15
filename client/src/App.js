import Footer from './components/Footer/Footer';
import Signup from './components/Authentication/Signup.js';
import Login from './components/Authentication/Login.js';
import { Routes,Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import  Home  from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {


  return (
    <main className='bg-gray-900' >
      <UserAuthContextProvider>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<ProtectedRoute>
            <Home/>
          </ProtectedRoute>}/>
      </Routes>
      </UserAuthContextProvider>
      <Footer/>
    </main>
  )
}

export default App
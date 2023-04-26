import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import useAuthContext from './hooks/useAuthContext'

export default function App (): JSX.Element {
  const { authState } = useAuthContext()
  const userLogged = authState.user != null

  return (
    <BrowserRouter>
      <Header />
      <main className='min-h-full'>
        <Routes>
          <Route path='/' element={userLogged ? <Home /> : <Navigate to='/login' />} />
          <Route path='/login' element={userLogged ? <Navigate to='/' /> : <Login />} />
          <Route path='/signUp' element={userLogged ? <Navigate to='/' /> : <SignUp />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

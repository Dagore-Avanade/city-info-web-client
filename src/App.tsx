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
import CityDetailPage from './pages/CityDetailPage'
import NewPointOfInterest from './pages/NewPointOfInterest'
import NewCity from './pages/NewCity'
import UpdatePointOfInterest from './pages/UpdatePointOfInterest'

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
          <Route path='/newCity' element={userLogged ? <NewCity /> : <Navigate to='/login' />} />
          <Route path='/newPointOfInterest' element={userLogged ? <NewPointOfInterest /> : <Navigate to='/login' />} />
          <Route path='/updatePointOfInterest' element={userLogged ? <UpdatePointOfInterest /> : <Navigate to='/login' />} />
          <Route path='/city/:id' element={userLogged ? <CityDetailPage /> : <Navigate to='/login' />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

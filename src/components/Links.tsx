import { Link } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'
import LogoutBtn from './LogoutBtn'

interface Props {
  classes?: string
}
export default function Links (props: Props): JSX.Element {
  const { classes } = props
  const { authState } = useAuthContext()

  return (
    <>
      <li><Link to='/contact' className={classes}>Contacto</Link></li>
      {
        authState.user == null
          ? <li><Link to='/login' className={classes}>Inicia sesión</Link></li>
          : (
            <>
              <li>{authState.user.username}</li>
              <li><LogoutBtn classes={classes} /></li>
            </>
            )
      }
    </>
  )
}

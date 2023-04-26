import useAuthContext from '../hooks/useAuthContext'

interface Props {
  classes?: string
}
export default function LogoutBtn (props: Props): JSX.Element {
  const { classes } = props
  const { authDispatch } = useAuthContext()

  return (
    <button
      onClick={handleLogout}
      className={classes}
    >
      Cerrar sesión
    </button>
  )

  function handleLogout (): void {
    localStorage.removeItem('user')
    authDispatch({ type: 'LOGOUT', payload: null })
  }
}

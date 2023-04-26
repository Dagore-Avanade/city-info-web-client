import useAuthContext from '../hooks/useAuthContext'

interface Props {
  classes?: string
}
export default function LogoutBtn (props: Props): JSX.Element {
  const { classes } = props
  const { authDispatch } = useAuthContext()

  return (
    <button
      onClick={() => authDispatch({ type: 'LOGOUT', payload: null })}
      className={classes}
    >
      Cerrar sesión
    </button>
  )
}

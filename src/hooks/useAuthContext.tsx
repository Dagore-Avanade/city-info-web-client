import { Dispatch, useContext } from 'react'
import { AuthContext } from '../context/Auth'
import ICurrentUser from '../interfaces/ICurrentUser'
import IAuthAction from '../interfaces/IAuthAction'

export default function useAuthContext (): { authState: ICurrentUser, authDispatch: Dispatch<IAuthAction> } {
  const context = useContext(AuthContext)
  if (context == null) {
    throw new Error('Only can be used inside a react component under th AuthContext provider')
  }

  return {
    authState: context.state,
    authDispatch: context.dispatch
  }
}

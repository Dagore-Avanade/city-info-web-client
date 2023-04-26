import { Dispatch, ReactNode, createContext, useReducer } from 'react'
import ICurrentUser from '../interfaces/ICurrentUser'
import IAuthAction from '../interfaces/IAuthAction'

export const AuthContext = createContext<null | { state: ICurrentUser, dispatch: Dispatch<IAuthAction> }>(null)

interface Props { children: ReactNode }
export function AuthContextProvider (props: Props): JSX.Element {
  const { children } = props
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

function authReducer (state: ICurrentUser, action: IAuthAction): ICurrentUser {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

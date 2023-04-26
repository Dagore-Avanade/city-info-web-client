import { ChangeEvent, FormEvent, useState } from 'react'
import { loginFields, loginFieldsKeys } from '../constants/formFields'
import Input from './Input'
import FormAction from './FormAction'
import useLogin from '../hooks/useLogin'

export default function LoginForm (): JSX.Element {
  const [loginState, setLoginState] = useState(loginFieldsKeys)
  const { login, isLoading, error } = useLogin()

  return (
    <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
      <div>
        {
          loginFields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />)
        }
      </div>
      <FormAction disabled={isLoading} text='Inicia sesión' />
      <p className='text-red-600'>{error}</p>
    </form>
  )

  function handleChange (e: ChangeEvent<HTMLInputElement>): void {
    setLoginState({
      ...loginState,
      [e.target.id]: e.target.value
    })
  }
  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    login(loginState['email-address'], loginState.password)
  }
}

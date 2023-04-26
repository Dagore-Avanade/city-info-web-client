import { ChangeEvent, FormEvent, useState } from 'react'
import { signUpFields, signUpFieldsKeys } from '../constants/formFields'
import Input from './Input'
import FormAction from './FormAction'
import useSignUp from '../hooks/useSignUp'

export default function SignUpForm (): JSX.Element {
  const [signUpState, setSignUpState] = useState(signUpFieldsKeys)
  const { signUp, isLoading, error } = useSignUp()

  return (
    <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
      <div>
        {
          signUpFields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signUpState[field.id]}
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
      <FormAction text='Regístrate' disabled={isLoading} />
      <p className='text-red-600'>{error}</p>
    </form>
  )

  function handleChange (e: ChangeEvent<HTMLInputElement>): void {
    setSignUpState({
      ...signUpState,
      [e.target.id]: e.target.value
    })
  }
  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    signUp(signUpState['email-address'], signUpState.password)
  }
}

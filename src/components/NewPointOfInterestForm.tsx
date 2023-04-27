import { ChangeEvent, FormEvent, useState } from 'react'
import FormAction from './FormAction'
import { newPointOfInterestFields, newPointOfInterestFieldsKeys } from '../constants/formFields'
import Input from './Input'
import useNewPointOfInterest from '../hooks/useNewPointOfInterest'
import SelectCity from './SelectCity'
import { Navigate } from 'react-router-dom'

export default function NewPointOfInterestForm (): JSX.Element {
  const [fieldsState, setFieldsState] = useState(newPointOfInterestFieldsKeys)
  const [selectedCity, setSelectedCity] = useState<number>(-1)
  const { isLoading, error, ok, createPointOfInterest } = useNewPointOfInterest()

  if (ok) {
    return <Navigate to={`/city/${selectedCity}`} />
  }

  return (
    <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
      <div>
        <SelectCity selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        {
          newPointOfInterestFields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={fieldsState[field.id]}
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
    setFieldsState({
      ...fieldsState,
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if (selectedCity === -1) {
      alert('Selecciona una ciudad')
      return
    }
    createPointOfInterest(selectedCity, fieldsState.name, fieldsState.description)
  }
}

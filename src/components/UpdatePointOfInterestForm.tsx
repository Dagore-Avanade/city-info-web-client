import { ChangeEvent, FormEvent, useState } from 'react'
import FormAction from './FormAction'
import { newPointOfInterestFields, newPointOfInterestFieldsKeys } from '../constants/formFields'
import Input from './Input'
import { Navigate } from 'react-router-dom'
import IPointOfInterest from '../interfaces/IPointOfInterest'
import useUpdatePointOfInterest from '../hooks/useUpdatePointOfInterest'

export default function NewPointOfInterestForm (): JSX.Element {
  const item = localStorage.getItem('toUpdate')

  if (item == null) {
    return <Navigate to='/' />
  }

  const toUpdate = JSON.parse(item) as { cityId: number, pointOfInterest: IPointOfInterest }
  const fieldKeysForUpdate = structuredClone(newPointOfInterestFieldsKeys)
  fieldKeysForUpdate.name = toUpdate.pointOfInterest.name
  fieldKeysForUpdate.description = toUpdate.pointOfInterest.description ?? ''
  const [fieldsState, setFieldsState] = useState(fieldKeysForUpdate)
  const { isLoading, error, ok, updatePointOfInterest } = useUpdatePointOfInterest()

  if (ok) {
    return <Navigate to={`/city/${toUpdate.cityId}`} />
  }

  return (
    <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
      <div>
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
      <FormAction disabled={isLoading} text='Actualizar' />
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
    updatePointOfInterest(toUpdate.cityId, {
      id: toUpdate.pointOfInterest.id,
      name: fieldsState.name,
      description: fieldsState.description
    })
  }
}

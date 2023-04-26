import { ChangeEvent } from 'react'
import { fixedInputClass } from '../constants/formFields'

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  labelText: string
  labelFor: string
  id: string
  name: string
  type: string
  isRequired?: boolean
  placeholder: string
  customClass?: string
}
export default function Input (props: Props): JSX.Element {
  const {
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired,
    placeholder,
    customClass
  } = props
  return (
    <div className='my-5'>
      <label htmlFor={labelFor} className='sr-only'>
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired ?? false}
        className={fixedInputClass + (customClass == null ? '' : customClass)}
        placeholder={placeholder}
      />
    </div>
  )
}

import IFormField from '../interfaces/IFormField'

export const fixedInputClass = 'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'

export const loginFields: IFormField[] = [
  {
    labelText: 'Usuario',
    labelFor: 'email-address',
    id: 'email-address',
    name: 'email',
    type: 'text',
    autoComplete: 'username',
    isRequired: true,
    placeholder: 'Usuario'
  },
  {
    labelText: 'Contraseña',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Contraseña'
  }
]

export const signUpFields: IFormField[] = [
  {
    labelText: 'Usuario',
    labelFor: 'email-address',
    id: 'email-address',
    name: 'email',
    type: 'text',
    autoComplete: 'username',
    isRequired: true,
    placeholder: 'Usuario'
  },
  {
    labelText: 'Contraseña',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Contraseña'
  },
  {
    labelText: 'Repite la contraseña',
    labelFor: 'confirm-password',
    id: 'confirm-password',
    name: 'confirm-password',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Repite la contraseña'
  }
]

export const newPointOfInterestFields: IFormField[] = [
  {
    labelText: 'Nombre',
    labelFor: 'name',
    id: 'name',
    name: 'name',
    type: 'text',
    autoComplete: '',
    isRequired: true,
    placeholder: 'Nombre del punto de interés'
  },
  {
    labelText: 'Descripción',
    labelFor: 'description',
    id: 'description',
    name: 'description',
    type: 'text',
    autoComplete: '',
    isRequired: true,
    placeholder: 'Descripción'
  }
]

export const loginFieldsKeys = getKeys(loginFields)

export const signUpFieldsKeys = getKeys(signUpFields)

export const newPointOfInterestFieldsKeys = getKeys(newPointOfInterestFields)

function getKeys (fields: IFormField[]): { [key: string]: string } {
  return Object.fromEntries(fields.map(field => [field.id, '']))
}

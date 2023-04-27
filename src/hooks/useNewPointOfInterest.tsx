import { useState } from 'react'
import createPointOfInterestService from '../services/createPointOfInterest.service'
import useAuthContext from './useAuthContext'

interface IUseNewPointOfInterest {
  isLoading: boolean
  error: string
  ok: boolean
  createPointOfInterest: (cityId: number, name: string, description: null | string) => void
}
export default function useNewPointOfInterest (): IUseNewPointOfInterest {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [ok, setOk] = useState(false)
  const { authState } = useAuthContext()

  function createPointOfInterest (cityId: number, name: string, description: null | string): void {
    setIsLoading(true)
    createPointOfInterestService(cityId, { name, description }, authState.user?.token)
      .then(response => {
        response.json()
          .then(data => {
            if (response.ok) {
              setOk(true)
            } else {
              throw new Error(getErrors(data.errors))
            }
          })
          .catch(err => setError(err.message))
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }

  return {
    error,
    isLoading,
    ok,
    createPointOfInterest
  }
}

function getErrors (errors: { [key: string]: string }): string {
  return Object.keys(errors)
    .reduce((acc, errorKey) => {
      return `${acc}, ${errors[errorKey]}`
    }, '')
}

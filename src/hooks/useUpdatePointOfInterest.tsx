import { useState } from 'react'

import useAuthContext from './useAuthContext'
import updatePointOfInterestService from '../services/updatePointOfInterest.service'
import IPointOfInterest from '../interfaces/IPointOfInterest'

interface IUseUpdatePointOfInterest {
  isLoading: boolean
  error: string
  ok: boolean
  updatePointOfInterest: (cityId: number, pointOfInterest: IPointOfInterest) => void
}
export default function useNewPointOfInterest (): IUseUpdatePointOfInterest {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [ok, setOk] = useState(false)
  const { authState } = useAuthContext()

  function updatePointOfInterest (cityId: number, pointOfInterest: IPointOfInterest): void {
    setIsLoading(true)
    updatePointOfInterestService(cityId, pointOfInterest, authState.user?.token)
      .then(response => {
        if (response.status === 204) {
          setOk(true)
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }

  return {
    error,
    isLoading,
    ok,
    updatePointOfInterest
  }
}

import { useEffect, useState } from 'react'
import useAuthContext from './useAuthContext'
import ICityWithPointsOfInterest from '../interfaces/ICityWithPointsOfInterest'

export default function useCityDetails (cityId: number): { city: null | ICityWithPointsOfInterest, isLoading: boolean, error: string } {
  const { authState } = useAuthContext()
  const [city, setCity] = useState<null | ICityWithPointsOfInterest>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    const API_KEY = import.meta.env.VITE_API_URL as string

    fetch(`${API_KEY}/api/Cities/${cityId}?includePointsOfInterest=true`, {
      headers: {
        Authorization: `Bearer ${authState.user == null ? '' : authState.user.token}`
      }
    })
      .then(response => {
        response.json()
          .then(data => {
            if (response.ok) {
              return data
            } else {
              throw new Error('Failed')
            }
          })
          .then(data => setCity(data))
          .catch(err => setError(err.message))
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    city,
    isLoading,
    error
  }
}

import { useEffect, useState } from 'react'
import ICity from '../interfaces/ICity'
import useAuthContext from './useAuthContext'

export default function useCities (): { cities: ICity[], isLoading: boolean, error: string } {
  const { authState } = useAuthContext()
  const [cities, setCities] = useState<ICity[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    const API_KEY = import.meta.env.VITE_API_URL as string

    fetch(`${API_KEY}/api/Cities`, {
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
          .then(data => setCities(data))
          .catch(err => setError(err.message))
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    cities,
    isLoading,
    error
  }
}

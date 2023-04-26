import { useState } from 'react'
import useAuthContext from './useAuthContext'

export default function useLogin (): { login: (username: string, password: string) => void, isLoading: boolean, error: string } {
  const { authDispatch } = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  function login (username: string, password: string): void {
    const endpoint = `${import.meta.env.VITE_API_URL as string}/api/auth/login`

    setIsLoading(true)

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        response.json()
          .then(data => {
            if (response.ok) {
              console.log(data)
              authDispatch({ type: 'LOGIN', payload: data })
            } else {
              setError(data.error)
            }
          })
          .catch(error => setError(error.message))
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false))
  }

  return {
    login,
    isLoading,
    error
  }
}

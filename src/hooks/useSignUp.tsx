import { useState } from 'react'
import useAuthContext from './useAuthContext'

export default function useSignUp (): { signUp: (username: string, password: string) => void, isLoading: boolean, error: string } {
  const { authDispatch } = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  function signUp (username: string, password: string): void {
    const endpoint = `${import.meta.env.VITE_API_URL as string}/api/auth/signup`
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
              authDispatch({ type: 'LOGIN', payload: data })
            } else {
              setError(data.error)
            }
          })
          .catch(error => setError(error))
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }

  return {
    signUp,
    isLoading,
    error
  }
}

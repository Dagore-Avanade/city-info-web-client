import useCities from '../hooks/useCities'

export default function ListOfCities (): JSX.Element {
  const { cities, isLoading, error } = useCities()

  if (error.length !== 0) {
    return <h1 className='text-3xl'>{error}</h1>
  }

  if (isLoading) {
    return <h1 className='text-3xl'>Cargando...</h1>
  }

  return (
    <ul>
      {cities.map(city => <li key={crypto.randomUUID()}>{city.name}</li>)}
    </ul>
  )
}

import useCityDetails from '../hooks/useCityDetails'

interface Props {
  cityId: number
}
export default function CityDetail (props: Props): JSX.Element {
  const { cityId } = props
  const { city, isLoading, error } = useCityDetails(cityId)

  if (error.length !== 0) {
    return <h1 className='text-3xl'>{error}</h1>
  }

  if (isLoading) {
    return <h1 className='text-3xl'>Cargando...</h1>
  }

  return (
    <div>
      <h2 className='text-2xl py-2'>{city?.name}</h2>
      <p>{city?.description}</p>
      <br />
      <ul>
        {city?.pointsOfInterest?.map(pointOfInterest => <li key={crypto.randomUUID()}>{pointOfInterest.name} - {pointOfInterest?.description}</li>)}
      </ul>
    </div>
  )
}

import useCityDetails from '../hooks/useCityDetails'
import PointOfInterest from './PointOfInterest'

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
      <h2 className='text-2xl font-bold py-2'>{city?.name}</h2>
      <p>{city?.description}</p>
      <br />
      <ul>
        {city?.pointsOfInterest?.map(pointOfInterest => <PointOfInterest key={crypto.randomUUID()} pointOfInterest={pointOfInterest} cityId={cityId} />)}
      </ul>
    </div>
  )
}

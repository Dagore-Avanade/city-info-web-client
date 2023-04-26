import { useParams } from 'react-router-dom'
import CityDetail from '../components/CityDetail'

export default function CityDetailPage (): JSX.Element {
  const { id } = useParams()
  return (
    <div className='p-5'>
      <h1 className='text-3xl py-5'>Detalles</h1>
      <CityDetail cityId={Number(id)} />
    </div>
  )
}

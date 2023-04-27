import { useNavigate } from 'react-router-dom'
import IPointOfInterest from '../interfaces/IPointOfInterest'
import deletePointOfInterest from '../services/deletePointOfInterest.service'
import ActionIcon from './ActionIcon'
import useAuthContext from '../hooks/useAuthContext'

interface Props {
  cityId: number
  pointOfInterest: IPointOfInterest
}
export default function PointOfInterest (props: Props): JSX.Element {
  const { cityId, pointOfInterest } = props
  const { authState } = useAuthContext()
  const navigate = useNavigate()

  return (
    <li className='my-5 w-fit min-w-full h-20 relative'>
      <h3 className='font-bold'>{pointOfInterest.name}</h3>
      <div className='w-fit absolute right-0 top-0'>
        <ActionIcon icon='❌' handleClick={handleDelete} />
        <ActionIcon icon='✏️' handleClick={handleUpdate} />
      </div>
      <p>{pointOfInterest?.description}</p>
    </li>
  )

  function handleDelete (): void {
    deletePointOfInterest(cityId, pointOfInterest.id, authState.user?.token)
      .then(() => navigate(0))
      .catch(error => alert(error))
  }

  function handleUpdate (): void {
    localStorage.setItem('toUpdate', JSON.stringify({ cityId, pointOfInterest }))
    navigate('/updatePointOfInterest')
  }
}

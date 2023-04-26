import IPointOfInterest from '../interfaces/IPointOfInterest'
import ActionIcon from './ActionIcon'

interface Props {
  pointOfInterest: IPointOfInterest
}
export default function PointOfInterest (props: Props): JSX.Element {
  const { pointOfInterest } = props

  return (
    <li className='my-5 w-fit min-w-full h-20 relative'>
      <h3 className='font-bold'>{pointOfInterest.name}</h3>
      <div className='w-fit absolute right-0 top-0'>
        <ActionIcon icon='❌' />
        <ActionIcon icon='✏️' />
      </div>
      <p>{pointOfInterest?.description}</p>
    </li>
  )
}

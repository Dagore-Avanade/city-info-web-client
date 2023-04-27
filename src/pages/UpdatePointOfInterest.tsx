import FormHeader from '../components/FormHeader'
import UpdatePointOfInterestForm from '../components/UpdatePointOfInterestForm'

export default function UpdatePointOfInterest (): JSX.Element {
  return (
    <div className='w-80 m-auto'>
      <FormHeader
        heading='Actualiza el punto de interés'
        paragraph='¿Quieres crear uno nuevo?'
        linkName='Crea uno aquí'
        linkUrl='/newPointOfInterest'
      />
      <UpdatePointOfInterestForm />
    </div>
  )
}

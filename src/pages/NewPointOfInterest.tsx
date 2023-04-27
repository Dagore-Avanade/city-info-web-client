import FormHeader from '../components/FormHeader'
import NewPointOfInterestForm from '../components/NewPointOfInterestForm'

export default function NewPointOfInterest (): JSX.Element {
  return (
    <div className='w-80 m-auto'>
      <FormHeader
        heading='Nuevo punto de interés'
        paragraph='¿Quieres crear una nueva ciudad?'
        linkName='Crea una aquí'
        linkUrl='/newCity'
      />
      <NewPointOfInterestForm />
    </div>
  )
}

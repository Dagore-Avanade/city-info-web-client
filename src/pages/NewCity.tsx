import FormHeader from '../components/FormHeader'

export default function NewCity (): JSX.Element {
  return (
    <div className='w-80 m-auto'>
      <FormHeader
        heading='Nueva ciudad'
        paragraph='¿Quieres crear un nuevo punto de interés?'
        linkName='Crea uno aquí'
        linkUrl='/newPointOfInterest'
      />

    </div>
  )
}

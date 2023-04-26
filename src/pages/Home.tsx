import ListOfCities from '../components/ListOfCities'

export default function Home (): JSX.Element {
  return (
    <div className='p-5'>
      <h1 className='text-3xl py-5'>Inicio</h1>
      <ListOfCities />
    </div>
  )
}

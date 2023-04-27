import { Dispatch, SetStateAction } from 'react'
import useCities from '../hooks/useCities'
import { fixedInputClass } from '../constants/formFields'

interface Props {
  selectedCity: number
  setSelectedCity: Dispatch<SetStateAction<number>>
}
export default function SelectCity (props: Props): JSX.Element {
  const { cities, isLoading: isLoadingCities, error: citiesError } = useCities()

  return (
    <div className='my-5'>
      <label htmlFor='city' className='sr-only'>
        Ciudad
      </label>
      <select
        title='select a city'
        name='city'
        id='city'
        value={props.selectedCity}
        onChange={e => props.setSelectedCity(Number(e.target.value))}
        className={fixedInputClass}
      >
        {
        isLoadingCities
          ? <option value={-1}>Cargando...</option>
          : citiesError.length !== 0
            ? <option value={-1}>Error. Puede intentar refrescar la página.</option>
            : (
              <>
                <option value={-1}>Selecciona una ciudad</option>
                {cities.map(city => <option key={crypto.randomUUID()} value={city.id}>{city.name}</option>)}
              </>
              )
      }
      </select>
    </div>
  )
}

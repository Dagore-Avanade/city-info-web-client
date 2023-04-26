import { Dispatch, SetStateAction } from 'react'
import Links from './Links'

interface Props {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>
}
export default function MobileLinks (props: Props): JSX.Element {
  const { setIsNavOpen } = props

  return (
    <ul
      className='flex flex-col items-center justify-between min-h-[250px]'
      onClick={() => setIsNavOpen(prev => !prev)}
    >
      <Links classes='border-b border-gray-400 my-8 uppercase' />
    </ul>
  )
}

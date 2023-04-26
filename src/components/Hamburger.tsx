import { Dispatch } from 'react'

interface Props {
  setIsNavOpen: Dispatch<React.SetStateAction<boolean>>
}
export default function Hamburger (props: Props): JSX.Element {
  const { setIsNavOpen } = props

  return (
    <div
      className='space-y-2'
      onClick={() => setIsNavOpen(prev => !prev)}
    >
      <span className='block h-0.5 w-8 animate-pulse bg-gray-600' />
      <span className='block h-0.5 w-8 animate-pulse bg-gray-600' />
      <span className='block h-0.5 w-8 animate-pulse bg-gray-600' />
    </div>
  )
}

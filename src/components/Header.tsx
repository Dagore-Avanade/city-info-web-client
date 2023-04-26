import MobileMenu from './MobileMenu'
import DesktopLinks from './DesktopLinks'
import { Link } from 'react-router-dom'

export default function Header (): JSX.Element {
  // Thanks to Giorgia Sambrotta https://www.codementor.io/@giorgiasambrotta/hamburger-menu-with-react-and-tailwind-css-1qx6sruvua
  return (
    <nav className='flex items-center justify-between border-b border-gray-400 p-8'>
      <Link to='/'>
        <img src='' alt='logo' />
      </Link>
      <nav>
        <MobileMenu />
        <DesktopLinks />
      </nav>
    </nav>
  )
}

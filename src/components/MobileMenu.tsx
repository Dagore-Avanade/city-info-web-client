import { useState } from 'react'
import MobileLinks from './MobileLinks'
import Close from './Close'
import Hamburger from './Hamburger'

export default function MobileMenu (): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <section className='flex lg:hidden'>
      <Hamburger setIsNavOpen={setIsNavOpen} />

      <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
        <div
          className='absolute top-0 right-0 px-8 py-8'
          onClick={() => setIsNavOpen(false)}
        >
          <Close />
        </div>
        <MobileLinks setIsNavOpen={setIsNavOpen} />
      </div>
      <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}
      </style>
    </section>
  )
}

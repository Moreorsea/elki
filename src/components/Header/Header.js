import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive'

import Nav from '../Nav/Nav';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  const isDesctop = useMediaQuery({ query: '(min-width: 1024px)' })
  const navClass = ['burger'];

  isOpen ? navClass.push('close-burger') : navClass.push('');

  return (
    <header>
        {
          isMobile && <span className={navClass.join(' ')} onClick={() => {setIsOpen(!isOpen)}}></span>
        }
        {
          isOpen && <Nav />
        }
        {
          isDesctop && <Nav />
        }
      </header>
  )
}
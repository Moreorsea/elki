import React from 'react';
import './Nav.css';
import { navConfig } from '../../configs/navConfig';

export default function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        {
          navConfig.map((item, index) => {
            return (
              <li className="nav-list__item" key={item}>
                <a href="/">{item}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
import React from 'react';
import './Sidebar.css';
import { sidebarConfig } from '../../configs/sidebarConfig';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar-wrapper">
        <h3>Коттеджи A-frame</h3>
        <ul className="sidebar-list">
          {
            sidebarConfig.map(item => {
              return (
                <li className="sidebar-list__item" key={item.anchor}>
                  <a href={item.anchor} >{item.title}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
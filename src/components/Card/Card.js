import React from 'react';

import SimpleSlider from '../Slider/Slider';
import './Cards.css';

export default function Card({config}) {
  return (
    <article className="card" id={config.anchor}>
      <h2 className="card__title">{config.title}</h2>

      <SimpleSlider images={config.images} />

      <p className="card__text">{config.text}</p>
      <span className="card__price">{config.price}</span>
    </article>
  )
}
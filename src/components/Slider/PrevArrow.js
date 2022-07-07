import React from 'react';

import prev from '../../img/prev-arrow.svg';

export default function PrevArrow(props) {
  const { onClick } = props;

  return (
    <div onClick={onClick} className="prev-arrow">
      <img src={prev}  alt="prev arrow" />
    </div>
  )
}
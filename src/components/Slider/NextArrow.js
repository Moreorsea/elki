import React from 'react';

import next from '../../img/next-arrow.svg';

export default function NextArrow(props) {
  const { onClick } = props;

  return (
    <div onClick={onClick} className="next-arrow">
      <img src={next}  alt="next arrow" />
    </div>
  )
}
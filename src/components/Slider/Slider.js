import React, {useEffect, useRef} from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import "./Slider.css";

export default function SimpleSlider({images}) {
  const ref = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    ref.current.top = Math.round(ref.current.getBoundingClientRect().top) - 100;
    ref.current.bottom = Math.round(ref.current.getBoundingClientRect().bottom);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll(e) {
    if(window.innerWidth <= 1023) return;
    if(window.scrollY > ref.current.top && window.scrollY < ref.current.bottom) {
      next()
    }
  }

  function next() {
    sliderRef.current.slickNext();
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1.2,
          swipe: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          swipe: true
        }
      }
    ]
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {
        images.map((item, index) => {
          return <div ref={ref}>
            <img className="slider-image" src={item.image} key={item.id} alt={item.alt} />
          </div>
        })
      }
    </Slider>
  );
}
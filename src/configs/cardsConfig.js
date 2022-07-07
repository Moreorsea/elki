import slide1 from '../img/carousel/1.png';
import slide2 from '../img/carousel/2.png';
import slide3 from '../img/carousel/3.png';
import slide4 from '../img/carousel/4.png';

export const cardsConfig = [
  {
    title: 'A-frame red',
    text: 'Сказочный треугольный домик с панорамными окнами среди ёлок, в котором с комфортом может рсположиться до 6 человек. Просторная гостиная со вторым светом – отлично подойдёт для душевных посиделок за общим столом.',
    price: 'от 12 000 руб./сут',
    images: [
      {image: slide1, alt: "Изображение для слайдера", id: 1},
      {image: slide2, alt: "Изображение для слайдера", id: 2},
      {image: slide3, alt: "Изображение для слайдера", id: 3},
    ],
    anchor: 'red'
  },
  {
    title: 'A-frame orange',
    text: 'Стиль, уют и восторг. Главное отличие от коттеджа Red — большая открытая терасса. А еще этот A-frame с самой большой гостиной, подойдет для семей активными детьми или большой компании.',
    price: 'от 15 000 руб./сут',
    images: [
      {image: slide1, alt: "Изображение для слайдера", id: 4},
      {image: slide2, alt: "Изображение для слайдера", id: 5},
      {image: slide3, alt: "Изображение для слайдера", id: 6},
    ],
    anchor: 'orange'
  },
  {
    title: 'A-frame lime',
    text: 'Маленький уютный треугольный домик с кроватью под потолком и диваном в гостиной.',
    price: 'от 9 000 руб./сут',
    images: [
      {image: slide4, alt: "Изображение для слайдера", id: 7},
      {image: slide2, alt: "Изображение для слайдера", id: 8},
      {image: slide3, alt: "Изображение для слайдера", id: 9},
    ],
    anchor: 'lime'
  }
]
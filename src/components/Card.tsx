import React from 'react';
import ImageThree from '../assets/assets/images/image-gaming-growth.jpg';
import ImageTwo from '../assets/assets/images/image-top-laptops.jpg';
import ImageOne from '../assets/assets/images/image-retro-pcs.jpg';
const Card = () => {
  const card_data = [
    {
      image: ImageOne,
      number: '01',
      title: 'Reviving Retro PCs',
      description: 'What happens when old PCs are given modern upgrades?',
    },
    {
      image: ImageTwo,
      number: '02',
      title: 'Top 10 Laptops of 2022',
      description: 'Our best picks for various needs and budgets.',
    },
    {
      image: ImageThree,
      number: '03',
      title: 'The Growth of Gaming',
      description: 'How the pandemic has sparked fresh opportunities.',
    },
  ];

  return (
    <section className='card container grid'>
      {card_data.map(({ image, number, title, description }) => (
        <div className='card__container flex' key={number}>
          <div className='card__container--image'>
            <img src={image} alt={title} />
          </div>
          <div className='card__container--description flex'>
            <h2 className='number'>{number}</h2>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;

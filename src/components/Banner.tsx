import React from 'react';
import BannerImg from '../assets/assets/images/image-web-3-mobile.jpg';
import BannerDesktop from '../assets/assets/images/image-web-3-desktop.jpg';
const Banner = () => {
  const article = [
    {
      subtitle: 'Hydrogen VS Electric Cars',
      paragraph: 'Will hydrogen-fueled cars ever catch up to EVS.',
    },
    {
      subtitle: 'The downside of AI Artistry',
      paragraph:
        'What are the possible adverse effects of on-demand AI image generation.',
    },
    {
      subtitle: 'Is VC funding Drying Up ?',
      paragraph:
        'Private funding  by VC firms is down to 50% YOY. We take a look  at what  means.',
    },
  ];
  return (
    <section className='banner container grid'>
      <div className='left-side grid'>
        <img src={BannerDesktop} alt='banner image' className='banner__image' />
        <div className='banner__description grid'>
          <p className='title'>The Bright Future of Web 3.0 ?</p>

          <div className='button__wrapper'>
            <p className='sub-description'>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of people. But is it
              really fullfiling its promise ?
            </p>
            <a href='/' className=' btn-readmore'>
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className='right-side'>
        <h2 className='article__title'>New</h2>
        {article.map(({ subtitle, paragraph }) => (
          <div className='article' key={paragraph}>
            <h3 className='article__subtitle'>{subtitle}</h3>
            <p className='description'>{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;

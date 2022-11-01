import React, { useState } from 'react';
import logo from '../assets/assets/images/logo.svg';
import burger from '../assets/assets/images/icon-menu.svg';
import close from '../assets/assets/images/icon-menu-close.svg';
const Header = () => {
  const [state, setState] = useState(false);
  const links = [
    {
      name: 'Home',
    },
    {
      name: 'New',
    },
    {
      name: 'Popular',
    },
    {
      name: 'Trending',
    },
    {
      name: 'Categories',
    },
  ];
  return (
    <header className='header container'>
      <nav className='header__navigation flex'>
        <div className='header__navigation--logo-container'>
          <img src={logo} alt='logo' className='logo pointer' />
          <img
            src={burger}
            alt='menu-bar'
            className='menu-icon pointer'
            onClick={() => setState((state) => !state)}
          />
        </div>
        <div
          className={`header__navigation--link-container ${
            state ? 'navigation-active' : ''
          }`}
        >
          <img
            src={close}
            alt='close-icon'
            className='close-icon pointer'
            onClick={() => setState((state) => !state)}
          />
          <ul className='menu-links'>
            {links.map((el, i) => (
              <li key={el.name}>
                <a href='/' className={i === 0 ? 'active' : ''}>
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={`overlay ${state ? 'overlay-active' : ''}`}></div>
    </header>
  );
};

export default Header;

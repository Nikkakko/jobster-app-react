import React from 'react';
import { NavLink } from 'react-router-dom';
import Links from '../utils/Links';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {Links.map(link => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            key={id}
            to={path}
            onClick={toggleSidebar}
            className={isActive => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

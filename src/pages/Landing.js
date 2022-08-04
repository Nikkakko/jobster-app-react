import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}

        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio earum
            sequi similique accusamus eveniet dignissimos distinctio nihil
            voluptatum ipsum laudantium.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;

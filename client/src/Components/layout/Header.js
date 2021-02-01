import React from 'react';

const Header = ({ title }) => {
  return (
    <div style={{ margin: 30 }} className='hero is-light has-text-centered'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

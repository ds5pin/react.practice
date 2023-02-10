import React, { useContext } from 'react';
import { DarkContext } from '../content/DarkContext';

const Header = () => {
  const { isDark } = useContext(DarkContext);
  return (
    <div
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      Welcome!
    </div>
  );
};

export default Header;

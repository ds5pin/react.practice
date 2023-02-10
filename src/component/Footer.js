import React, { useContext } from 'react';
import { DarkContext } from '../content/DarkContext';

const Footer = () => {
  const { isDark, setIsDark } = useContext(DarkContext);
  console.log('isDark', isDark);
  const change = () => {
    setIsDark(!isDark);
  };
  return (
    <div>
      <div
        className="footer"
        style={{
          backgroundColor: isDark ? 'black' : 'white',
          color: isDark ? 'white' : 'black',
        }}
      >
        Footer
      </div>
      <button className="button" onClick={change}>
        다크모드
      </button>
    </div>
  );
};

export default Footer;

import React, { useContext } from 'react';
import { DarkContext } from '../content/DarkContext';

const Content = (props) => {
  const { isDark } = useContext(DarkContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      Content
    </div>
  );
};

export default Content;

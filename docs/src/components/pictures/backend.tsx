import React from 'react';
import config from '../../../config';

const ReactComponent = () => {
  return (
    <>
      {config.backPic.map(item => (
        <img src={item} alt="" key={item} />
      ))}
    </>
  );
};

export default ReactComponent;

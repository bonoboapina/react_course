import React from 'react';

const Img = ({src,className,})=><img role="presentation" src={src} className={className}/>;
Img.propTypes = {
  src: React.PropTypes.any.isRequired,
  className: React.PropTypes.string,
};
export default Img;

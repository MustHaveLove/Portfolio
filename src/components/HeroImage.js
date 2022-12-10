import React from 'react';
import face from '../images/face.jpg';

function HeroImage() {
  return (
    <img
      className="mb-4 md:w-[360px] bg-transparent lg:w-[400px] xl:w-[480px] "
      src={face}
      alt=""
    />
  );
}

export default HeroImage;

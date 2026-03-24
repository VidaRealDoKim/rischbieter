import React from 'react';
import { company } from '@/content/company';

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img 
        src={company.heroImage}
        alt='Diagrama tecnico do retentor de particulas' 
        loading='lazy'
        decoding='async'
      />
    </div>
  );
};

export default HeroImage;
import React from 'react';

function CoinImage({ imageUrl, altText }) {
  return (
    <img src={imageUrl} alt={altText} width="20px" />
  );
}

export default CoinImage;
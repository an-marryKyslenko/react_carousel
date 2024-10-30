import React, { useState } from 'react';
import './Carousel.scss';

interface Props {
  images: string[],
  step: number,
  frameSize: number,
  itemWidth: number,
  animationDuration: number,
  infinite: boolean
}
const Carousel: React.FC<Props> = ({
  images,
  step = 3,
  frameSize = 3,
  itemWidth,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [carrentIndex, setCarrentIndex] = useState(0);

  function handlePrev() {
    setCarrentIndex(prev => infinite
      ? (prev - step + images.length) % images.length
      : (prev - step <= 0) ? 0 : prev - step
    )
  }

  function handleNext() {
    setCarrentIndex(prev => infinite
      ? (prev + step) % images.length
      : (images.length - prev < step) ? prev : prev + step
    );
  }

  return (
  <div
    className="Carousel"
    style={{
      maxWidth: `${itemWidth * frameSize}px`,
    }}
    >
    <ul
      className="Carousel__list"
      style={{
        transitionDuration: `${animationDuration}ms`,
        transform: `translateX(-${(100 / frameSize) * carrentIndex}%)`
      }}
    >
      {images.map(imagePath => (
        <li
        key={imagePath}
        style={{
          width: itemWidth + 'px',
          height: itemWidth + 'px',
        }}
        >
          <img
          src={imagePath}
          alt="image "
          style={{
            width: itemWidth + 'px',
            height: itemWidth + 'px',
          }}
          />
        </li>
      ))}
    </ul>

    <button type="button" onClick={handlePrev}>Prev</button>
    <button data-cy="next" type="button" onClick={handleNext}>Next</button>
  </div>
)};

export default Carousel;

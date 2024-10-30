import { ChangeEvent, useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface Parameters {
  frameSize: number,
  infinite: boolean,
  step: number,
  itemWidth: number,
  animationDuration: number
}
const images :string[] = [
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/7.png',
  './img/8.png',
  './img/9.png',
  './img/10.png',
];


function App () {
  const [parameters, setParameters] = useState<Parameters>({
    frameSize: 3,
    infinite: false,
    step: 3,
    itemWidth: 130,
    animationDuration: 1000
  })

  function handleParameters (e: ChangeEvent<HTMLInputElement>) {
    setParameters(prev =>({...prev, [e.target.id]: e.target.value}))
  }
  
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <h1 data-cy="title">Carousel with {images.length} images</h1>

      <Carousel
        images={images}
        frameSize={parameters.frameSize}
        infinite={parameters.infinite}
        step={parameters.step}
        itemWidth={parameters.itemWidth}
        animationDuration={parameters.animationDuration}
      />

      <div>
        <label htmlFor="itemWidth">
          <input type="number" placeholder='itemWidth' id='itemWidth' onChange={handleParameters}/>
          Image Width
        </label>
        <input type="number" placeholder='frameSize' id='frameSize'/>
        <input type="number" placeholder='step' id='step'/>
        <input type="text" placeholder='animationDuration' id='fnimationDuration'/>
        <input
          type="checkbox"
          name="infinite"
          id="infinite"
          checked={parameters.infinite}
          onChange={handleParameters}
        />
      </div>
    </div>
  );
}


export default App;

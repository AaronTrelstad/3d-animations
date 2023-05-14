import { ScatterGraphy } from 'react-scatter-graphy';
import image from './heart.png';

function Scatter() {
  return (
    <div style={{ width: '70%' }}>
      <ScatterGraphy
        src={image}
        size={1}
        duration={500}
        resizeDelay={500}
      />
    </div>
  );
}

export default Scatter;
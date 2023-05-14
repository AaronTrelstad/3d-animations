import { ScatterGraphy } from 'react-scatter-graphy';

function Scatter() {
  return (
    <div style={{ width: '50%' }}>
      <ScatterGraphy
        src="twitter_main.jpeg"
        size={10}
        duration={500}
        resizeDelay={10}
      />
    </div>
  );
}

export default Scatter;
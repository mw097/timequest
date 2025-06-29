import { axialHexToPixel, generateHexGrid } from '../../utils/pointTopHexUtils';
import HEX_CITY from '../../assets/sprites/hexes/H_City.png';

export const HexMap = () => {
  const HEX_SCALE = 100; // Size of each hex tile in pixels
  const tiles = generateHexGrid(3);

  return (
    <svg width={window.innerWidth} height={window.innerHeight}>
      {tiles.map((hex, i) => {
        const { x, y } = axialHexToPixel(hex, HEX_SCALE);

        return (
          <g key={i} transform={`translate(${x + 650}, ${y + 600})`}>
            {/* Draw hex shape */}
            <polygon
              points={Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI / 180) * (60 * i - 30);
                const px = HEX_SCALE * Math.cos(angle);
                const py = HEX_SCALE * Math.sin(angle);
                return `${px},${py}`;
              }).join(' ')}
              fill="#eee"
              stroke="#333"
            />
            <image
              href={HEX_CITY}
              x={-HEX_SCALE}
              y={-HEX_SCALE}
              width={HEX_SCALE * 2}
              height={HEX_SCALE * 2}
            />
          </g>
        );
      })}
    </svg>
  );
};

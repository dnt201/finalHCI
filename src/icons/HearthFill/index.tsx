import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.35 17.13c-.76.69-1.93.69-2.69-.01l-.11-.1C4.3 12.27.87 9.16 1 5.28c.06-1.7.93-3.33 2.34-4.29C5.98-.81 9.24.03 11 2.09 12.76.03 16.02-.82 18.66.99c1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09Z"
      fill="#CE1611"
    />
  </Svg>
);

export default SvgComponent;

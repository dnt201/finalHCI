import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.3.574a.996.996 0 0 0-1.41 0L7 5.454 2.11.564A.996.996 0 1 0 .7 1.974l4.89 4.89-4.89 4.89a.996.996 0 1 0 1.41 1.41L7 8.274l4.89 4.89a.996.996 0 1 0 1.41-1.41l-4.89-4.89 4.89-4.89c.38-.38.38-1.02 0-1.4Z"
      fill={props?.color || '#210C0F'}
    />
  </Svg>
);

export default SvgComponent;

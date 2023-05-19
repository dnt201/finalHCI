import * as React from 'react';
import Svg, {Path, SvgProps, Circle} from 'react-native-svg';

const LocationFill = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Circle cx={10} cy={7.031} r={5} fill="#fff" />
    <Path
      d="M10 0C6.004 0 2.755 3.25 2.755 7.243c0 4.957 6.482 12.233 6.758 12.54.26.29.712.289.97 0 .276-.307 6.758-7.583 6.758-12.54C17.242 3.25 13.993 0 10 0Zm0 10.887a3.648 3.648 0 0 1-3.645-3.644A3.648 3.648 0 0 1 9.999 3.6a3.648 3.648 0 0 1 3.644 3.644A3.648 3.648 0 0 1 10 10.887Z"
      fill={props.color || '#FFC107'}
    />
  </Svg>
);

export default LocationFill;

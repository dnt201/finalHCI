import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 96 960 960" {...props}>
    <Path d="M458 846 209 597q-5-5-7-10t-2-11q0-6 2-11t7-10l250-250q4-4 9-4t10 5q5 5 5 10t-5 10L242 562h492q6 0 10 4t4 10q0 6-4 10t-10 4H242l237 237q4 4 4 9t-5 10q-5 5-10 5t-10-5Z" />
  </Svg>
);
export default SvgComponent;

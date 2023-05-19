import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Line = props => (
  <Svg
    width={1}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path stroke="#252422" d="M.5 0v16" />
  </Svg>
);

export default Line;

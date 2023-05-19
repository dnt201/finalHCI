import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TimeActivity = props => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0Zm3 7.5H7a.5.5 0 0 1-.5-.5V3a.5.5 0 1 1 1 0v3.5H10a.5.5 0 1 1 0 1Z"
      fill="#FFC107"
    />
  </Svg>
);

export default TimeActivity;

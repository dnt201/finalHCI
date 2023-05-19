import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={8}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M.48 1.872h7.04c.265 0 .48-.39.48-.87s-.215-.87-.48-.87H.48c-.265 0-.48.39-.48.87s.215.87.48.87Z"
      fill="#210C0F"
    />
  </Svg>
);

export default SvgComponent;

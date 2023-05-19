import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 7 3-3h3a3 3 0 0 0 6 0h3l3 3-.5 5-2.5-1.5V20H6v-9.5L3.5 12 3 7Z"
    />
  </Svg>
);
export default SvgComponent;

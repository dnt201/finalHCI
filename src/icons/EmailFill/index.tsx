import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 96 960 960"
    {...props}>
    <Path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm288-280q5 0 9-1.5t8-3.5l291-193q5-3 6-8.5t-2-10.5q-2-4-8-5.5t-11 1.5L480 536 187 343q-5-3-10.5-2.5T168 346q-3 5-2 11t6 9l291 193q4 2 8 3.5t9 1.5Z" />
  </Svg>
);
export default SvgComponent;

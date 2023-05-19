import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 96 960 960"
    stroke="#212121"
    {...props}>
    <Path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm608-486L497 559q-4 2-8 3.5t-9 1.5q-5 0-9-1.5t-8-3.5L160 358v426q0 14 9 23t23 9h576q14 0 23-9t9-23V358ZM480 536l304-200H176l304 200ZM160 358v8-24.5 1.5-7 7-2.5V366v-8 458-458Z" />
  </Svg>
);
export default SvgComponent;

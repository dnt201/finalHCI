import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Exit = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M8 9H.05C.55 3.947 4.814 0 10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10C4.815 20 .55 16.053.05 11H8v3l5-4-5-4v3Z"
      fill="#252422"
    />
  </Svg>
);

export default Exit;

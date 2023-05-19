import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowDown = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M10.587 6.193 8 8.78 5.413 6.193a.664.664 0 1 0-.94.94l3.06 3.06c.26.26.68.26.94 0l3.06-3.06c.26-.26.26-.68 0-.94a.678.678 0 0 0-.946 0Z"
      fill="#210C0F"
    />
  </Svg>
);

export default ArrowDown;

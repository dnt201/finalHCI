import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Checked = (props: SvgProps) => (
  <Svg width={15} height={15} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#ffc107"
      fillOpacity={1}
      d="M4.875 13.39c-.422 0-.828-.167-1.125-.464L.273 9.449l1.329-1.324 3.273 3.273 8.523-8.523 1.329 1.324L6 12.926a1.594 1.594 0 0 1-1.125.465Zm0 0"
    />
  </Svg>
);

export default Checked;

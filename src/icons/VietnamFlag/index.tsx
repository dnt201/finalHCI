import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const VietnamFlag = (props: SvgProps) => (
  <Svg width={20} height={15} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#d80027"
      fillOpacity={1}
      d="M7.68.676H0v13.336h20V.676Zm0 0"
    />
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#ffda44"
      fillOpacity={1}
      d="m10 3.488.887 2.723h2.863l-2.316 1.684.882 2.726L10 8.937l-2.316 1.684.882-2.726L6.25 6.21h2.863Zm0 0"
    />
  </Svg>
);

export default VietnamFlag;

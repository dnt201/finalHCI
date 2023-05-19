import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const StarFill = (props: SvgProps) => (
  <Svg
    width={props.height || 16}
    height={props.height || 16}
    fill="none"
    {...props}>
    <Path
      d="M9.62 6.667 8.64 3.44c-.193-.633-1.087-.633-1.273 0L6.38 6.667H3.413c-.646 0-.913.833-.386 1.206l2.426 1.734L4.5 12.68c-.193.62.527 1.12 1.04.726L8 11.54l2.46 1.873c.513.393 1.233-.107 1.04-.726l-.953-3.074 2.426-1.733c.527-.38.26-1.207-.386-1.207H9.62v-.006Z"
      fill="#FFC107"
    />
  </Svg>
);

export default StarFill;

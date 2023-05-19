import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const NextArrow = (props: SvgProps) => (
  <Svg width={21} height={8} fill="none" {...props}>
    <Path
      d="M.996 4.493v-1a.5.5 0 0 1 .5-.5h15.505v-2a.5.5 0 0 1 .85-.35l3.001 3a.51.51 0 0 1 0 .71l-3 3a.5.5 0 0 1-.851-.36v-2H1.496a.5.5 0 0 1-.5-.5Z"
      fill="#252422"
    />
  </Svg>
);

export default NextArrow;

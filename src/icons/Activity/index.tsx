import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Activity = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M20 10a10 10 0 0 1-20 0 .833.833 0 0 1 1.667 0A8.334 8.334 0 1 0 10 1.667.833.833 0 0 1 10 0a10.01 10.01 0 0 1 10 10ZM8.564 9.167H6.667a.833.833 0 1 0 0 1.666h1.897a1.661 1.661 0 1 0 2.27-2.269v-2.73a.834.834 0 0 0-1.667 0v2.73c-.25.145-.458.353-.603.603ZM1.522 7.32a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Zm1.996-2.98a.833.833 0 1 0 0-1.668.833.833 0 0 0 0 1.667Zm2.965-1.972a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
      fill="#646464"
    />
  </Svg>
);

export default Activity;

import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const DoubleCheck = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M17.3 7.163a.996.996 0 0 0-1.41 0l-5.64 5.64 1.41 1.41 5.64-5.65c.38-.38.38-1.02 0-1.4Zm4.24-.01-9.88 9.88-3.48-3.47a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0l10.59-10.58a.996.996 0 0 0 0-1.41h-.01a.975.975 0 0 0-1.4-.01Zm-20.42 7.83 4.18 4.18c.39.39 1.02.39 1.41 0l.7-.7-4.88-4.9a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42Z"
      fill="#210C0F"
    />
  </Svg>
);

export default DoubleCheck;

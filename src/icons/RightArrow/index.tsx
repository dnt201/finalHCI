import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const RightArrow = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M9.31 7.573a.996.996 0 0 0 0 1.41l3.88 3.88-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41l-4.59-4.59c-.38-.38-1.02-.38-1.41.01Z"
      fill={props.color || 'black'}
    />
  </Svg>
);

export default RightArrow;

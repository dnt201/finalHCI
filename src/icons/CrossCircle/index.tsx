import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const CrossCircle = (props: SvgProps) => (
  <Svg width={20} height={30} viewBox="0 0 24 24" {...props}>
    <Path d="M16 8a1 1 0 0 0-1.414 0L12 10.586 9.414 8A1 1 0 0 0 8 9.414L10.586 12 8 14.586A1 1 0 0 0 9.414 16L12 13.414 14.586 16A1 1 0 0 0 16 14.586L13.414 12 16 9.414A1 1 0 0 0 16 8Z" />
    <Path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
  </Svg>
);

export default CrossCircle;

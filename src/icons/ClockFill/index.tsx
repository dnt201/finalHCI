import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ClockFill = (props: SvgProps) => (
  <Svg width={20} height={20} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill={props.color || '#252422'}
      fillOpacity={1}
      d="M10 0C4.484 0 0 4.484 0 10s4.484 10 10 10 10-4.484 10-10S15.516 0 10 0Zm2.082 13.61a.832.832 0 0 1-.414.109.83.83 0 0 1-.723-.414l-1.668-2.887A.825.825 0 0 1 9.168 10V5A.83.83 0 0 1 10 4.168a.83.83 0 0 1 .832.832v4.777l1.555 2.692c.23.398.093.91-.305 1.14Zm0 0"
    />
  </Svg>
);

export default ClockFill;

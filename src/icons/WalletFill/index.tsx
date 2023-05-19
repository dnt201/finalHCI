import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 96 960 960" {...props}>
    <Path d="M184.615 856Q157 856 138.5 837.5 120 819 120 791.385v-430.77Q120 333 138.5 314.5 157 296 184.615 296h590.77Q803 296 821.5 314.5 840 333 840 360.615v430.77Q840 819 821.5 837.5 803 856 775.385 856h-590.77ZM160 543.693h640v-95.386H160v95.386Z" />
  </Svg>
);
export default SvgComponent;

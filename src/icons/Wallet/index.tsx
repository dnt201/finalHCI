import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 96 960 960" {...props}>
    <Path d="M840 360.615v430.77Q840 819 821.5 837.5 803 856 775.385 856h-590.77Q157 856 138.5 837.5 120 819 120 791.385v-430.77Q120 333 138.5 314.5 157 296 184.615 296h590.77Q803 296 821.5 314.5 840 333 840 360.615Zm-680 87.692h640v-87.692q0-9.23-7.692-16.923Q784.615 336 775.385 336h-590.77q-9.23 0-16.923 7.692Q160 351.385 160 360.615v87.692Zm0 95.386v247.692q0 9.23 7.692 16.923Q175.385 816 184.615 816h590.77q9.23 0 16.923-7.692Q800 800.615 800 791.385V543.693H160ZM160 816V336v480Z" />
  </Svg>
);
export default SvgComponent;

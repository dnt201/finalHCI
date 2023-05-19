import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 96 960 960" {...props}>
    <Path d="M264.615 936Q237 936 218.5 917.5 200 899 200 871.385v-430.77Q200 413 218.5 394.5 237 376 264.615 376H340v-20q0-58.308 40.846-99.154T480 216q58.308 0 99.154 40.846T620 356v20h75.385Q723 376 741.5 394.5 760 413 760 440.615v430.77Q760 899 741.5 917.5 723 936 695.385 936h-430.77Zm0-40h430.77q9.23 0 16.923-7.692Q720 880.615 720 871.385v-430.77q0-9.23-7.692-16.923Q704.615 416 695.385 416H620v100q0 8.538-5.731 14.269Q608.539 536 600 536t-14.269-5.731Q580 524.538 580 516V416H380v100q0 8.538-5.731 14.269Q368.539 536 360 536t-14.269-5.731Q340 524.538 340 516V416h-75.385q-9.23 0-16.923 7.692Q240 431.385 240 440.615v430.77q0 9.23 7.692 16.923Q255.385 896 264.615 896ZM380 376h200v-20q0-42.231-28.885-71.115Q522.231 256 480 256q-42.231 0-71.115 28.885Q380 313.769 380 356v20ZM240 896V416v480Z" />
  </Svg>
);
export default SvgComponent;

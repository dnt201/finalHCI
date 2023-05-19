import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const DateSolid = (props: SvgProps) => (
  <Svg width={17} height={16} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#8A8A8A">
      <Path d="M14.5 1.333h-2V0h-1.333v1.333H5.833V0H4.5v1.333h-2a2 2 0 0 0-2 2V16h16V3.333a2 2 0 0 0-2-2Zm-12.667 2a.667.667 0 0 1 .667-.666h12a.667.667 0 0 1 .667.666v2H1.833v-2Zm0 11.334v-8h13.334v8H1.833Z" />
      <Path d="M11.833 8.667H10.5V10h1.333V8.667ZM9.166 8.667H7.833V10h1.333V8.667ZM6.5 8.667H5.167V10H6.5V8.667ZM11.833 11.333H10.5v1.334h1.333v-1.334ZM9.166 11.333H7.833v1.334h1.333v-1.334ZM6.5 11.333H5.167v1.334H6.5v-1.334Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DateSolid;

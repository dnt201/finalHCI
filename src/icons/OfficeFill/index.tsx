import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const OfficeFill = (props: SvgProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#252422">
      <Path d="M8.687 2.11 1.36.997c-.34-.053-.687.04-.947.26C.153 1.484 0 1.81 0 2.15v14.047c0 .367.3.667.667.667h2.166v-3.5c0-.647.52-1.167 1.167-1.167h1.667c.646 0 1.166.52 1.166 1.167v3.5h2.834v-13.6c0-.574-.414-1.06-.98-1.154Zm-5.02 8.587h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm3.333 6H6a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2H6a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2H6a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2H6a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1ZM15.08 8.092l-4.747-.994v9.766h4.5c.643 0 1.167-.524 1.167-1.167V9.232c0-.551-.376-1.02-.92-1.14Zm-1.58 6.772h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Zm0-2h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .863)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default OfficeFill;

import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const Info = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 16.667A.833.833 0 1 1 10 15a.833.833 0 0 1 0 1.667Zm1.608-6.245a1.65 1.65 0 0 0-.775 1.459v.619a.834.834 0 0 1-1.666 0v-.62a3.295 3.295 0 0 1 1.636-2.916 1.667 1.667 0 0 0 .834-1.77 1.687 1.687 0 0 0-1.334-1.33A1.666 1.666 0 0 0 8.333 7.5a.833.833 0 0 1-1.666 0 3.333 3.333 0 1 1 4.941 2.92v.002Z"
        fill="#252422"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Info;

import * as React from 'react';
import Svg, {SvgProps, Defs, ClipPath, Path, G} from 'react-native-svg';

const GermanyFlag = (props: SvgProps) => (
  <Svg width={20} height={14} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path d="M0 0h20v13.602H0Zm0 0" />
      </ClipPath>
      <ClipPath id="b">
        <Path d="M0 9h20v4.602H0Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path
        stroke="none"
        fillRule="nonzero"
        fill="#d80027"
        fillOpacity={1}
        d="M20 .012H0V13.59h20Zm0 0"
      />
    </G>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#000"
      fillOpacity={1}
      d="M20 .012H0v4.527h20Zm0 0"
    />
    <G clipPath="url(#b)">
      <Path
        stroke="none"
        fillRule="nonzero"
        fill="#ffda44"
        fillOpacity={1}
        d="M20 9.063H0v4.527h20Zm0 0"
      />
    </G>
  </Svg>
);

export default GermanyFlag;

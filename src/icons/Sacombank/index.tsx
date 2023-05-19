import * as React from 'react';
import Svg, {SvgProps, Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const Sacombank = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path fill="url(#a)" d="M0 .863h24v24H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.00444)" />
      </Pattern>
      <Image id="b" width={225} height={225} />
    </Defs>
  </Svg>
);

export default Sacombank;

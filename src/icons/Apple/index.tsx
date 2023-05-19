import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const AppleFill = (props: SvgProps) => (
  <Svg width={24} height={30} fill="none" {...props}>
    <G>
      <Path
        d="M17.363 12.625c.027 3.027 2.608 4.034 2.637 4.047-.022.071-.412 1.435-1.36 2.845-.819 1.218-1.669 2.432-3.008 2.457-1.316.025-1.739-.794-3.243-.794-1.504 0-1.974.769-3.22.819-1.292.05-2.276-1.318-3.102-2.532C4.38 16.984 3.09 12.451 4.822 9.391c.86-1.52 2.397-2.482 4.066-2.507 1.269-.025 2.467.869 3.243.869.775 0 2.23-1.075 3.761-.917.641.027 2.44.263 3.594 1.984-.093.059-2.146 1.275-2.123 3.805ZM14.89 5.193c.686-.845 1.148-2.022 1.022-3.193-.99.04-2.185.67-2.895 1.516-.635.748-1.192 1.946-1.042 3.093 1.103.087 2.229-.57 2.915-1.416"
        fill="#210C0F"
      />
    </G>
    <Defs />
  </Svg>
);

export default AppleFill;

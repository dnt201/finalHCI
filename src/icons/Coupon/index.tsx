import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const Coupon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#646464">
      <Path d="M20 13.333v-.108a1.683 1.683 0 0 0-1.277-1.617 1.667 1.667 0 0 1 0-3.216A1.683 1.683 0 0 0 20 6.776v-.108A4.172 4.172 0 0 0 15.833 2.5H2.5A2.5 2.5 0 0 0 0 5v1.775a1.683 1.683 0 0 0 1.277 1.617 1.667 1.667 0 0 1 0 3.216A1.683 1.683 0 0 0 0 13.224V15a2.5 2.5 0 0 0 2.5 2.5h13.333A4.171 4.171 0 0 0 20 13.333ZM1.667 15l.052-1.786a3.334 3.334 0 0 0-.052-6.439V5a.833.833 0 0 1 .833-.833h3.333v1.666a.833.833 0 0 0 1.667 0V4.167h8.333a2.5 2.5 0 0 1 2.5 2.5l-.052.119A3.342 3.342 0 0 0 15.833 10a3.392 3.392 0 0 0 2.5 3.244v.09a2.5 2.5 0 0 1-2.5 2.5H7.5v-1.667a.833.833 0 1 0-1.667 0v1.666H2.5A.833.833 0 0 1 1.667 15Z" />
      <Path d="M7.5 10.834V9.167a.833.833 0 0 0-1.667 0v1.667a.833.833 0 1 0 1.667 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="rotate(90 10 10)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Coupon;

import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ATMCard = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M23.5 5.363v1H.5v-1a1 1 0 0 1 1-1h21a1 1 0 0 1 1 1ZM.5 20.363v-9h23v9a1 1 0 0 1-1 1h-21a1 1 0 0 1-1-1Z"
      fill="#FFC107"
    />
    <Path d="M23.5 7.363H.5v3h23v-3Z" fill="#210C0F" />
  </Svg>
);

export default ATMCard;

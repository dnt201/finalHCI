import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Facebook = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M9.999 0C4.477 0 0 4.504 0 10.06c0 5.021 3.656 9.182 8.437 9.94v-7.03h-2.54v-2.91h2.54V7.844c0-2.524 1.493-3.915 3.776-3.915 1.094 0 2.24.196 2.24.196V6.6h-1.264c-1.24 0-1.628.777-1.628 1.573v1.886h2.771l-.443 2.91h-2.328v7.03c4.781-.754 8.437-4.916 8.437-9.938C19.998 4.504 15.521 0 9.999 0Z"
      fill="#2962FF"
    />
  </Svg>
);

export default Facebook;

import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const TrashFill = (props: SvgProps) => (
  <Svg width={20} height={20} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#252422"
      fillOpacity={1}
      d="M14.168 3.332V1.668C14.168.746 13.422 0 12.5 0h-5c-.922 0-1.668.746-1.668 1.668v1.664H1.668V5h1.664v12.5c0 1.379 1.121 2.5 2.5 2.5h8.336c1.379 0 2.5-1.121 2.5-2.5V5h1.664V3.332Zm-5 10.836H7.5v-5h1.668Zm3.332 0h-1.668v-5H12.5Zm0-10.836h-5V1.668h5Zm0 0"
    />
  </Svg>
);

export default TrashFill;

import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const NotifyActive = (props: SvgProps) => (
  <Svg width={25} height={25} {...props}>
    <Path
      fill="none"
      strokeWidth={1}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#8a8a8a"
      strokeOpacity={1}
      strokeMiterlimit={4}
      d="M18.406 14.01a2.356 2.356 0 0 0-1.884-2.304V7.325c0-3.49-2.834-6.325-6.319-6.325C6.72 1 3.884 3.834 3.884 7.325v4.381A2.356 2.356 0 0 0 2 14.01a2.356 2.356 0 0 0 2.353 2.35h11.7c1.3 0 2.353-1.056 2.353-2.35Zm0 0"
      transform="scale(1.25)"
    />
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#ea4e1b"
      fillOpacity={1}
      d="M18.75 1.25C22.293 1.25 25 3.957 25 7.5s-2.707 6.25-6.25 6.25-6.25-2.707-6.25-6.25 2.707-6.25 6.25-6.25Zm0 0"
    />
    <Path
      fill="none"
      strokeWidth={1}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      stroke="#8a8a8a"
      strokeOpacity={1}
      strokeMiterlimit={4}
      d="M10.203 19.375c1.422 0 2.65-.878 3.16-2.128h-6.32a3.414 3.414 0 0 0 3.16 2.128Zm0 0"
      transform="scale(1.25)"
    />
  </Svg>
);

export default NotifyActive;

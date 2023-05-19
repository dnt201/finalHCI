import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const StarFillV2 = (props: SvgProps) => (
  <Svg width={20} height={20} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#252422"
      fillOpacity={1}
      d="m4.152 20-1.101-.832 1.996-6.05L0 9.777V8.331h6.621l1.8-5.832h1.49l1.8 5.832h6.621V9.77l-5.047 3.433 2.031 5.98-1.156.801-4.992-3.859ZM14.855 6.605l-.402-.3.727-2.266-1.848-1.027V2.5h2.418l.652-2.5h.54l.656 2.5H20v.508L18.168 4.07l.734 2.239-.414.289-1.812-1.399Zm0 0"
    />
  </Svg>
);

export default StarFillV2;

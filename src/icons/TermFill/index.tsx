import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const TermFill = (props: SvgProps) => (
  <Svg width={20} height={20} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#252422"
      fillOpacity={1}
      d="M9.168 14.582a5.414 5.414 0 0 1 9.164-3.902V2.5a2.5 2.5 0 0 0-2.5-2.5h-10a4.171 4.171 0 0 0-4.164 4.168v11.664c0 2.3 1.867 4.164 4.164 4.168h8.75a5.415 5.415 0 0 1-5.414-5.418Zm-3.336-8.75c0-.457.375-.832.836-.832h6.664c.461 0 .836.375.836.832 0 .461-.375.836-.836.836H6.668a.837.837 0 0 1-.836-.836Zm13.922 13.922a.825.825 0 0 1-1.176 0L16.57 17.75a3.692 3.692 0 0 1-1.988.582 3.751 3.751 0 1 1 3.75-3.75c0 .707-.203 1.395-.582 1.988l2.004 2.008a.825.825 0 0 1 0 1.176Zm0 0"
    />
  </Svg>
);

export default TermFill;

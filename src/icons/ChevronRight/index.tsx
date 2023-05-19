import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 96 960 960" {...props}>
    <Path d="M354.924 781.076q-8.693-8.692-8.693-21.076t8.693-21.076L517.847 576 354.924 413.076q-8.693-8.692-8.693-21.076t8.693-21.076q8.692-8.693 21.076-8.693t21.076 8.693l179.769 179.769q5.616 5.615 7.923 11.846 2.308 6.23 2.308 13.461t-2.308 13.461q-2.307 6.231-7.923 11.846L397.076 781.076q-8.692 8.693-21.076 8.693t-21.076-8.693Z" />
  </Svg>
);
export default SvgComponent;

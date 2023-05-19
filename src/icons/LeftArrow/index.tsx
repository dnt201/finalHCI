import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const LeftArrow = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M14.9097 7.57375C14.5197 7.18375 13.8897 7.18375 13.4997 7.57375L8.90969 12.1638C8.51969 12.5538 8.51969 13.1838 8.90969 13.5738L13.4997 18.1637C13.8897 18.5537 14.5197 18.5537 14.9097 18.1637C15.2997 17.7737 15.2997 17.1438 14.9097 16.7537L11.0297 12.8637L14.9097 8.98375C15.2897 8.59375 15.2897 7.95375 14.9097 7.57375Z"
      fill="#210C0F"
    />
  </Svg>
);

export default LeftArrow;

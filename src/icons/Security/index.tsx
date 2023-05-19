import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SecurityFill = (props: SvgProps) => (
  <Svg width={20} height={20} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill={props.color || '#252422'}
      fillOpacity={1}
      d="M16.621 2.203 10 .008 3.379 2.203a2.491 2.491 0 0 0-1.711 2.371V10c0 6.27 7.664 9.734 7.992 9.875l.297.133.305-.102c.332-.11 8.07-2.758 8.07-9.906V4.574a2.491 2.491 0 0 0-1.71-2.37Zm-6.25 9.453a1.553 1.553 0 0 1-1.113.461H9.23a1.551 1.551 0 0 1-1.12-.5l-1.922-2L7.39 8.465l1.87 1.953 4.317-4.32 1.176 1.18Zm0 0"
    />
  </Svg>
);

export default SecurityFill;

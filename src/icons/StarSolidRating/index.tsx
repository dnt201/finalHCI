import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={19}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.335 7.168 10.62 1.52c-.338-1.108-1.901-1.108-2.228 0L6.665 7.168H1.474C.342 7.168-.125 8.626.797 9.28l4.247 3.033-1.669 5.378c-.338 1.085.922 1.96 1.82 1.272L9.5 15.696l4.306 3.278c.898.689 2.158-.186 1.82-1.271l-1.669-5.378 4.247-3.034c.921-.665.455-2.111-.677-2.111h-5.192v-.012Z"
      fill="#EEE"
    />
  </Svg>
);

export default SvgComponent;

import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="#2e2e2e"
    stroke="#2e2e2e"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
  </Svg>
);
export default SvgComponent;

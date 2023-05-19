import * as React from 'react';
import {SVGProps} from 'react';

import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    viewBox="0 0 50 20"
    width={50}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fill="#BFBFBF"
      d="M1.511 15.5V3.864h4.591c.883 0 1.635.168 2.256.505a3.424 3.424 0 0 1 1.42 1.392c.33.591.495 1.273.495 2.046 0 .773-.167 1.454-.5 2.045a3.449 3.449 0 0 1-1.45 1.381c-.628.33-1.39.494-2.283.494H3.114V9.756h2.528c.474 0 .864-.082 1.17-.245a1.62 1.62 0 0 0 .694-.687c.155-.296.233-.635.233-1.017 0-.387-.078-.724-.233-1.012a1.556 1.556 0 0 0-.694-.676c-.31-.163-.704-.244-1.181-.244H3.97V15.5h-2.46Zm12.569.165c-.557 0-1.053-.097-1.49-.29a2.397 2.397 0 0 1-1.033-.87c-.25-.386-.375-.867-.375-1.443 0-.484.089-.891.267-1.221.178-.33.42-.595.727-.795.307-.201.655-.353 1.046-.455a7.969 7.969 0 0 1 1.238-.216 31.4 31.4 0 0 0 1.227-.148c.311-.049.537-.12.677-.216a.475.475 0 0 0 .21-.42v-.034c0-.36-.114-.638-.341-.835-.224-.197-.542-.296-.955-.296-.435 0-.782.097-1.04.29-.257.19-.427.428-.51.716l-2.24-.182c.114-.53.338-.989.671-1.375.333-.39.763-.69 1.29-.898.53-.212 1.144-.318 1.84-.318.486 0 .95.057 1.393.17.447.114.843.29 1.187.529.349.239.623.545.824.92.2.372.301.817.301 1.336V15.5H16.7v-1.21h-.068c-.14.273-.328.513-.563.721a2.605 2.605 0 0 1-.846.483c-.33.114-.71.17-1.143.17Zm.693-1.67c.356 0 .67-.07.943-.21a1.67 1.67 0 0 0 .642-.58c.155-.243.233-.518.233-.824v-.927c-.076.05-.18.095-.313.137a5.692 5.692 0 0 1-.437.108c-.163.03-.326.059-.489.085l-.443.063a2.991 2.991 0 0 0-.744.199 1.19 1.19 0 0 0-.494.369.9.9 0 0 0-.177.568c0 .33.12.581.358.756.243.17.55.255.92.255Zm8.52-10.131V15.5h-2.42V3.864h2.42Z"
    />
    <Path
      fill="#9997FF"
      d="M25.232 15.5V6.773h2.306v1.54h.103c.181-.512.485-.915.909-1.21.424-.296.931-.444 1.522-.444.599 0 1.108.15 1.529.449.42.295.7.697.84 1.205h.092c.178-.5.5-.9.966-1.2.47-.302 1.024-.454 1.664-.454.815 0 1.476.26 1.983.779.512.515.767 1.246.767 2.193V15.5H35.5v-5.392c0-.485-.13-.849-.387-1.091s-.58-.364-.966-.364c-.44 0-.782.14-1.028.42-.246.277-.37.643-.37 1.098V15.5h-2.346v-5.443c0-.428-.123-.77-.37-1.023-.242-.254-.562-.38-.96-.38-.268 0-.51.068-.727.204-.212.133-.38.32-.505.562a1.788 1.788 0 0 0-.188.841V15.5h-2.42Zm18.537.17c-.883 0-1.646-.187-2.29-.562a3.849 3.849 0 0 1-1.483-1.58c-.349-.678-.523-1.464-.523-2.357 0-.902.174-1.69.523-2.364a3.804 3.804 0 0 1 1.483-1.58c.644-.379 1.407-.568 2.29-.568.882 0 1.643.19 2.284.568.644.375 1.14.902 1.488 1.58.349.674.523 1.462.523 2.364 0 .893-.174 1.68-.523 2.357a3.838 3.838 0 0 1-1.488 1.58c-.64.375-1.402.563-2.284.563Zm.01-1.874c.402 0 .738-.114 1.006-.341.27-.232.472-.546.609-.944.14-.397.21-.85.21-1.358 0-.507-.07-.96-.21-1.358-.137-.397-.34-.712-.608-.943-.27-.23-.605-.346-1.006-.346-.406 0-.746.115-1.023.346-.273.231-.48.546-.62.943-.136.398-.204.85-.204 1.358 0 .508.068.96.205 1.358.14.398.346.713.62.944.276.227.616.34 1.022.34Z"
    />
  </Svg>
);
export default SVGComponent;

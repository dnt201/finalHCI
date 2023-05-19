import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CashFill = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M21.952 5.863H2.048c-.278 0-.545.114-.741.316A1.092 1.092 0 0 0 1 6.94v11.846c0 .286.11.56.307.762.196.202.463.315.74.315h19.905c.278 0 .545-.113.741-.315.197-.202.307-.476.307-.762V6.94c0-.285-.11-.56-.307-.761a1.034 1.034 0 0 0-.74-.316Zm0 10.231c0 .286-.11.56-.307.762a1.033 1.033 0 0 1-.74.315.516.516 0 0 0-.37.158.546.546 0 0 0-.154.38c0 .286-.11.56-.307.762a1.033 1.033 0 0 1-.74.315H4.666c-.278 0-.545-.113-.741-.315a1.092 1.092 0 0 1-.307-.762.546.546 0 0 0-.153-.38.517.517 0 0 0-.37-.158c-.279 0-.545-.113-.742-.315a1.092 1.092 0 0 1-.306-.762V9.633c0-.286.11-.56.306-.762.197-.202.463-.315.741-.315a.517.517 0 0 0 .37-.158.546.546 0 0 0 .154-.38c0-.286.11-.56.307-.762.196-.202.463-.316.74-.316h14.667c.278 0 .545.114.741.316.197.202.307.476.307.761 0 .143.055.28.153.38a.517.517 0 0 0 .37.159c.279 0 .545.113.741.315.197.202.307.476.307.762v6.461Z"
      fill="#FFC107"
    />
    <Path d="M12 14.863a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#FFC107" />
    <Path
      d="M19.412 7.863H4.588c0 .442-.167.866-.465 1.179A1.551 1.551 0 0 1 3 9.53v6.667c.421 0 .825.175 1.123.488.298.312.465.736.465 1.178h14.824c0-.442.167-.866.465-1.178A1.551 1.551 0 0 1 21 16.197V9.53c-.421 0-.825-.176-1.123-.488a1.71 1.71 0 0 1-.465-1.179ZM6.706 13.42H5.118a.517.517 0 0 1-.375-.163.57.57 0 0 1-.155-.393.57.57 0 0 1 .155-.393.517.517 0 0 1 .375-.162h1.588c.14 0 .275.058.374.162a.57.57 0 0 1 .155.393.57.57 0 0 1-.155.393.517.517 0 0 1-.374.163ZM12 16.197a3.071 3.071 0 0 1-1.765-.562 3.304 3.304 0 0 1-1.17-1.496 3.487 3.487 0 0 1-.18-1.926c.122-.647.425-1.24.869-1.707a3.133 3.133 0 0 1 1.626-.912 3.038 3.038 0 0 1 1.836.19c.58.252 1.076.68 1.425 1.227a3.45 3.45 0 0 1 .536 1.852c0 .884-.335 1.732-.93 2.357a3.103 3.103 0 0 1-2.247.977Zm6.882-2.778h-1.588a.517.517 0 0 1-.374-.163.57.57 0 0 1-.155-.393.57.57 0 0 1 .155-.393.517.517 0 0 1 .374-.162h1.588c.14 0 .275.058.375.162a.57.57 0 0 1 .155.393.57.57 0 0 1-.155.393.517.517 0 0 1-.375.163Z"
      fill="#FFC107"
    />
  </Svg>
);

export default CashFill;
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 96 960 960" {...props}>
    <Path d="M240 896q-16.077 0-28.039-11.961Q200 872.077 200 856V496q0-9.769 4.269-17.923 4.269-8.154 11.577-13.77l240-181.538q5.615-4.154 11.462-5.846 5.846-1.692 12.692-1.692t12.692 1.692q5.847 1.692 11.462 5.846l240 181.538q7.308 5.616 11.577 13.77T760 496v360q0 16.077-11.961 28.039Q736.077 896 720 896H552.308V640.615H407.692V896H240Z" />
  </Svg>
);
export default SvgComponent;

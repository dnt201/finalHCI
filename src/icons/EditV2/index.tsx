import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const EditV2 = (props: SvgProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#FFC107">
      <Path d="M15.541 10.603a.42.42 0 0 0-.42.419v3.724a1.26 1.26 0 0 1-1.257 1.258H2.097a1.26 1.26 0 0 1-1.258-1.258V3.817A1.26 1.26 0 0 1 2.097 2.56H5.82a.42.42 0 1 0 0-.838H2.097A2.1 2.1 0 0 0 0 3.817v10.929a2.1 2.1 0 0 0 2.097 2.096h11.767a2.1 2.1 0 0 0 2.096-2.096v-3.724a.42.42 0 0 0-.419-.42Z" />
      <Path d="M6.558 8.395 12.68 2.27l1.975 1.975-6.124 6.124-1.974-1.975ZM5.559 11.37l2.182-.605-1.578-1.578-.604 2.183ZM15.2 1.234a1.05 1.05 0 0 0-1.482 0l-.445.445 1.975 1.975.445-.445a1.05 1.05 0 0 0 0-1.483l-.492-.492Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .863)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EditV2;

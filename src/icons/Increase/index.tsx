import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const InCrease = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      d="M15.395.002H4.605A4.618 4.618 0 0 0 0 4.607v10.79a4.618 4.618 0 0 0 4.605 4.605h10.79A4.618 4.618 0 0 0 20 15.397V4.607A4.619 4.619 0 0 0 15.395.002Zm-1.288 10.862H11.07a.175.175 0 0 0-.164.11.176.176 0 0 0-.014.067v3.04a.893.893 0 1 1-1.786 0v-3.04a.177.177 0 0 0-.178-.177H5.893a.893.893 0 1 1 0-1.787H8.93a.176.176 0 0 0 .178-.178V5.864a.893.893 0 0 1 1.786 0v3.035a.177.177 0 0 0 .178.182h3.036a.893.893 0 0 1 0 1.787v-.004Z"
      fill={props.color || '#210C0F'}
    />
  </Svg>
);

export default InCrease;

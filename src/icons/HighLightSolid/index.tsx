import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const HighLightSolid = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      d="M9.803 15.815c-.16-.033-.908.096-1.622-.288a.293.293 0 1 0-.278.516c.06.032.122.062.183.089-.598.263-1.081.737-1.363 1.437-.268-.655-.727-1.153-1.364-1.438.65-.29 1.102-.797 1.364-1.438.056.139.107.235.11.239a.293.293 0 0 0 .521-.266c0-.004-.356-.652-.314-1.513a.319.319 0 0 0-.261-.354.323.323 0 0 0-.372.245c-.021.091.13 1.674-1.018 2.408-.747.477-1.596.329-1.754.364-.334.076-.334.554 0 .63.156.035 1.021-.112 1.77.374 1.11.724.987 2.264.994 2.333 0 .361.517.443.63.09.04-.12-.123-1.647.974-2.398.722-.495 1.617-.376 1.773-.393.357-.04.388-.56.027-.637ZM19.686 10.099c-.536-.06-4.354.477-6.023-3.027-.877-1.843-.652-3.514-.7-3.723a.36.36 0 0 0-.391-.28.357.357 0 0 0-.324.345v.76c-.132 2.614-1.321 4.839-3.82 5.622-1.442.453-2.694.257-2.928.308-.374.085-.377.624.004.709.327.069 2.787-.33 4.697 1.256a.293.293 0 1 0 .374-.45c-.655-.545-1.44-.934-2.34-1.16 2.367-.596 3.819-2.285 4.375-4.65.551 2.35 1.991 4.055 4.383 4.648-2.368.592-3.84 2.28-4.387 4.64-.203-.866-.543-1.693-1.053-2.416a.293.293 0 1 0-.478.338c.18.255.341.532.48.825.829 1.739.682 3.508.694 3.679.031.436.742.457.72-.081-.04-.972.035-4.263 2.694-5.825 1.793-1.053 3.79-.745 4.055-.805.402-.091.358-.67-.032-.713ZM6.418 5.279c-.198-.041-1.762.236-2.461-1.174-.329-.661-.306-1.397-.301-1.489a.323.323 0 0 0-.634-.108c-.02.091.13 1.674-1.017 2.408-.722.46-1.564.341-1.722.359-.357.04-.386.555-.033.635.17.038 1.018-.115 1.77.374.8.522.967 1.48.995 2.011.004.303-.01.338.014.412a.324.324 0 0 0 .308.227c.161 0 .292-.12.318-.266.018-.1-.06-.862.31-1.599a.293.293 0 0 0-.523-.263 3.04 3.04 0 0 0-.103.228c-.268-.656-.727-1.154-1.364-1.439.65-.29 1.101-.797 1.363-1.438.262.646.71 1.15 1.363 1.44-.064.027-.128.059-.192.093a.293.293 0 1 0 .28.515c.69-.374 1.446-.272 1.602-.29.359-.04.386-.56.027-.636Z"
      fill="#000"
    />
  </Svg>
);

export default HighLightSolid;

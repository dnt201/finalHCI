import {extendTheme} from 'native-base';
import {baseSizes} from './sizes';
import {baseColors} from './colors';
import {baseButtonStyle} from './buttonTheme';
import {baseInputTheme} from './inputTheme';
import {baseFontWeight, baseFontSize, baseText} from './textThem';
import {modalTheme} from './modal';

export const theme = extendTheme({
  colors: baseColors,
  config: {
    initialColorMode: 'light',
  },
  components: {
    ScrollView: {
      showsVerticalScrollIndicator: false,
      showsHorizontalScrollIndicator: false,
    },
    Button: baseButtonStyle,
    Input: baseInputTheme,
    Modal: modalTheme,
    Text: baseText,
  },

  sizes: baseSizes,
  fontSizes: baseFontSize,
  fontWeights: baseFontWeight,
  breakpoints: {base: 0, sm: 480, md: 768, lg: 992, xl: 1280},
});

export type CustomThemeType = typeof theme;

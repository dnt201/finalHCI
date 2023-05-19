import {baseColors} from './colors';
import {baseSizes} from './sizes';

const initialTextStyles = {
  fontSize: baseSizes[13],
  fontWeight: '400',
};

const initialStyles = {
  paddingY: baseSizes[10],
  paddingX: baseSizes[20],
};

const initialBorder = {
  borderRadius: baseSizes[30],
};

const baseInputTheme = {
  variants: {
    primary: () => {
      return {
        ...initialStyles,
        bg: baseColors.line,
        ...initialBorder,
        _text: {
          color: baseColors.body[100],
          ...initialTextStyles,
        },
        _important: {
          bg: baseColors.line,
          ...initialBorder,
          _text: {
            color: baseColors.body[100],
            ...initialTextStyles,
          },
        },
      };
    },
    default: () => {
      return {
        ...initialStyles,
        _important: {
          _focus: {
            borderColor: baseColors.primary[100],
            backgroundColor: baseColors.white[100],
          },
          borderColor: baseColors.secondary[100],
          invalidOutlineColor: baseColors.secondary[100],
          focusOutlineColor: baseColors.primary[100],
        },
        borderWidth: baseSizes[1],
        borderRadius: baseSizes[10],
        _text: {
          color: baseColors.body[100],
          ...initialTextStyles,
        },
      };
    },
    search: () => {
      return {
        ...initialStyles,
        bg: baseColors.line,
        borderRadius: baseSizes[10],
        _text: {
          color: baseColors.body[100],
          ...initialTextStyles,
        },
        _important: {
          bg: baseColors.line,
          ...initialBorder,
          _text: {
            color: baseColors.body[100],
            ...initialTextStyles,
          },
        },
      };
    },
  },
};

export {baseInputTheme};

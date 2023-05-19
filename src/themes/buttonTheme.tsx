import {baseColors} from './colors';
import {baseSizes} from './sizes';

const initialTextStyles = {
  _important: {fontSize: 14},
  fontWeight: '500',
};

const initialStyles = {
  width: '100%',
  borderRadius: baseSizes[16],
  color: '#fff',
  useForeground: true,
  _pressed: {
    opacity: 0.5,
  },
};

const baseButtonStyle = {
  variants: {
    primary: () => {
      return {
        bg: baseColors.primary[100],
        borderColor: baseColors.primary[100],
        borderWidth: baseSizes[1],
        text: baseColors.white,
        _text: {
          ...initialTextStyles,
          color: '#fff',
        },
        ...initialStyles,
        color: '#fff',
      };
    },
    primaryRadius: () => {
      return {
        bg: baseColors.primary[100],
        borderColor: baseColors.primary[100],
        borderWidth: baseSizes[1],
        _text: {
          color: '#fff',
          _important: {fontSize: 14},
          fontWeight: 500,
        },
        ...initialStyles,
        borderRadius: 32,
        height: 40,
      };
    },
    primary_disable: () => {
      return {
        ...initialStyles,

        _text: {
          color: '#000',
          ...initialTextStyles,
        },
        bg: baseColors.smoke,
        opacity: 0.6,
      };
    },

    primary_outline: () => {
      return {
        bg: 'transparent',
        borderColor: baseColors.primary[100],
        borderWidth: baseSizes[1],
        _text: {
          color: baseColors.primary[100],
          ...initialTextStyles,
        },
        ...initialStyles,
      };
    },

    primary_outline_disable: () => {
      return {
        bg: 'transparent',
        borderColor: baseColors.primary[100],
        borderWidth: baseSizes[1],
        opacity: 0.6,
        _text: {
          color: baseColors.black[100],
          ...initialTextStyles,
        },
        ...initialStyles,
      };
    },
    secondary: () => {
      return {
        bg: baseColors.secondary[100],
        borderColor: baseColors.secondary[100],
        borderWidth: baseSizes[1],
        _text: {
          color: baseColors.white[100],
          ...initialTextStyles,
        },
        ...initialStyles,
      };
    },
    secondary_disable: () => {
      return {
        bg: baseColors.secondary[100],
        opacity: 0.6,
        _text: {
          color: baseColors.white[100],
          ...initialTextStyles,
        },
        ...initialStyles,
      };
    },
    secondary_outline: () => {
      return {
        bg: 'transparent',
        borderColor: baseColors.secondary[100],
        borderWidth: baseSizes[1],
        _text: {
          color: baseColors.secondary[100],
          ...initialTextStyles,
        },
        ...initialStyles,
      };
    },
    secondary_outline_disable: () => {
      return {
        bg: 'transparent',
        borderColor: baseColors.secondary[100],
        borderWidth: baseSizes[1],
        opacity: 0.6,
        _text: {
          color: baseColors.secondary[100],
          ...initialTextStyles,
        },
        ...initialStyles,
      };
    },
    rounded: () => {
      return {
        borderRadius: baseSizes[30],
        width: '100%',
        h: '40',
        bg: 'transparent',
        _text: {
          color: baseColors.body[100],
          fontSize: '16',
        },
        _pressed: {
          bg: baseColors.primary[100],
          _text: {
            color: baseColors.secondary[100],
            fontWeight: '700',
            fontSize: '14',
          },
        },
      };
    },
    loginAnotherMethod: () => {
      return {
        ...initialStyles,
        bg: 'transparent',
        height: '45',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        width: '25%',
      };
    },
    primaryRound: () => {
      return {
        ...initialStyles,
        height: '45',
        bg: baseColors.primary[100],
        borderRadius: 32,
        color: '#fff',
      };
    },
    smokeRound: () => {
      return {
        ...initialStyles,
        height: '45',
        bg: baseColors.smoke,
        borderRadius: 32,
      };
    },
    noStyle: () => {
      return {
        ...initialStyles,
      };
    },
  },
};

export {baseButtonStyle};

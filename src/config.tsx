import { Dimensions, Platform } from 'react-native';

export const color = {
  primary: '#456b7d',
  white: '#fff',
};

export const border = {
  width: {
    thin: 0.5,
    medium: 1,
    thick: 2,
  },
  radius: {
    default: 6,
    rounded: '50%',
  },
};

export const spacing = {
  'spacing-01': 2,
  'spacing-02': 4,
  'spacing-03': 8,
  'spacing-04': 12,
  'spacing-05': 16,
  'spacing-06': 24,
  'spacing-07': 32,
  'spacing-08': 40,
  'spacing-09': 48,
};

export const fontSize = {
  'size-01': 12,
  'size-02': 14,
  'size-03': 16,
  'size-04': 20,
  'size-05': 24,
};

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const defaultNavigationOptions = {
  headerTintColor: color.white,
  headerStyle: {
    backgroundColor: color.primary,
  },
};
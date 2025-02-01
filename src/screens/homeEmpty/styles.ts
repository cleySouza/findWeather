import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Theme.colors.dark,
  },
  contentTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  title400: {
    fontSize: 33,
    color: Theme.colors.white,
    textAlign: 'center',
    fontFamily: Theme.fonts.regular,
  },
  title600: {
    fontSize: 33,
    color: Theme.colors.white,
    textAlign: 'center',
    fontFamily: Theme.fonts.bold,
  },
  buttonText: {
    fontSize: 22,
    color: Theme.colors.gray100,
    textAlign: 'center',
    fontFamily: Theme.fonts.regular,
    textDecorationLine: 'underline',
  },
});

import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: Theme.colors.gray600,
    borderRadius: 18,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 40,
  },
  content: {
    alignItems: 'center',
    width: '26%',
  },
  textContent: {
    fontSize: 16,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.white,
  },
  textSecondaryContent: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.gray400,
  },
  divisor: {
    width: 1,
    height: '70%',
    backgroundColor: Theme.colors.gray600,
  },
});

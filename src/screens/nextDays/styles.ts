import {Platform, StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.dark,
  },
  content: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 20,
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  title: {
    fontSize: 16,
    color: Theme.colors.white,
    textAlign: 'center',
    fontFamily: Theme.fonts.regular,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Theme.colors.gray600,
    borderWidth: 1,
    height: 40,
    width: 40,
  },
});

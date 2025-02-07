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
  formContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 40,
    gap: 10,
  },
  inputContent: {
    width: '85%',
    height: 49,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.dark400,
    paddingHorizontal: 15,
    borderRadius: 11,
    gap: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.white,
    width: '100%',
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
  buttonSearch: {
    width: 48,
    height: 48,
    backgroundColor: Theme.colors.dark400,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

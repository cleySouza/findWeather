import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: Theme.colors.dark100,
    borderRadius: 20,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  contentTemp: {
    flexDirection: 'row',
  },
  temp: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: 30,
    marginTop: 3,
  },
  grau: {
    fontSize: 18,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.white,
  },
  image: {
    width: 45,
    height: 45,
  },
  climate: {
    color: Theme.colors.gray100,
    fontFamily: Theme.fonts.regular,
    fontSize: 18,
    marginTop: -15,
    marginBottom: 10,
  },
  city: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.regular,
    fontSize: 18,
  },
});

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
  image: {
    marginTop: 40,
    marginBottom: -60,
  },
  Title: {
    fontSize: 33,
    color: Theme.colors.white,
    textAlign: 'center',
    fontFamily: 'Overpass Bold',
  },
  content: {
    marginTop: -60,
    alignItems: 'center',
  },
  brandContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brand: {
    fontSize: 22,
    fontFamily: 'Overpass Regular',
    textAlign: 'center',
    lineHeight: 27,
    color: Theme.colors.gray100,
  },
  brandBold: {
    fontSize: 22,
    fontFamily: 'Overpass Bold',
    lineHeight: 27,
    color: Theme.colors.gray100,
  },
  button: {
    width: '100%',
    backgroundColor: Theme.colors.dark300,
    borderColor: Theme.colors.gray300,
    borderRadius: 18,
    borderWidth: 1,
    padding: 12,
    marginBottom: -60,
  },
  textButton: {
    fontSize: 22,
    fontFamily: 'Overpass Regular',
    textAlign: 'center',
    color: Theme.colors.white,
  },
});

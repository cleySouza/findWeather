import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  daysofweek: {
    fontFamily: Theme.fonts.regular,
    fontSize: 16,
    color: Theme.colors.white,
  },
  monthofweek: {
    fontFamily: Theme.fonts.regular,
    fontSize: 16,
    color: Theme.colors.gray100,
  },
  contentClimateDay: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  textClimateDay: {
    fontFamily: Theme.fonts.regular,
    fontSize: 16,
    color: Theme.colors.gray100,
  },
  contentTemperature: {
    flexDirection: 'row',
    width: '19%',
    justifyContent: 'space-between',
  },
  maxTemperature: {
    fontFamily: Theme.fonts.regular,
    fontSize: 16,
    color: Theme.colors.white,
  },
  minTemperature: {
    fontFamily: Theme.fonts.regular,
    fontSize: 16,
    color: Theme.colors.gray100,
  },
});

import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.dark,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 15,
  },
  iconLocation: {
    fontSize: 18,
    color: Theme.colors.white,
    marginTop: 2,
  },
  titleHeader: {
    fontSize: 18,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.white,
  },
  subtitleHeader: {
    fontSize: 18,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.gray100,
  },
  temperature: {
    fontSize: 70,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.white,
  },
  textClimate: {
    fontSize: 30,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.gray100,
  },
  contentDay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
    marginBottom: 15,
  },
  contentDayText: {
    fontSize: 20,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.white,
  },
  contentDayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contentDayButtonText: {
    fontSize: 16,
    fontFamily: Theme.fonts.semibold,
    color: Theme.colors.gray100,
  },
});

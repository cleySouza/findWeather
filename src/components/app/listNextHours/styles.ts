import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

export const styles = StyleSheet.create({
    contentNextHours: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cardNextHours: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        backgroundColor: Theme.colors.dark300,
        borderColor: Theme.colors.dark100,
        borderRadius: 20,
        marginRight: 10,
    },
    textNextHoursTemp: {
        fontSize: 18,
        fontFamily: Theme.fonts.bold,
        color: Theme.colors.white,
    },
    textNextHours: {
        fontSize: 12,
        fontFamily: Theme.fonts.bold,
        color: Theme.colors.gray100,
    },
});

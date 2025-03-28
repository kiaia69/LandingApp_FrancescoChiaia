import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import typography from '../../constants/typography';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
    },
    textContainer: {
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        gap: 18,
    },
    title: {
        lineHeight: 45,
        fontWeight: 'bold',
        fontSize: 38,
        color: colors.textDark,
        paddingBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        color: colors.textDark,
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 23,
    },
    buttonStarted: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.buttonPrimary,
        borderRadius: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 50,
        paddingRight: 50,
        gap: 8
    },
    buttonWorking: {
        backgroundColor: colors.buttonSecondary,
        alignItems: 'center',
        borderColor: colors.buttonPrimary,
        borderWidth: 1,
        paddingHorizontal: 50,
        paddingVertical: 18,
        borderRadius: 20,
    },
    buttonTextStarted: {
        color: colors.textLight,
        fontSize: typography.fontSize.lg,
        fontWeight: '600',
    },
    buttonTextWorking: {
        color: colors.buttonPrimary,
        fontSize: typography.fontSize.lg,
        fontWeight: '600',
    },
    icon: {
    },
    image: {
        marginTop: 28,
    },
    link: {
        color: "blue",
        textAlign: "center"
    },
});

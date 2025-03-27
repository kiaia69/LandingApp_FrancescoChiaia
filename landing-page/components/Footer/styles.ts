import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import typography from '../../constants/typography';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.textDark,
        display: "flex",
        flexDirection: "column",
        paddingTop: 24,
        paddingBottom: Platform.OS === "android" ? 24 : 28,
        paddingLeft: 20,
        paddingRight: 20,
    },
    socialIcons: {
        flexDirection: "row",
        padding: 10,
        paddingLeft: 15,
        gap: 14,
        marginBottom: 10,
    },
    iconContainer: {
        backgroundColor: "#4E4D4D",
        padding: 8,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconInstagram: {
        width: 16,
        height: 16,
    },
    iconDribbble: {
        width: 16,
        height: 16,
    },
    iconGithub: {
        width: 16,
        height: 16,
    },
    iconTwitter: {
        width: 16,
        height: 16,
    },
    copyright: {
        color: colors.textLight,
        fontWeight: "400",
        paddingLeft: 15,
        fontSize: 14,
        paddingBottom: 30,
    },
});
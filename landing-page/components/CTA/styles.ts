import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        gap: 40,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
    text: {
        paddingTop: 60,
        paddingRight: 30,
        paddingLeft: 30,
        gap: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        color: colors.textDark,
        textAlign: "center",
        width: "90%",
        lineHeight: 40,
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        color: colors.textDark,
        textAlign: "center",
        width: "90%",
    },
    button: {
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
    buttonText: {
        color: "white",
        fontSize: typography.fontSize.md,
        fontWeight: "600",
    },
    image: {
    },
    icon: {
    }
});

import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundLight,
        paddingTop: 60,
        paddingRight: 30,
        paddingLeft: 30,  
        paddingBottom: 60,
        gap: 40,
        alignItems: "center",
    },
    title: {
        fontSize: 38,
        fontWeight: 700,
        color: "#000000",
        textAlign: "center",
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        paddingHorizontal: 20,
        color: colors.textDark,
        textAlign: "center",
    },
    iconList: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    icon: {
        marginHorizontal: 8,
    },
    button: {
        backgroundColor: colors.buttonPrimary,
        paddingTop: 16,
        paddingRight: 50,
        paddingBottom: 16,
        paddingLeft: 50,
        borderRadius: 20,
        marginTop: 10,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: typography.fontSize.md,
        fontWeight: "600",
    },
});

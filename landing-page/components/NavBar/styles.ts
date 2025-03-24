import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },
    button: {
        backgroundColor: colors.buttonPrimary,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 40,
        paddingVertical: 18,
        borderRadius: 20,
    },
    buttonText: {
        color: colors.textLight,
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.lg,
        marginRight: 8,
    },
});
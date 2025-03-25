import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundLight, 
        padding: 30,
        alignItems: "center",
    },
    title: {
        fontSize: 38,
        fontWeight: 600,
        color: "#00000",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        fontWeight: "400",
        color: colors.textDark,
        textAlign: "center",
        marginBottom: 40,
    },
    listContainer: {
        alignItems: "center",
    },
    card: {
        backgroundColor: "white",
        paddingTop: 40,
        paddingRight: 35,
        paddingLeft: 35,
        paddingBottom: 40,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#3366FF0D",
        shadowOpacity: 0.1,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#E5F4F2",
    },
    avatar: {
        width: 90,
        height: 90,
        marginBottom: 10,
    },
    name: {
        fontSize: 21,
        fontWeight: 600,
        color: "#111827",
        marginBottom: 5,
    },
    role: {
        fontSize: typography.fontSize.md,
        color: "#374151",
        marginBottom: 15,
    },
    description: {
        fontSize: typography.fontSize.md,
        color: colors.textDark,
        textAlign: "center",
        marginBottom: 10,
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        width: "100%",
        marginTop: 10,
        color: colors.buttonPrimary
    },
    social: {
        color: colors.buttonPrimary,
        fontSize: typography.fontSize.sm,
        fontWeight: "700"
    }
});

import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background, 
        padding: 30,
        alignItems: "center",
    },
    title: {
        paddingTop: 20,
        lineHeight: 40,
        fontSize: 38,
        fontWeight: 700,
        color: "#00000",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        fontWeight: 400,
        color: colors.textDark,
        textAlign: "center",
        paddingHorizontal: 10,
        marginBottom: 20,
        lineHeight: 23,
    },
    listContainer: {
        alignItems: "center",
    },
    card: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 40,
        paddingRight: 18,
        paddingLeft: 18,
        paddingBottom: 40,
        marginBottom: 40,
        alignItems: "center",
        width: 280,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 21,
        fontWeight: 600,
        color: "#111827",
    },
    role: {
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: typography.fontSize.sm,
        color: "#374151",
        marginBottom: 10,
    },
    review: {
        fontSize: typography.fontSize.md,
        color: colors.textDark,
        textAlign: "center",
        marginBottom: 15,
        lineHeight: 23,
    },
    starsContainer: {
        paddingTop: 10,
        flexDirection: "row",
        gap: 3,
    },
    icon: {
        width: 24
    }
});

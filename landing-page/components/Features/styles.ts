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
    fontWeight: 700,
    color: colors.textDark,
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 21,
    fontWeight: 400,
    color: colors.textDark,
    textAlign: "center",
    marginBottom: 20,
    maxWidth: 300,
  },
  featureItem: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E5F4F2",
    marginTop: 8
  },
  icon: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 15,
  },  
  featureText: {
    alignContent: "center",
    justifyContent: "flex-start",
    fontSize: 22,
    color: colors.textDark,
  },
  image: {
    marginTop: 28,        
    }
});

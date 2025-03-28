import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tv from "../../assets/icons/LogoTv.png";
const NavBar = () => {

    const handlePress = () => {
        Linking.openURL("https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples")
    }

    return (
        <View style={styles.container}>
            <Image source={tv} style={styles.icon} resizeMode="contain" />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Get Started</Text>
                <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar;
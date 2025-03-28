import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import rocket from "../../assets/icons/RocketLaunch.png";

const CTA = () => {

    const handlePress = () => {
        Linking.openURL("https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples")
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>Get Landing Page UI Kit Today!</Text>
                <Text style={styles.subtitle}>
                    Break Figma limits and explore the endless possibilities with Anima.
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Image source={rocket} style={styles.icon} resizeMode="contain" />
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

            <Image
                source={require("../../assets/images/phonev3.png")}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

export default CTA;

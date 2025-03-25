import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import rocket from "../../assets/icons/RocketLaunch.png";

const CTA = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>Get Landing Page UI Kit Today!</Text>
                <Text style={styles.subtitle}>
                    Break Figma limits and explore the endless possibilities with Anima.
                </Text>
            </View>

            <TouchableOpacity style={styles.button}>
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

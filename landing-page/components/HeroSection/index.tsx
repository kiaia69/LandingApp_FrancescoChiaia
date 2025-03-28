import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { styles } from "./styles";
import phone from "../../assets/images/phone.png";
import rocket from "../../assets/icons/RocketLaunch.png";

const HeroSection = () => {

    const handlePress = () => {
        Linking.openURL("https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples")
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Create {"\n"}Engaging {"\n"} Landing Pages</Text>
                <Text style={styles.subtitle}>
                    Build beautiful landing pages in record {"\n"} time with{" "}
                    <Text style={styles.link} onPress={handlePress}>Anima</Text>
                    's Landing Page UI kit for {"\n"} Figma. No code required!
                </Text>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStarted} onPress={handlePress}>
                    <Image source={rocket} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.buttonTextStarted}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWorking} onPress={handlePress}>
                    <Text style={styles.buttonTextWorking}>How it works</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={phone}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

export default HeroSection;
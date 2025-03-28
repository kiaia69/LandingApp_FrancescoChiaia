import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { styles } from "./styles";

const Footer = () => {
    const openLink = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <View style={styles.socialIcons}>
                <TouchableOpacity onPress={() => openLink("https://www.instagram.com/animaapp/")}>
                    <Image source={require("../../assets/icons/instagram.png")} style={styles.iconInstagram} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openLink("https://dribbble.com/animaapp")}>
                    <Image source={require("../../assets/icons/dribbble.png")} style={styles.iconDribbble} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openLink("https://github.com/AnimaApp")}>
                    <Image source={require("../../assets/icons/github.png")} style={styles.iconGithub} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openLink("https://twitter.com/animaapp")}>
                    <Image source={require("../../assets/icons/twitter.png")} style={styles.iconTwitter} />
                </TouchableOpacity> 
            </View>

            <Text style={styles.copyright}>© 2023 Anima's Landing Page UI Kit.</Text>
        </View>
    );
};

export default Footer;

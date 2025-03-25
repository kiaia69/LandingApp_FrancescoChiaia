import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles";

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.socialIcons}>
                <Image source={require("../../assets/icons/SocialLinks.png")} />
                 {/*
                <View style={styles.iconContainer} >
                <Image source={require("../../assets/icons/instagram.png")} style={styles.iconInstagram} />
                </View>
                <View style={styles.iconContainer} >
                <Image source={require("../../assets/icons/dribbble.png")} style={styles.iconDribbble} />
                </View>
                <View style={styles.iconContainer} >
                <Image source={require("../../assets/icons/github.png")} style={styles.iconGithub} />
                </View>
                <View style={styles.iconContainer} >
                <Image source={require("../../assets/icons/twitter.png")} style={styles.iconTwitter} />
                </View>                            
                */}
            </View>
            <Text style={styles.copyright}>© 2023 Anima's Landing Page UI Kit.</Text>
        </View>
    );
};

export default Footer;

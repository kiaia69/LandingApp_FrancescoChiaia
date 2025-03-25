import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tv from "../../assets/icons/LogoTv.png";
const NavBar = () => {
    return (
        <View style={styles.container}>
            <Image source={tv} style={styles.icon} resizeMode="contain" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
                <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar;
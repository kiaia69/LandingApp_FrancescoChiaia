import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavBar = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="television-classic" size={32} color="black" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
                <MaterialCommunityIcons name="arrow-right" size={20} color="white"  />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar;
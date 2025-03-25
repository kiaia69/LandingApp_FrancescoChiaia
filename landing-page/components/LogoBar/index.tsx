import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const integrationsData = [
    { id: "1", icon: require("../../assets/icons/Logo.png") },
    { id: "2", icon: require("../../assets/icons/Logov2.png") },
    { id: "3", icon: require("../../assets/icons/Logov3.png") },
    { id: "4", icon: require("../../assets/icons/Logov4.png") },
    { id: "5", icon: require("../../assets/icons/Logov5.png") },
    { id: "6", icon: require("../../assets/icons/Logov6.png") },
];

const Integrations = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>More than 50 Integrations</Text>
            <Text style={styles.subtitle}>
                We integrate with more than 50 apps you use daily
            </Text>

            <FlatList
                data={integrationsData}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.iconList}
                renderItem={({ item }) => (
                    <Image source={item.icon} style={styles.icon} resizeMode="contain" />
                )}
            />

                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View All Integrations</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Integrations;

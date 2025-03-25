import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./styles";
import phone from "../../assets/images/phonev2.png";


const featuresData = [
    { id: "1", icon: require("../../assets/icons/ufo.png"), text: "Fast building" },
    { id: "2", icon: require("../../assets/icons/magic.png"), text: "Easy to edit" },
    { id: "3", icon: require("../../assets/icons/square.png"), text: "Responsiveness" },
    { id: "4", icon: require("../../assets/icons/box.png"), text: "No code needed" },
];

const Features = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Our features</Text>
            <Text style={styles.subtitle}>
                Few good reasons why you should use Anima Landing Page UI Kit to make
                your own pages.
            </Text>
            <FlatList
                style={{ width: "95%", paddingTop: 17 }}
                data={featuresData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.featureItem}>
                        <Image source={item.icon} style={styles.icon} resizeMode="contain" />
                        <Text style={styles.featureText}>{item.text}</Text>
                    </View>
                )}
            />
            <Image
                source={phone}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

export default Features;

import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const teamData = [
    {
        id: "1",
        image: require("../../assets/images/picture_profilev3.png"),
        name: "Sarah K.",
        role: "Lead Designer",
        description: "With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.",
        social: {
            twitter: "Twitter",
            dribbble: "Dribbble",
            linkedin: "LinkedIn",
        },
    },
    {
        id: "2",
        image: require("../../assets/images/picture_profilev4.png"),
        name: "Michael L.",
        role: "Product Designer",
        description: "Michael got a sharp eye for detail and the ability to turn any boring interface into a work of art.",
        social: {
            twitter: "Twitter",
            dribbble: "Dribbble",
            linkedin: "LinkedIn",
        },
    },
    {
        id: "3",
        image: require("../../assets/images/picture_profilev5.png"),
        name: "Lauren M.",
        role: "UX Designer",
        description: "Lauren is the mastermind behind all the seamless user experiences you love. She's a wizard at making things intuitive.",
        social: {
            twitter: "Twitter",
            dribbble: "Dribbble",
            linkedin: "LinkedIn",
        },
    },
];

const Team = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meet our team</Text>
            <Text style={styles.subtitle}>
                Get to know the faces behind the scenes and learn about the values that drive us.
            </Text>

            <FlatList
                data={teamData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.avatar} resizeMode="cover" />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.role}>{item.role}</Text>
                        <Text style={styles.description}>{item.description}</Text>

                        {/* Social Icons */}
                        <View style={styles.socialContainer}>
                            <TouchableOpacity>
                                <Text style={styles.social}>{item.social.twitter}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.social}>{item.social.dribbble}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.social}>{item.social.linkedin}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

export default Team;

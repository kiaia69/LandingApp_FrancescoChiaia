import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const testimonialsData = [
    {
        id: "1",
        image: require("../../assets/images/picture_profile.png"),
        name: "Lauren M.",
        role: "UI Designer @Boo",
        review: `"Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."`,
        rating: 5,
    },
    {
        id: "2",
        image: require("../../assets/images/picture_profilev2.png"),
        name: "David B.",
        role: "Lead Designer @Creative",
        review: `"The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster."`,
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Real Stories{"\n"}from Satisfied Customers</Text>
            <Text style={styles.subtitle}>
                See how our landing page UI kit is making an impact.
            </Text>

            <FlatList
                data={testimonialsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.avatar} resizeMode="cover" />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.role}>{item.role}</Text>
                        <Text style={styles.review}>{item.review}</Text>
                        <View style={styles.starsContainer}>
                            {Array.from({ length: item.rating }).map((_, index) => (
                                 <Image key={index} source={require("../../assets/icons/StarIcon.png")} style={styles.icon} resizeMode="contain" />
                            ))}
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

export default Testimonials;

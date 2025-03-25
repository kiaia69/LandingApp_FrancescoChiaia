import { FlatList, Platform } from 'react-native';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import LogoBar from '../components/LogoBar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';



export default function LandingPage() {

  const sections = [
    { id: '1', component: <HeroSection /> },
    { id: '2', component: <Features /> },
    { id: '3', component: <Testimonials /> },
    { id: '4', component: <Team /> },
    { id: '5', component: <LogoBar /> },
    { id: '6', component: <CTA /> },
    { id: '7', component: <Footer /> },
  ];

  return (
      <FlatList
        style={{ flex: 1, marginTop: Platform.OS === "android" ? 0 : -60,
          marginBottom: Platform.OS === "android" ? 0 : -38
        }}
        ListHeaderComponent={<NavBar />}
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
        showsVerticalScrollIndicator={false}
      />

  );
}

import { ScrollView } from 'react-native';
import NavBar from '../components/NavBar';
/*
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import LogoBar from '../components/LogoBar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
*/

export default function LandingPage() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <NavBar />
    </ScrollView>
  );
}

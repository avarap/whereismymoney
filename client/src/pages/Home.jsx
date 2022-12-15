import HeroSection from "../components/herosection/HeroSection";
import NavbarDesktop from "../components/herosection/NavbarDesktop";
import SingleFeatureRight from "../components/herosection/SingleFeatureRight";
import SingleFeatureLeft from "../components/herosection/SingleFeatureLeft";
import CustomerTestimonials from "../components/herosection/CustomerTestimonials";
import Footer from "../components/herosection/Footer";
import CTA from "../components/herosection/CTA";

function Home() {
	
	
	return (
		<>
			<NavbarDesktop />
			<HeroSection />
			<CustomerTestimonials />
			<SingleFeatureRight />
			<SingleFeatureLeft />
			<CTA />
			<Footer />
		</>
	);
}

export default Home;
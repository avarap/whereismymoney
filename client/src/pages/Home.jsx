import HeroSection from "../components/herosection/HeroSection";
import NavbarDesktop from "../components/herosection/NavbarDesktop";
import SingleFeatureRight from "../components/herosection/SingleFeatureRight";
import SingleFeatureLeft from "../components/herosection/SingleFeatureLeft";
import CustomerTestimonials from "../components/herosection/CustomerTestimonials";

function Home() {
	
	
	return (
		<>
			<NavbarDesktop />
			<HeroSection />
			<CustomerTestimonials />
			<SingleFeatureRight />
			<SingleFeatureLeft />
		</>
	);
}

export default Home;
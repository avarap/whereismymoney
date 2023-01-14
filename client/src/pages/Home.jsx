import HeroSection from "../components/homepagecomponents/herosection/HeroSection";
import NavbarDesktop from "../components/homepagecomponents/navbar/Navbar";
import SingleFeatureRight from "../components/homepagecomponents/singlefeatures/SingleFeatureRight";
import SingleFeatureLeft from "../components/homepagecomponents/singlefeatures/SingleFeatureLeft";
import CustomerTestimonials from "../components/homepagecomponents/testimonials/CustomerTestimonials";
import Footer from "../components/homepagecomponents/footer/Footer";
import CTA from "../components/homepagecomponents/cta/CTA";

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
import { HistorySection } from "../components/about/HistorySection"
import { CollaborationSection } from "../components/about/CollaborationSection"
import { ServicesSection } from "../components/about/services/ServicesSection"
import { ProcessSection } from "../components/about/process/ProcessSection"
import { AboutTrustSection } from "../components/about/AboutTrustSection"


const AboutUs = () => {
    return (
        <div>
            <HistorySection />
            <CollaborationSection />
            <ServicesSection />
            <ProcessSection />
            <AboutTrustSection />
        </div>
    )
}

export default AboutUs;

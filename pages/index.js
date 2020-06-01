import { Hero } from "../components/home/hero/Hero"
import { BioSection } from "../components/home/bio/BioSection"
import { ValuesSection } from "../components/home/values/ValuesSection"
import { WorkSection } from "../components/home/work/WorkSection"
import { TrustSection } from "../components/home/trust/TrustSection"

const index = () => {
    return (
        <div>
            <Hero />
            <BioSection />
            <ValuesSection />
            <WorkSection />
            <TrustSection />
        </div>
    )
}

export default index

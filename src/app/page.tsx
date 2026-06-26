import { HeroSection } from '@/components/sections/HeroSection'
import { CredentialsSection } from '@/components/sections/CredentialsSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { WhyGinasSection } from '@/components/sections/WhyGinasSection'
import { ProofSection } from '@/components/sections/ProofSection'
import { VideoSection } from '@/components/sections/VideoSection'
import { FoundationSection } from '@/components/sections/FoundationSection'
import { BrandsSection } from '@/components/sections/BrandsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ActionSection } from '@/components/sections/ActionSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredentialsSection />
      <ProgramsSection />
      <WhyGinasSection />
      <ProofSection />
      <VideoSection />
      <FoundationSection />
      <BrandsSection />
      <FAQSection />
      <ActionSection />
    </>
  )
}

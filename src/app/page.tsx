import { HeroSection } from '@/components/sections/HeroSection'
import { TensionSection } from '@/components/sections/TensionSection'
import { MechanismSection } from '@/components/sections/MechanismSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { ProofSection } from '@/components/sections/ProofSection'
import { ActionSection } from '@/components/sections/ActionSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TensionSection />
      <MechanismSection />
      <ProgramsSection />
      <ProofSection />
      <ActionSection />
    </>
  )
}

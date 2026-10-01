import { HomeHero } from '@/components/home/hero'
import {
  AboutPreview,
  FaqPreview,
  Positioning,
  ProcessBand,
  ResourcesPreview,
  ServicesOverview,
  TestimonialSection,
} from '@/components/home/sections'
import { FinalCta } from '@/components/site/sections'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Positioning />
      <ServicesOverview />
      <AboutPreview />
      <ProcessBand />
      <ResourcesPreview />
      <TestimonialSection />
      <FaqPreview />
      <FinalCta />
    </>
  )
}

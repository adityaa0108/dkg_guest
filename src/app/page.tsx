"use client"

import BirthdayCardHome from '../components/common/BirthdayCardHome'
import HeroSection from '../components/common/HeroSection'
import FrameImageSection from '../components/common/FrameImageSection'
import LevelUp from '../components/common/LevelUp'
import KidsDecorations from '../components/common/KidsDecorations'
import MakeEveryOccasion from '../components/common/MakeEveryOccasion'
import BalloonRingSection from '../components/common/BalloonRingSection'
import StatsSection from '../components/common/StatsSection'
import WeddingExtraSpecial from '../components/common/WeddingExtraSpecial'
import WeddingDecorationSection from '../components/common/WeddingDecorationSection'
import BridalEntryDecorationSection from '../components/common/BridalEntryDecorationSection'
import BachelorsPartyDecorationSection from '../components/common/BachelorsPartyDecorationSection'
import RomanticCoupleExperience from '../components/common/RomanticCoupleExperience'
import AnniversaryDecorationSection from '../components/common/AnniversaryDecorationSection'
import RooftopDecorationSection from '../components/common/RooftopDecorationSection'
import FestivalSpecial from '../components/common/FestivalSpecial'
import SuccessStories from '../components/common/SuccessStories'
import WelcomeToDKGPro from '../components/common/WelcomeToDKGPro'
import ProductCard from '../components/common/ProductCard'
import Header from '../components/navigation/Header'
import CategoryBanner from '../components/common/CategoryBanner'
import EventGrid from '../components/common/EventGrid'
import CardsCategory from '../components/common/CardsCategory'
import SeoCard from '../components/common/SeoCard'
import Footer from '../components/common/Footer'




export default function HomePage() {
  return (
    <main>
      <Header/>
      <HeroSection />
      <FrameImageSection />
      <BirthdayCardHome/>
      <LevelUp />
      <KidsDecorations />
      <MakeEveryOccasion />
      <BalloonRingSection />
      <StatsSection />
      <WeddingExtraSpecial />
      <WeddingDecorationSection />
      <BridalEntryDecorationSection />
      <BachelorsPartyDecorationSection />
      <RomanticCoupleExperience />
      <AnniversaryDecorationSection />
      <RooftopDecorationSection />
      <FestivalSpecial />
      <SuccessStories />
      <WelcomeToDKGPro />
      <SeoCard />
      {/* <CategoryBanner />
      <EventGrid />
      <ProductCard />
      <CardsCategory /> */}
      <Footer />
    </main>
  )
}

"use client"

import BirthdayCardHome from '../components/common/BirthdayCardHome'
import HeroSection from '../components/common/HeroSection'
import LevelUp from '../components/common/LevelUp'
import KidsDecorations from '../components/common/KidsDecorations'
import MakeEveryOccasion from '../components/common/MakeEveryOccasion'
import StatsSection from '../components/common/StatsSection'
import WeddingExtraSpecial from '../components/common/WeddingExtraSpecial'
import RomanticCoupleExperience from '../components/common/RomanticCoupleExperience'
import FestivalSpecial from '../components/common/FestivalSpecial'
import SuccessStories from '../components/common/SuccessStories'
import WelcomeToDKGPro from '../components/common/WelcomeToDKGPro'
import ProductCard from '../components/common/ProductCard'
import CategoryNavigation from '../components/navigation/CategoryNavigation'
import Header from '../components/navigation/Header'
import FirstCard from '../components/product/FirstCard'
import SecondCard from '../components/product/SecondCard'
import ThirdCard from '../components/product/ThirdCard'
import CategoryBanner from '../components/common/CategoryBanner'
import EventGrid from '../components/common/EventGrid'
import CardsCategory from '../components/common/CardsCategory'
import SeoCard from '../components/common/SeoCard'
import Footer from '../components/common/Footer'




export default function HomePage() {
  return (
    <main>
      <Header/>
      <CategoryNavigation/>
      <HeroSection />
      <BirthdayCardHome/>
      <LevelUp />
      <KidsDecorations />
      <MakeEveryOccasion />
      <StatsSection />
      <WeddingExtraSpecial />
      <RomanticCoupleExperience />
      <FestivalSpecial />
      <SuccessStories />
      <WelcomeToDKGPro />
      {/* <FirstCard />
      <SecondCard />
      <ThirdCard /> */}
      {/* <CategoryBanner />
      <EventGrid />
      <ProductCard />
      <CardsCategory /> */}
      <SeoCard />
      <Footer/>
    </main>
  )
}

import Header from '../../components/navigation/Header';
import CategoryNavigation from '../../components/navigation/CategoryNavigation';
import CardsCategory from '../../components/common/CardsCategory';
import Footer from '../../components/common/Footer';

export default function FestivalsPage() {
  return (
    <main>
      <Header />
      <CategoryNavigation />
      <CardsCategory compact />
      <Footer />
    </main>
  );
}

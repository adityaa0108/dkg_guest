import Header from '../../components/navigation/Header';
import VenueBanner from '../../components/venue/VenueBanner';
import VenuePageContent from '../../components/venue/VenuePageContent';
import Footer from '../../components/common/Footer';

export default function VenuePage() {
  return (
    <main>
      <Header />
      <VenueBanner />
      <VenuePageContent />
      <Footer />
    </main>
  );
}

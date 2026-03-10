import Header from '../../components/navigation/Header';
import ContactBanner from '../../components/contact/ContactBanner';
import ContactPageContent from '../../components/contact/ContactPageContent';
import Footer from '../../components/common/Footer';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactBanner />
      <ContactPageContent />
      <Footer />
    </main>
  );
}

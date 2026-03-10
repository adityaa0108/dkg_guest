import Header from '../../../components/navigation/Header';
import ProductDetail from '../../../components/product/ProductDetail';
import Footer from '../../../components/common/Footer';
import FirstCard from '../../../components/product/FirstCard';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  return (
    <main>
      <Header />
      <ProductDetail slug={params.slug} />
      <Footer />
    </main>
  );
}

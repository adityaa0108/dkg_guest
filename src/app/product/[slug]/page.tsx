import Header from '../../../components/navigation/Header';
import CategoryNavigation from '../../../components/navigation/CategoryNavigation';
import ProductDetail from '../../../components/product/ProductDetail';
import Footer from '../../../components/common/Footer';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  return (
    <main>
      <Header />
      <CategoryNavigation />
      <ProductDetail />
      <Footer />
    </main>
  );
}

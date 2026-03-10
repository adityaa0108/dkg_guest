import Header from '../../../../components/navigation/Header';
import CategoryPageContent from '../../../../components/category/CategoryPageContent';
import Footer from '../../../../components/common/Footer';
import { getCategoryData } from '../../../../lib/api/category';

interface SubCategoryPageProps {
  params: {
    mainCategory: string;
    subCategory: string;
  };
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
  const data = await getCategoryData(params.subCategory);

  return (
    <main>
      <Header />
      <CategoryPageContent data={data} />
      <Footer />
    </main>
  );
}

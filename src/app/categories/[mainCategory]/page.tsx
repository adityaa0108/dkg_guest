import Header from '../../../components/navigation/Header';
import SubCategoryItemPageContent from '../../../components/category/SubCategoryItemPageContent';
import Footer from '../../../components/common/Footer';
import { getSubCategoryItemData } from '../../../lib/api/category';

interface CategoryPageProps {
  params: {
    mainCategory: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const data = await getSubCategoryItemData(
    params.mainCategory,
    params.mainCategory,
    params.mainCategory
  );

  return (
    <main>
      <Header />
      <SubCategoryItemPageContent data={data} />
      <Footer />
    </main>
  );
}

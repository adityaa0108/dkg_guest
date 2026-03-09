import Header from '../../../../../components/navigation/Header';
import CategoryNavigation from '../../../../../components/navigation/CategoryNavigation';
import SubCategoryItemPageContent from '../../../../../components/category/SubCategoryItemPageContent';
import Footer from '../../../../../components/common/Footer';
import { getSubCategoryItemData } from '../../../../../lib/api/category';

interface SubCategoryItemPageProps {
  params: {
    mainCategory: string;
    subCategory: string;
    category: string;
  };
}

export default async function SubCategoryItemPage({ params }: SubCategoryItemPageProps) {
  const data = await getSubCategoryItemData(
    params.mainCategory,
    params.subCategory,
    params.category
  );

  return (
    <main>
      <Header />
      <CategoryNavigation />
      <SubCategoryItemPageContent data={data} />
      <Footer />
    </main>
  );
}

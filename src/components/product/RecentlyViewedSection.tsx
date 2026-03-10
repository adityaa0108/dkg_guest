'use client';

import { ProductCard, productsData } from '../common/ProductCard';
import HorizontalScrollContainer from '../common/HorizontalScrollContainer';

interface RecentlyViewedSectionProps {
  /** Product IDs to exclude (e.g. current product). Shows different products. */
  excludeProductIds?: number[];
}

export default function RecentlyViewedSection({ excludeProductIds = [] }: RecentlyViewedSectionProps) {
  const recentlyViewed = productsData
    .filter((p) => !excludeProductIds.includes(p.id))
    .slice(9, 16); // Different slice from Similar Decor (4–12) and CUSTOMIZE (0–8)

  return (
    <div className="mt-12 lg:mt-16 overflow-hidden">
      <div className="bg-[#FAF5F9] rounded-2xl p-6 lg:p-8 border border-purple-100/50 overflow-hidden shadow-sm">
        <h2 className="text-[#582C4A] text-xl lg:text-2xl font-bold mb-6">Recently Viewed</h2>

        <HorizontalScrollContainer className="w-full">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="w-64 min-w-[256px] flex-shrink-0">
              <ProductCard product={product} compact />
            </div>
          ))}
        </HorizontalScrollContainer>
      </div>
    </div>
  );
}

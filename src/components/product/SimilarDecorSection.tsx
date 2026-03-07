'use client';

import { ProductCard, productsData } from '../common/ProductCard';

export default function SimilarDecorSection() {
  return (
    <div className="mt-12 lg:mt-16 overflow-hidden">
      <div className="bg-[#FAF5F9] rounded-2xl p-6 lg:p-8 border border-purple-100/50 overflow-hidden">
        <h2 className="text-[#6B2D5C] text-xl lg:text-2xl font-bold mb-6">Similar Decor</h2>

        <div
          className="customize-scroll overflow-x-auto pb-4 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-6">
            {productsData.slice(4, 12).map((product) => (
              <div key={product.id} className="w-64 min-w-[256px] flex-shrink-0">
                <ProductCard product={product} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

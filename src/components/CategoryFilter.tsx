import React from 'react';
import { categories } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="space-y-4">
        <button
          onClick={() => onCategoryChange('all')}
          className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-50 text-blue-700'
              : 'hover:bg-gray-50'
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <div key={category.id} className="space-y-2">
            <button
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
            {selectedCategory === category.id && (
              <div className="ml-6 space-y-1">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => onCategoryChange(sub)}
                    className={`w-full text-left px-4 py-1.5 text-sm rounded-md transition-colors ${
                      selectedCategory === sub
                        ? 'bg-blue-50 text-blue-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
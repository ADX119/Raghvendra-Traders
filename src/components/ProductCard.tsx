import React from 'react';
import { ShoppingCart, Package, Plus, Minus } from 'lucide-react';
import { Product } from '../types/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  cartQuantity: number;
}

export function ProductCard({ product, onAddToCart, cartQuantity }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.featured && (
          <span className="absolute top-4 right-4 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-orange-600">{product.category}</span>
          <span className="flex items-center text-gray-500 text-sm">
            <Package className="w-4 h-4 mr-1" />
            {product.weight}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
            {product.stock < 20 && (
              <span className="ml-2 text-xs text-red-600">Low Stock</span>
            )}
          </div>
          {cartQuantity > 0 ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onAddToCart({ ...product, quantity: -1 })}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-medium text-gray-900">{cartQuantity}</span>
              <button
                onClick={() => onAddToCart(product)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
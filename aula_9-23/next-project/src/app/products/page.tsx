'use client';

import { useState, useEffect } from 'react';
import { getProducts, createProduct, Product } from '../services/apiAxios';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    price: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newProduct.name || !newProduct.price) {
      setError('Name and price are required!');
      return;
    }
    
    try {
      setIsSubmitting(true);
      await createProduct(newProduct);
      // Reset form
      setNewProduct({
        name: '',
        image: '',
        price: '',
        description: ''
      });
      setError(null);
      // Refresh product list
      fetchProducts();
    } catch (err) {
      setError('Failed to create product. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to organize products into pyramid rows
  const createPyramidRows = (products: Product[]) => {
    if (!products.length) return [];
    
    const rows = [];
    let rowIndex = 0;
    let itemsInCurrentRow = 1;
    let startIdx = 0;
    
    while (startIdx < products.length) {
      // Get slice of products for current row (or remaining products if not enough)
      const rowProducts = products.slice(startIdx, startIdx + itemsInCurrentRow);
      rows.push({ rowIndex, products: rowProducts });
      
      // Update counters for next row
      startIdx += itemsInCurrentRow;
      rowIndex++;
      itemsInCurrentRow++;
    }
    
    return rows;
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Catalog</h1>
      
      {/* Star-shaped Form Container */}
      <div className="mb-16 relative flex justify-center items-center">
        <div className="star-form-container relative w-full max-w-2xl h-96">
          {/* Star Shape Background */}
          <div className="absolute inset-0 bg-yellow-400 z-0" style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}></div>
          
          {/* Form Content */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-xl font-bold mb-2   text-center text-blue-800">Add New Product</h2>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-3 text-sm w-full max-w-xs text-center">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-2 w-full max-w-xs">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Product Name*"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border border-blue-800 px-3 py-1 text-sm"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border border-blue-800 px-3 py-1 text-sm"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Price*"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border border-blue-800 px-3 py-1 text-sm"
                  required
                />
              </div>
              
              <div>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  rows={2}
                  className="block w-full rounded-md border border-blue-800 px-3 py-1 text-sm"
                />
              </div>
              
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-1 px-4 rounded-full text-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'Adding...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Pyramid Product List */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">Products Pyramid</h2>
        
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center">No products found. Add your first product above!</p>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            {createPyramidRows(products).map((row) => (
              <div 
                key={row.rowIndex} 
                className="flex justify-center space-x-4" 
              >
                {row.products.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
                    style={{
                      width: `${Math.max(180, 280 - row.rowIndex * 20)}px`,
                      height: `${Math.max(210, 310 - row.rowIndex * 20)}px`
                    }}
                  >
                    {product.image && (
                      <div className="h-20 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="p-3 text-white">
                      <h3 className="text-lg font-bold truncate">{product.name}</h3>
                      <p className="font-bold my-1 text-yellow-300">${product.price}</p>
                      {product.description && (
                        <p className="text-sm mt-1 text-white opacity-80 line-clamp-2">{product.description}</p>
                      )}
                      <p className="text-xs mt-1 text-white opacity-70">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
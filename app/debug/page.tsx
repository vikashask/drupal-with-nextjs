import { fetchCategories, fetchProducts } from '@/lib/fetchDrupal';

export default async function DebugPage() {
  try {
    const [products, categories] = await Promise.all([
      fetchProducts(), 
      fetchCategories()
    ]);

    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Debug Data</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Products ({products.length})</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">
            {JSON.stringify(products, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Categories ({categories.length})</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">
            {JSON.stringify(categories, null, 2)}
          </pre>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6 text-red-600">Debug Error</h1>
        <pre className="bg-red-100 p-4 rounded text-sm">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </div>
    );
  }
}
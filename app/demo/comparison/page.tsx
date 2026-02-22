'use client';

import { useState, useEffect } from 'react';

interface RenderData {
  timestamp: string;
  randomNumber: number;
  requestId: string;
}

export default function ComparisonPage() {
  const [csrData, setCsrData] = useState<RenderData | null>(null);
  const [csrLoading, setCsrLoading] = useState(true);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    setCsrLoading(true);
    setTimeout(() => {
      setCsrData({
        timestamp: new Date().toISOString(),
        randomNumber: Math.floor(Math.random() * 1000),
        requestId: Math.random().toString(36).substring(7),
      });
      setCsrLoading(false);
    }, 1000);
  }, [refreshCount]);

  const handleRefreshCSR = () => {
    setRefreshCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
            🎯 SSR vs ISR vs CSR Comparison
          </h1>
          <p className="text-center text-gray-600 text-lg mb-8">
            Side-by-side comparison of all three rendering methods in Next.js
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="font-bold text-blue-800 mb-2">📋 How to Use This Comparison:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Open each demo page in separate browser tabs</li>
              <li>Refresh all tabs at the same time and compare timestamps</li>
              <li>Notice how SSR changes immediately, ISR stays cached, and CSR shows loading</li>
              <li>For ISR: Wait 30+ seconds and refresh to see the update</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">SSR</h2>
                <span className="text-3xl">🔄</span>
              </div>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Always fresh data</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Great SEO</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Slower response</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>High server load</span>
                </div>
              </div>
              <a
                href="/demo/ssr"
                target="_blank"
                className="block w-full text-center bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Open SSR Demo →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">ISR</h2>
                <span className="text-3xl">⚡</span>
              </div>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Super fast (cached)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Low server load</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300">~</span>
                  <span>Periodic updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Can be stale</span>
                </div>
              </div>
              <a
                href="/demo/isr"
                target="_blank"
                className="block w-full text-center bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Open ISR Demo →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">CSR</h2>
                <span className="text-3xl">💻</span>
              </div>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Highly interactive</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Low server load</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Poor SEO</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Loading states</span>
                </div>
              </div>
              <a
                href="/demo/csr"
                target="_blank"
                className="block w-full text-center bg-white text-green-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Open CSR Demo →
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Performance Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-bold">Metric</th>
                    <th className="text-center py-3 px-4 font-bold text-indigo-600">SSR</th>
                    <th className="text-center py-3 px-4 font-bold text-purple-600">ISR</th>
                    <th className="text-center py-3 px-4 font-bold text-green-600">CSR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Initial Load Speed</td>
                    <td className="text-center py-3 px-4">🟡 Medium</td>
                    <td className="text-center py-3 px-4">🟢 Fast</td>
                    <td className="text-center py-3 px-4">🔴 Slow</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Data Freshness</td>
                    <td className="text-center py-3 px-4">🟢 Real-time</td>
                    <td className="text-center py-3 px-4">🟡 Periodic</td>
                    <td className="text-center py-3 px-4">🟢 Real-time</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Server Load</td>
                    <td className="text-center py-3 px-4">🔴 High</td>
                    <td className="text-center py-3 px-4">🟢 Low</td>
                    <td className="text-center py-3 px-4">🟢 Low</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">SEO Quality</td>
                    <td className="text-center py-3 px-4">🟢 Excellent</td>
                    <td className="text-center py-3 px-4">🟢 Excellent</td>
                    <td className="text-center py-3 px-4">🔴 Poor</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Scalability</td>
                    <td className="text-center py-3 px-4">🔴 Difficult</td>
                    <td className="text-center py-3 px-4">🟢 Easy</td>
                    <td className="text-center py-3 px-4">🟢 Easy</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Cost</td>
                    <td className="text-center py-3 px-4">🔴 High</td>
                    <td className="text-center py-3 px-4">🟢 Low</td>
                    <td className="text-center py-3 px-4">🟢 Low</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Interactivity</td>
                    <td className="text-center py-3 px-4">🟡 Medium</td>
                    <td className="text-center py-3 px-4">🟡 Medium</td>
                    <td className="text-center py-3 px-4">🟢 High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 When to Use Each Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-indigo-600 mb-3">Use SSR for:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• User dashboards</li>
                  <li>• Shopping carts</li>
                  <li>• Real-time feeds</li>
                  <li>• Personalized pages</li>
                  <li>• Auth-required content</li>
                  <li>• Stock prices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-600 mb-3">Use ISR for:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Blog posts</li>
                  <li>• Product catalogs</li>
                  <li>• News articles</li>
                  <li>• Documentation</li>
                  <li>• Marketing pages</li>
                  <li>• Event listings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-600 mb-3">Use CSR for:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Admin panels</li>
                  <li>• Interactive charts</li>
                  <li>• User settings</li>
                  <li>• Search results</li>
                  <li>• Chat interfaces</li>
                  <li>• Real-time updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🧪 Live CSR Demo (On This Page)</h3>
            <p className="text-gray-600 mb-4">
              This section demonstrates CSR in action. Click the button to fetch new data client-side:
            </p>
            
            {csrLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-600"></div>
                <span className="ml-4 text-gray-600">Loading client-side data...</span>
              </div>
            ) : csrData ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-xs text-gray-500 mb-1">Client Timestamp</div>
                  <div className="font-mono text-sm font-bold text-gray-800 break-all">
                    {csrData.timestamp}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-xs text-gray-500 mb-1">Random Number</div>
                  <div className="text-3xl font-bold text-gray-800">
                    {csrData.randomNumber}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-xs text-gray-500 mb-1">Request ID</div>
                  <div className="font-mono text-sm font-bold text-gray-800">
                    {csrData.requestId}
                  </div>
                </div>
              </div>
            ) : null}
            
            <button
              onClick={handleRefreshCSR}
              className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              🔄 Refetch Data (Client-Side)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧪 Testing Instructions</h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4">
              <h3 className="font-bold text-indigo-800 mb-2">Test 1: Refresh Speed Test</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Open SSR, ISR, and CSR demos in separate tabs</li>
                <li>Refresh all tabs simultaneously (Cmd+R / Ctrl+R)</li>
                <li>Notice: SSR changes immediately, ISR stays same, CSR shows loading</li>
              </ol>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <h3 className="font-bold text-purple-800 mb-2">Test 2: ISR Revalidation Test</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Open ISR demo and note the timestamp</li>
                <li>Refresh 5 times quickly - timestamp stays the same</li>
                <li>Wait 30+ seconds</li>
                <li>Refresh again - timestamp updates!</li>
              </ol>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h3 className="font-bold text-green-800 mb-2">Test 3: SEO Test</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Right-click on each demo page → "View Page Source"</li>
                <li>SSR & ISR: Data is in HTML (good for SEO)</li>
                <li>CSR: No data in HTML, just loading state (bad for SEO)</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
              <h3 className="font-bold text-yellow-800 mb-2">Test 4: Network Tab Test</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Open DevTools → Network tab</li>
                <li>SSR & ISR: No XHR requests for data (server-rendered)</li>
                <li>CSR: XHR/Fetch request visible (client-side fetch)</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition shadow-lg"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

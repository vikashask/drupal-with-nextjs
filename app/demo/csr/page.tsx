'use client';

import { useEffect, useState } from 'react';

interface CSRData {
  clientTimestamp: string;
  randomNumber: number;
  method: string;
  fetchId: string;
  browserInfo: string;
}

export default function CSRPage() {
  const [data, setData] = useState<CSRData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fetchCount, setFetchCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newData: CSRData = {
        clientTimestamp: new Date().toISOString(),
        randomNumber: Math.floor(Math.random() * 1000),
        method: 'Client-Side Rendering (CSR)',
        fetchId: Math.random().toString(36).substring(7),
        browserInfo: typeof window !== 'undefined' ? navigator.userAgent.split(' ').slice(-2).join(' ') : 'N/A',
      };
      
      setData(newData);
      setFetchCount(prev => prev + 1);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-green-600">
              💻 Client-Side Rendering (CSR)
            </h1>
            <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold">
              CSR
            </span>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>How CSR Works:</strong> This page loads in your browser first, then fetches data using JavaScript. 
              You'll see a loading state, then the data appears. All data fetching happens <strong>client-side</strong> after the initial HTML loads.
            </p>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mb-4"></div>
              <p className="text-gray-600 font-semibold">Loading data from client...</p>
              <p className="text-sm text-gray-500 mt-2">This loading state proves it's CSR!</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <p className="text-red-800 font-semibold">❌ Error: {error}</p>
            </div>
          )}

          {!loading && data && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white">
                  <div className="text-sm font-semibold mb-2 opacity-90">Client Timestamp</div>
                  <div className="text-2xl font-mono font-bold break-all">
                    {data.clientTimestamp}
                  </div>
                  <div className="text-xs mt-2 opacity-75">
                    Generated in your browser
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg p-6 text-white">
                  <div className="text-sm font-semibold mb-2 opacity-90">Random Number</div>
                  <div className="text-5xl font-bold">
                    {data.randomNumber}
                  </div>
                  <div className="text-xs mt-2 opacity-75">
                    Fetched on client-side
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
                  <div className="text-sm font-semibold mb-2 opacity-90">Fetch ID</div>
                  <div className="text-2xl font-mono font-bold">
                    {data.fetchId}
                  </div>
                  <div className="text-xs mt-2 opacity-75">
                    Unique for each fetch
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white">
                  <div className="text-sm font-semibold mb-2 opacity-90">Fetch Count</div>
                  <div className="text-5xl font-bold">
                    {fetchCount}
                  </div>
                  <div className="text-xs mt-2 opacity-75">
                    Times data was fetched
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600">
                  <strong>Browser Info:</strong> {data.browserInfo}
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <button
                  onClick={fetchData}
                  className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🔄 Refetch Data (Client-Side)
                </button>
              </div>
            </>
          )}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">🔍 How to Verify CSR:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Loading State:</strong> You saw a loading spinner when the page first loaded. This proves data is fetched client-side.</li>
              <li><strong>View Page Source:</strong> Right-click → "View Page Source". You'll see the HTML has NO data - just the loading state.</li>
              <li><strong>Network Tab:</strong> Open DevTools → Network tab → Refresh page. You'll see the data fetch happen AFTER the page loads.</li>
              <li><strong>Refetch Button:</strong> Click the "Refetch Data" button above. Data updates without page reload (pure client-side).</li>
              <li><strong>No Server Logs:</strong> Check your terminal - no logs for data fetching (it happens in browser).</li>
            </ol>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Code Implementation:</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// app/demo/csr/page.tsx
'use client' // 👈 This makes it a Client Component

import { useState, useEffect } from 'react'

export default function CSRPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This runs in the browser AFTER page loads
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  return <div>{data}</div>
}`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-800 font-bold mb-2">✅ Pros</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Highly interactive</li>
                <li>• Reduces server load</li>
                <li>• Easy to implement</li>
                <li>• Real-time updates</li>
                <li>• User-triggered fetches</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-red-800 font-bold mb-2">❌ Cons</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Poor SEO</li>
                <li>• Slower initial load</li>
                <li>• Loading states visible</li>
                <li>• Requires JavaScript</li>
                <li>• API keys exposed</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-800 font-bold mb-2">💡 Best For</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Admin dashboards</li>
                <li>• Interactive charts</li>
                <li>• User actions</li>
                <li>• Real-time feeds</li>
                <li>• Private data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/demo/ssr"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Try SSR Demo →
          </a>
          <a
            href="/demo/isr"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Try ISR Demo →
          </a>
          <a
            href="/demo/comparison"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Compare All →
          </a>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>This entire page is rendered in your browser using JavaScript!</p>
          <p className="mt-2">Try clicking "Refetch Data" to see client-side updates without page reload.</p>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISR Demo - Incremental Static Regeneration',
  description: 'Demonstration of Incremental Static Regeneration in Next.js',
};

export const revalidate = 30;

async function getISRData() {
  const generationTimestamp = new Date().toISOString();
  const randomNumber = Math.floor(Math.random() * 1000);
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    generationTimestamp,
    randomNumber,
    method: 'Incremental Static Regeneration (ISR)',
    cacheId: Math.random().toString(36).substring(7),
    revalidateSeconds: 30,
  };
}

export default async function ISRPage() {
  const data = await getISRData();
  
  const renderTimestamp = new Date().toISOString();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-purple-600">
              ⚡ Incremental Static Regeneration (ISR)
            </h1>
            <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold">
              ISR
            </span>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>How ISR Works:</strong> This page is generated once and <strong>cached</strong>. 
              It serves the cached version (super fast!) and regenerates in the background every <strong>30 seconds</strong>. 
              Refresh multiple times quickly - the timestamp stays the same. Wait 30+ seconds, then refresh - it updates!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Generation Timestamp</div>
              <div className="text-2xl font-mono font-bold break-all">
                {data.generationTimestamp}
              </div>
              <div className="text-xs mt-2 opacity-75">
                This stays the same until revalidation
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Random Number (Cached)</div>
              <div className="text-5xl font-bold">
                {data.randomNumber}
              </div>
              <div className="text-xs mt-2 opacity-75">
                Updates only after revalidation
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Cache ID</div>
              <div className="text-2xl font-mono font-bold">
                {data.cacheId}
              </div>
              <div className="text-xs mt-2 opacity-75">
                Identifies this cached version
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Revalidate Period</div>
              <div className="text-5xl font-bold">
                {data.revalidateSeconds}s
              </div>
              <div className="text-xs mt-2 opacity-75">
                Page regenerates after this time
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">🔍 How to Verify ISR:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Quick Refresh Test:</strong> Press Cmd+R (Mac) or Ctrl+R (Windows) 5 times quickly. Notice the timestamp <strong>stays the same</strong> (served from cache).</li>
              <li><strong>Wait & Refresh:</strong> Wait for 30+ seconds, then refresh. The timestamp will update to a new value (page regenerated).</li>
              <li><strong>Speed Test:</strong> Notice how fast the page loads compared to SSR (it's cached!).</li>
              <li><strong>Server Logs:</strong> Check your terminal. You'll see the page generation only happens once initially, then again after 30 seconds when you visit.</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">📊 ISR Timeline Visualization:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="font-mono bg-gray-800 text-white px-3 py-1 rounded">t=0s</span>
                <span className="text-gray-700">First request → Generate page → Cache → Serve (slow)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono bg-green-600 text-white px-3 py-1 rounded">t=5s</span>
                <span className="text-gray-700">Request → Serve cached version ⚡ (fast!)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono bg-green-600 text-white px-3 py-1 rounded">t=15s</span>
                <span className="text-gray-700">Request → Serve cached version ⚡ (fast!)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono bg-orange-600 text-white px-3 py-1 rounded">t=35s</span>
                <span className="text-gray-700">Request → Serve cached + trigger regeneration in background</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono bg-blue-600 text-white px-3 py-1 rounded">t=40s</span>
                <span className="text-gray-700">Request → Serve NEW cached version ⚡ (updated!)</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Code Implementation:</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// app/demo/isr/page.tsx

// Option 1: Route segment config
export const revalidate = 30 // Revalidate every 30 seconds

async function getData() {
  const data = await fetch('https://api.example.com/data')
  return data.json()
}

export default async function ISRPage() {
  const data = await getData()
  return <div>{data}</div>
}

// Option 2: Per-request revalidation
async function getDataAlt() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 30 } // 👈 Revalidate every 30 seconds
  })
  return data.json()
}`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-800 font-bold mb-2">✅ Pros</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Super fast (cached)</li>
                <li>• Low server load</li>
                <li>• Great for SEO</li>
                <li>• Scales easily</li>
                <li>• Cost-effective</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-red-800 font-bold mb-2">❌ Cons</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Data can be stale</li>
                <li>• Not real-time</li>
                <li>• First request slower</li>
                <li>• Complex invalidation</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-800 font-bold mb-2">💡 Best For</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Blog posts</li>
                <li>• Product catalogs</li>
                <li>• News articles</li>
                <li>• Marketing pages</li>
                <li>• Documentation</li>
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
            href="/demo/csr"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Try CSR Demo →
          </a>
          <a
            href="/demo/comparison"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Compare All →
          </a>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Current page render timestamp: <strong>{renderTimestamp}</strong></p>
          <p className="mt-2">Refresh quickly multiple times - timestamp stays same. Wait 30s+ and refresh - it updates!</p>
        </div>
      </div>
    </div>
  );
}

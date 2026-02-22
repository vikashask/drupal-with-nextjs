import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSR Demo - Server-Side Rendering',
  description: 'Demonstration of Server-Side Rendering in Next.js',
};

async function getServerData() {
  const serverTimestamp = new Date().toISOString();
  const randomNumber = Math.floor(Math.random() * 1000);
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    serverTimestamp,
    randomNumber,
    method: 'Server-Side Rendering (SSR)',
    requestId: Math.random().toString(36).substring(7),
  };
}

export default async function SSRPage() {
  const data = await getServerData();
  
  const renderTimestamp = new Date().toISOString();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-indigo-600">
              🔄 Server-Side Rendering (SSR)
            </h1>
            <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold">
              SSR
            </span>
          </div>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>How SSR Works:</strong> This page is rendered on the server for <strong>EVERY request</strong>. 
              The data is fetched on the server, HTML is generated, and sent to your browser. 
              Refresh this page multiple times and watch the timestamps change immediately!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Server Timestamp</div>
              <div className="text-2xl font-mono font-bold break-all">
                {data.serverTimestamp}
              </div>
              <div className="text-xs mt-2 opacity-75">
                Generated on server for this request
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Random Number</div>
              <div className="text-5xl font-bold">
                {data.randomNumber}
              </div>
              <div className="text-xs mt-2 opacity-75">
                Changes on every request
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Request ID</div>
              <div className="text-2xl font-mono font-bold">
                {data.requestId}
              </div>
              <div className="text-xs mt-2 opacity-75">
                Unique for each request
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold mb-2 opacity-90">Render Method</div>
              <div className="text-xl font-bold">
                {data.method}
              </div>
              <div className="text-xs mt-2 opacity-75">
                cache: 'no-store'
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">🔍 How to Verify SSR:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Refresh Test:</strong> Press Cmd+R (Mac) or Ctrl+R (Windows) multiple times. Notice the timestamp changes <strong>immediately</strong> on every refresh.</li>
              <li><strong>View Page Source:</strong> Right-click → "View Page Source". You'll see the data is already in the HTML (not loaded via JavaScript).</li>
              <li><strong>Network Tab:</strong> Open DevTools → Network tab. You won't see XHR/Fetch requests for this data because it's server-rendered.</li>
              <li><strong>Server Logs:</strong> Check your terminal running <code>npm run dev</code>. You'll see logs for every page request.</li>
            </ol>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Code Implementation:</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// app/demo/ssr/page.tsx

async function getServerData() {
  // This runs on the server for EVERY request
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store' // 👈 This makes it SSR
  })
  return data.json()
}

export default async function SSRPage() {
  const data = await getServerData()
  return <div>{data}</div>
}`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-800 font-bold mb-2">✅ Pros</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Always fresh data</li>
                <li>• Great for SEO</li>
                <li>• No loading states</li>
                <li>• Secure (server-only)</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-red-800 font-bold mb-2">❌ Cons</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Slower response time</li>
                <li>• More server load</li>
                <li>• Costs more to scale</li>
                <li>• Waits for all data</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-800 font-bold mb-2">💡 Best For</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• User dashboards</li>
                <li>• Real-time data</li>
                <li>• Personalized content</li>
                <li>• Auth-required pages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/demo/isr"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Try ISR Demo →
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
          <p className="mt-2">Refresh the page and compare timestamps to see SSR in action!</p>
        </div>
      </div>
    </div>
  );
}

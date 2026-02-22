import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Rendering Demo - SSR, ISR, CSR',
  description: 'Complete demonstration of Server-Side Rendering, Incremental Static Regeneration, and Client-Side Rendering in Next.js',
};

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Next.js Rendering Methods
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Complete demonstration with working code examples
          </p>
          <p className="text-lg text-gray-400">
            SSR • ISR • CSR - All explained with proof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a
            href="/demo/ssr"
            className="group bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">🔄</div>
            <h2 className="text-3xl font-bold mb-3">SSR</h2>
            <p className="text-lg font-semibold mb-2">Server-Side Rendering</p>
            <p className="text-sm text-indigo-100 mb-4">
              Fresh data on every request. Perfect for dynamic, real-time content.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Always fresh data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Great SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-300">✗</span>
                <span>Higher server load</span>
              </div>
            </div>
            <div className="mt-6 text-center font-semibold group-hover:translate-x-2 transition-transform">
              Explore SSR Demo →
            </div>
          </a>

          <a
            href="/demo/isr"
            className="group bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">⚡</div>
            <h2 className="text-3xl font-bold mb-3">ISR</h2>
            <p className="text-lg font-semibold mb-2">Incremental Static Regeneration</p>
            <p className="text-sm text-purple-100 mb-4">
              Cached pages that regenerate periodically. Best of both worlds.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Super fast (cached)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Low server load</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-300">~</span>
                <span>Periodic updates</span>
              </div>
            </div>
            <div className="mt-6 text-center font-semibold group-hover:translate-x-2 transition-transform">
              Explore ISR Demo →
            </div>
          </a>

          <a
            href="/demo/csr"
            className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">💻</div>
            <h2 className="text-3xl font-bold mb-3">CSR</h2>
            <p className="text-lg font-semibold mb-2">Client-Side Rendering</p>
            <p className="text-sm text-green-100 mb-4">
              Data fetched in browser. Highly interactive and dynamic.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Highly interactive</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Low server load</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-300">✗</span>
                <span>Poor SEO</span>
              </div>
            </div>
            <div className="mt-6 text-center font-semibold group-hover:translate-x-2 transition-transform">
              Explore CSR Demo →
            </div>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            📊 Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4 text-indigo-300">SSR</th>
                  <th className="text-center py-3 px-4 text-purple-300">ISR</th>
                  <th className="text-center py-3 px-4 text-green-300">CSR</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Speed</td>
                  <td className="text-center py-3 px-4">🟡 Medium</td>
                  <td className="text-center py-3 px-4">🟢 Fast</td>
                  <td className="text-center py-3 px-4">🔴 Slow</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Data Freshness</td>
                  <td className="text-center py-3 px-4">🟢 Real-time</td>
                  <td className="text-center py-3 px-4">🟡 Periodic</td>
                  <td className="text-center py-3 px-4">🟢 Real-time</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">SEO</td>
                  <td className="text-center py-3 px-4">🟢 Excellent</td>
                  <td className="text-center py-3 px-4">🟢 Excellent</td>
                  <td className="text-center py-3 px-4">🔴 Poor</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Server Load</td>
                  <td className="text-center py-3 px-4">🔴 High</td>
                  <td className="text-center py-3 px-4">🟢 Low</td>
                  <td className="text-center py-3 px-4">🟢 Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a
            href="/demo/comparison"
            className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Side-by-Side Comparison</h3>
              <span className="text-4xl">🎯</span>
            </div>
            <p className="text-orange-100 mb-4">
              Compare all three methods with live examples and detailed testing instructions.
            </p>
            <div className="font-semibold">
              View Comparison →
            </div>
          </a>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Documentation</h3>
              <span className="text-4xl">📚</span>
            </div>
            <p className="text-blue-100 mb-4">
              Complete guide with code examples, testing methods, and best practices.
            </p>
            <a
              href="https://nextjs.org/docs/app/building-your-application/rendering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold hover:underline"
            >
              Read Official Docs →
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">🧪 How to Test & Verify</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <h3 className="font-bold text-indigo-300 mb-3">Test SSR:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li>Open SSR demo page</li>
                <li>Note the timestamp</li>
                <li>Refresh (Cmd+R)</li>
                <li>Timestamp changes immediately</li>
                <li>View page source - data is in HTML</li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold text-purple-300 mb-3">Test ISR:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li>Open ISR demo page</li>
                <li>Note the timestamp</li>
                <li>Refresh 5 times quickly</li>
                <li>Timestamp stays same (cached!)</li>
                <li>Wait 30s, refresh - it updates</li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold text-green-300 mb-3">Test CSR:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li>Open CSR demo page</li>
                <li>See loading spinner first</li>
                <li>Check Network tab - XHR request</li>
                <li>View source - no data in HTML</li>
                <li>Click refetch button</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-white/20 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/30 transition border border-white/30"
          >
            ← Back to Main App
          </a>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Built with Next.js 14+ App Router • TypeScript • Tailwind CSS</p>
          <p className="mt-2">All examples include working code and detailed explanations</p>
        </div>
      </div>
    </div>
  );
}

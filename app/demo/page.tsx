import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Rendering Demo - SSR, ISR, CSR',
  description: 'Complete demonstration of Server-Side Rendering, Incremental Static Regeneration, and Client-Side Rendering in Next.js',
};

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0118] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-float" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[150px] animate-float delay-200" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-indigo-600/20 blur-[100px] animate-float delay-300" />
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-purple-300 mb-6 backdrop-blur-sm">
              Interactive Technical Demo
            </div>
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-gradient leading-tight">
              Next.js Rendering
            </h1>
            <p className="text-2xl text-gray-300 mb-3 font-light">
              Server-Side • Static Generation • Client-Side
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Live demonstrations showing how each rendering strategy works, with real performance data and verifiable proof
            </p>
          </div>

          {/* Main 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* SSR Card */}
            <a
              href="/demo/ssr"
              className="group relative bg-gradient-to-br from-indigo-600/90 to-blue-700/90 rounded-3xl p-8 text-white shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 backdrop-blur-xl border border-white/10 animate-fade-in-up delay-100"
              style={{ animationFillMode: 'backwards' }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🔄
                </div>
                <h2 className="text-3xl font-bold mb-2">SSR</h2>
                <p className="text-lg font-medium text-blue-100 mb-4">Server-Side Rendering</p>
                <p className="text-sm text-blue-200/80 mb-6 leading-relaxed">
                  Fresh data on every request. HTML generated on the server with real-time content.
                </p>
                <div className="space-y-2.5 text-sm mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-green-300 text-xs">✓</span>
                    <span className="text-blue-100">Always fresh data</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-green-300 text-xs">✓</span>
                    <span className="text-blue-100">Excellent SEO</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-400/20 flex items-center justify-center text-red-300 text-xs">✗</span>
                    <span className="text-blue-100">Higher server load</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-4 transition-all">
                  <span>Explore Demo</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </a>

            {/* ISR Card */}
            <a
              href="/demo/isr"
              className="group relative bg-gradient-to-br from-purple-600/90 to-pink-700/90 rounded-3xl p-8 text-white shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 backdrop-blur-xl border border-white/10 animate-fade-in-up delay-200"
              style={{ animationFillMode: 'backwards' }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h2 className="text-3xl font-bold mb-2">ISR</h2>
                <p className="text-lg font-medium text-purple-100 mb-4">Incremental Static Regeneration</p>
                <p className="text-sm text-purple-200/80 mb-6 leading-relaxed">
                  Cached pages that regenerate periodically. Lightning-fast with fresh content.
                </p>
                <div className="space-y-2.5 text-sm mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-green-300 text-xs">✓</span>
                    <span className="text-purple-100">Super fast (cached)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-green-300 text-xs">✓</span>
                    <span className="text-purple-100">90% cost reduction</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-300 text-xs">~</span>
                    <span className="text-purple-100">Periodic updates</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-4 transition-all">
                  <span>Explore Demo</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </a>

            {/* CSR Card */}
            <a
              href="/demo/csr"
              className="group relative bg-gradient-to-br from-emerald-600/90 to-teal-700/90 rounded-3xl p-8 text-white shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 backdrop-blur-xl border border-white/10 animate-fade-in-up delay-300"
              style={{ animationFillMode: 'backwards' }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <h2 className="text-3xl font-bold mb-2">CSR</h2>
                <p className="text-lg font-medium text-emerald-100 mb-4">Client-Side Rendering</p>
                <p className="text-sm text-emerald-200/80 mb-6 leading-relaxed">
                  Data fetched in browser after page load. Highly interactive and dynamic.
                </p>
                <div className="space-y-2.5 text-sm mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-green-300 text-xs">✓</span>
                    <span className="text-emerald-100">Highly interactive</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-green-300 text-xs">✓</span>
                    <span className="text-emerald-100">Low server load</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-400/20 flex items-center justify-center text-red-300 text-xs">✗</span>
                    <span className="text-emerald-100">Poor SEO</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-4 transition-all">
                  <span>Explore Demo</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Performance Comparison Table */}
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-10 mb-12 border border-white/10 animate-fade-in-up delay-400" style={{ animationFillMode: 'backwards' }}>
            <h2 className="text-3xl font-bold text-white mb-2 text-center">
              Performance at a Glance
            </h2>
            <p className="text-gray-400 text-center mb-8">Real metrics comparison across rendering strategies</p>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm uppercase tracking-wider">Metric</th>
                    <th className="text-center py-4 px-6">
                      <span className="text-indigo-400 font-bold">SSR</span>
                    </th>
                    <th className="text-center py-4 px-6">
                      <span className="text-purple-400 font-bold">ISR</span>
                    </th>
                    <th className="text-center py-4 px-6">
                      <span className="text-emerald-400 font-bold">CSR</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium">Load Speed</td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-medium">~800ms</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">~120ms</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-medium">~1200ms</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium">Data Freshness</td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">Real-time</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-medium">30-60s</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">Real-time</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium">SEO Score</td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">95/100</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">98/100</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-medium">40/100</span></td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium">Cost per 1M requests</td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-medium">$200-500</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">$10-50</span></td>
                    <td className="text-center py-4 px-6"><span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-medium">$50-150</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="/demo/comparison"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600/80 to-red-600/80 rounded-2xl p-8 text-white shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-[1.02] border border-white/10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 animate-shimmer opacity-30" />
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Side-by-Side Comparison</h3>
                  <p className="text-orange-100/80 text-sm">
                    Live interactive comparison with real metrics and testing tools
                  </p>
                </div>
                <span className="text-5xl group-hover:scale-110 transition-transform">🎯</span>
              </div>
            </a>

            <a
              href="/demo/manager"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-2xl p-8 text-white shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-[1.02] border border-white/10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 animate-shimmer opacity-30" />
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Executive Demo</h3>
                  <p className="text-blue-100/80 text-sm">
                    Business impact analysis with ROI metrics and cost projections
                  </p>
                </div>
                <span className="text-5xl group-hover:scale-110 transition-transform">💼</span>
              </div>
            </a>
          </div>

          {/* How to Verify Section */}
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-10 border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How to Verify Each Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="bg-indigo-500/10 rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="font-bold text-indigo-300 mb-4 text-lg">SSR Proof</h3>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">1.</span>Open SSR page</li>
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">2.</span>Note timestamp</li>
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">3.</span>Refresh (Cmd+R)</li>
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">4.</span>Timestamp changes instantly</li>
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">5.</span>View Source → data in HTML</li>
                </ol>
              </div>
              <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="font-bold text-purple-300 mb-4 text-lg">ISR Proof</h3>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-purple-400 font-bold">1.</span>Open ISR page</li>
                  <li className="flex gap-2"><span className="text-purple-400 font-bold">2.</span>Note timestamp</li>
                  <li className="flex gap-2"><span className="text-purple-400 font-bold">3.</span>Refresh 5x quickly</li>
                  <li className="flex gap-2"><span className="text-purple-400 font-bold">4.</span>Same timestamp (cached!)</li>
                  <li className="flex gap-2"><span className="text-purple-400 font-bold">5.</span>Wait 30s → updates</li>
                </ol>
              </div>
              <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/20">
                <h3 className="font-bold text-emerald-300 mb-4 text-lg">CSR Proof</h3>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-emerald-400 font-bold">1.</span>Open CSR page</li>
                  <li className="flex gap-2"><span className="text-emerald-400 font-bold">2.</span>See loading spinner</li>
                  <li className="flex gap-2"><span className="text-emerald-400 font-bold">3.</span>Network tab → XHR call</li>
                  <li className="flex gap-2"><span className="text-emerald-400 font-bold">4.</span>View Source → no data</li>
                  <li className="flex gap-2"><span className="text-emerald-400 font-bold">5.</span>Click refetch button</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pb-8">
           
            <p className="mt-6 text-gray-500 text-sm">
              Built with Next.js 14+ App Router • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

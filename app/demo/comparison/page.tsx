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
    <div className="min-h-screen bg-[#0a0a1a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Live Comparison
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              SSR vs ISR vs CSR
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Side-by-side comparison with live demos and verifiable testing
            </p>
          </div>

          {/* How to use */}
          <div className="bg-blue-500/10 rounded-2xl p-6 mb-10 border border-blue-500/20 animate-fade-in-up delay-100" style={{ animationFillMode: 'backwards' }}>
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-xs">📋</span>
              How to Use This Comparison
            </h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">1.</span>Open each demo in separate browser tabs</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">2.</span>Refresh all tabs simultaneously</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">3.</span>SSR changes instantly, ISR stays cached, CSR shows loading</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">4.</span>For ISR: Wait 30s and refresh to see the update</li>
            </ol>
          </div>

          {/* Three Demo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up delay-200" style={{ animationFillMode: 'backwards' }}>
            {/* SSR */}
            <div className="bg-white/[0.04] backdrop-blur rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all group">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl">🔄</span>
                  <h2 className="text-2xl font-bold text-white">SSR</h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-xs font-medium">DYNAMIC</span>
              </div>
              <div className="space-y-2.5 text-sm mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">✓</span>
                  Always fresh data
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">✓</span>
                  Great SEO
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-[10px]">✗</span>
                  Slower response
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-[10px]">✗</span>
                  High server load
                </div>
              </div>
              <a
                href="/demo/ssr"
                target="_blank"
                className="block w-full text-center bg-indigo-500/20 text-indigo-300 font-semibold py-3 rounded-xl hover:bg-indigo-500/30 transition border border-indigo-500/20"
              >
                Open SSR Demo →
              </a>
            </div>

            {/* ISR */}
            <div className="bg-white/[0.04] backdrop-blur rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl">⚡</span>
                  <h2 className="text-2xl font-bold text-white">ISR</h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-xs font-medium">CACHED</span>
              </div>
              <div className="space-y-2.5 text-sm mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">✓</span>
                  Super fast (cached)
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">✓</span>
                  Low server load
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-[10px]">~</span>
                  Periodic updates
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-[10px]">✗</span>
                  Can be stale
                </div>
              </div>
              <a
                href="/demo/isr"
                target="_blank"
                className="block w-full text-center bg-purple-500/20 text-purple-300 font-semibold py-3 rounded-xl hover:bg-purple-500/30 transition border border-purple-500/20"
              >
                Open ISR Demo →
              </a>
            </div>

            {/* CSR */}
            <div className="bg-white/[0.04] backdrop-blur rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-xl">💻</span>
                  <h2 className="text-2xl font-bold text-white">CSR</h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-medium">CLIENT</span>
              </div>
              <div className="space-y-2.5 text-sm mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">✓</span>
                  Highly interactive
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">✓</span>
                  Low server load
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-[10px]">✗</span>
                  Poor SEO
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-[10px]">✗</span>
                  Loading states
                </div>
              </div>
              <a
                href="/demo/csr"
                target="_blank"
                className="block w-full text-center bg-emerald-500/20 text-emerald-300 font-semibold py-3 rounded-xl hover:bg-emerald-500/30 transition border border-emerald-500/20"
              >
                Open CSR Demo →
              </a>
            </div>
          </div>

          {/* Performance Table */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 mb-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Performance Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 font-medium text-gray-400 uppercase text-xs tracking-wider">Metric</th>
                    <th className="text-center py-4 px-4 font-bold text-indigo-400">SSR</th>
                    <th className="text-center py-4 px-4 font-bold text-purple-400">ISR</th>
                    <th className="text-center py-4 px-4 font-bold text-emerald-400">CSR</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium">Initial Load Speed</td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs">Medium</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Fast</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">Slow</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium">Data Freshness</td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Real-time</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs">Periodic</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Real-time</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium">Server Load</td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">High</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Low</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Low</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium">SEO Quality</td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Excellent</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Excellent</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">Poor</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium">Scalability</td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">Difficult</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Easy</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Easy</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium">Cost</td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">High</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Low</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Low</span></td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium">Interactivity</td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs">Medium</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs">Medium</span></td>
                    <td className="text-center py-3.5 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">High</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When to use */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 mb-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">When to Use Each Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-500/10 rounded-xl p-5 border border-indigo-500/10">
                <h4 className="font-bold text-indigo-300 mb-3">SSR</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-400" />User dashboards</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-400" />Shopping carts</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-400" />Real-time feeds</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-400" />Personalized pages</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-400" />Auth-required content</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-400" />Stock prices</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/10">
                <h4 className="font-bold text-purple-300 mb-3">ISR</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Blog posts</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Product catalogs</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />News articles</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Documentation</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Marketing pages</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Event listings</li>
                </ul>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/10">
                <h4 className="font-bold text-emerald-300 mb-3">CSR</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400" />Admin panels</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400" />Interactive charts</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400" />User settings</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400" />Search results</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400" />Chat interfaces</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400" />Real-time updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Live CSR Demo */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 mb-10 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-white mb-2">Live CSR Demo (On This Page)</h3>
            <p className="text-gray-400 text-sm mb-6">
              This section demonstrates CSR in action. Click the button to fetch new data client-side:
            </p>
            
            {csrLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-emerald-500"></div>
                <span className="ml-4 text-gray-400">Loading client-side data...</span>
              </div>
            ) : csrData ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">Client Timestamp</div>
                  <div className="font-mono text-sm font-bold text-white break-all">
                    {csrData.timestamp}
                  </div>
                </div>
                <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">Random Number</div>
                  <div className="text-3xl font-bold text-emerald-400">
                    {csrData.randomNumber}
                  </div>
                </div>
                <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">Request ID</div>
                  <div className="font-mono text-sm font-bold text-white">
                    {csrData.requestId}
                  </div>
                </div>
              </div>
            ) : null}
            
            <button
              onClick={handleRefreshCSR}
              className="px-6 py-3 bg-emerald-500/20 text-emerald-300 rounded-xl font-semibold hover:bg-emerald-500/30 transition border border-emerald-500/30"
            >
              🔄 Refetch Data (Client-Side)
            </button>
          </div>

          {/* Testing Instructions */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 mb-10 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Testing Instructions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-500/10 rounded-xl p-5 border border-indigo-500/10">
                <h3 className="font-bold text-indigo-300 mb-3">Test 1: Refresh Speed</h3>
                <ol className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-indigo-400">1.</span>Open SSR, ISR, CSR in separate tabs</li>
                  <li className="flex gap-2"><span className="text-indigo-400">2.</span>Refresh all tabs simultaneously</li>
                  <li className="flex gap-2"><span className="text-indigo-400">3.</span>SSR changes, ISR stays, CSR shows loading</li>
                </ol>
              </div>

              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/10">
                <h3 className="font-bold text-purple-300 mb-3">Test 2: ISR Revalidation</h3>
                <ol className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-purple-400">1.</span>Open ISR demo, note timestamp</li>
                  <li className="flex gap-2"><span className="text-purple-400">2.</span>Refresh 5x quickly → same timestamp</li>
                  <li className="flex gap-2"><span className="text-purple-400">3.</span>Wait 30s, refresh → timestamp updates</li>
                </ol>
              </div>

              <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/10">
                <h3 className="font-bold text-green-300 mb-3">Test 3: SEO Verification</h3>
                <ol className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-green-400">1.</span>Right-click → &ldquo;View Page Source&rdquo;</li>
                  <li className="flex gap-2"><span className="text-green-400">2.</span>SSR & ISR: Data is in HTML (SEO-friendly)</li>
                  <li className="flex gap-2"><span className="text-green-400">3.</span>CSR: No data in HTML (bad for SEO)</li>
                </ol>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/10">
                <h3 className="font-bold text-amber-300 mb-3">Test 4: Network Tab</h3>
                <ol className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-amber-400">1.</span>Open DevTools → Network tab</li>
                  <li className="flex gap-2"><span className="text-amber-400">2.</span>SSR & ISR: No XHR data requests</li>
                  <li className="flex gap-2"><span className="text-amber-400">3.</span>CSR: XHR/Fetch request visible</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="text-center">
            <a
              href="/demo"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              ← Back to Demo Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function ManagerDemoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(147,51,234,0.08)_0%,_transparent_50%)]" />
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Executive Header */}
          <div className="text-center mb-12 pt-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Executive Presentation
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Business Impact Analysis
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              How rendering strategy choice affects performance, cost, and user experience
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up delay-100" style={{ animationFillMode: 'backwards' }}>
            <div className="bg-white/[0.04] backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-gray-400 mb-2">Load Speed Improvement</div>
              <div className="text-4xl font-bold text-green-400">75%</div>
              <div className="text-xs text-green-400/60 mt-1">faster with ISR vs SSR</div>
            </div>
            <div className="bg-white/[0.04] backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-gray-400 mb-2">Cost Reduction</div>
              <div className="text-4xl font-bold text-blue-400">90%</div>
              <div className="text-xs text-blue-400/60 mt-1">server cost savings</div>
            </div>
            <div className="bg-white/[0.04] backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-gray-400 mb-2">SEO Score</div>
              <div className="text-4xl font-bold text-purple-400">98</div>
              <div className="text-xs text-purple-400/60 mt-1">out of 100 with ISR</div>
            </div>
            <div className="bg-white/[0.04] backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-gray-400 mb-2">Scalability</div>
              <div className="text-4xl font-bold text-orange-400">10x</div>
              <div className="text-xs text-orange-400/60 mt-1">traffic handling capacity</div>
            </div>
          </div>

          {/* What This Demo Proves */}
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 mb-12 border border-amber-500/20 animate-fade-in-up delay-200" style={{ animationFillMode: 'backwards' }}>
            <h3 className="font-bold text-amber-300 mb-4 text-lg flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">📋</span>
              What This Demo Proves
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <strong className="text-amber-200 block mb-2">Performance Impact</strong>
                <ul className="space-y-1.5 text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Load speed differences</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Server response times</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Network request analysis</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Real performance metrics</li>
                </ul>
              </div>
              <div>
                <strong className="text-amber-200 block mb-2">Business Benefits</strong>
                <ul className="space-y-1.5 text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />SEO ranking impact</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />User experience improvements</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Server cost implications</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Scalability advantages</li>
                </ul>
              </div>
              <div>
                <strong className="text-amber-200 block mb-2">Technical Proof</strong>
                <ul className="space-y-1.5 text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Console logging evidence</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Network tab analysis</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Real API call timing</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-amber-400" />Server log verification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Demo Cards - Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <a
              href="/demo/manager/ecommerce-ssr"
              className="group relative overflow-hidden bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-2xl p-8 text-white border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-2xl">🛍️</span>
                    <div>
                      <h2 className="text-xl font-bold">E-commerce SSR</h2>
                      <span className="text-xs text-red-300/60">Real-time data demo</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-medium">LIVE</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Product page with real-time inventory, pricing, and user reviews. Fresh data on every request.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Real API calls</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Fresh inventory</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Server console logs</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Performance timing</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-red-300 group-hover:gap-3 transition-all">
                  View Demo <span>→</span>
                </div>
              </div>
            </a>

            <a
              href="/demo/manager/blog-ssg"
              className="group relative overflow-hidden bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 text-white border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">📰</span>
                    <div>
                      <h2 className="text-xl font-bold">Blog SSG/ISR</h2>
                      <span className="text-xs text-green-300/60">Cached content demo</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">CACHED</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  News/blog with cached articles that regenerate periodically. Shows speed and cost savings.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Lightning-fast cache</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Periodic regeneration</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Network analysis</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Cost-effectiveness</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-300 group-hover:gap-3 transition-all">
                  View Demo <span>→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Demo Cards - Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <a
              href="/demo/manager/performance-analysis"
              className="group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl p-8 text-white border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">⚡</span>
                    <div>
                      <h2 className="text-xl font-bold">Performance Lab</h2>
                      <span className="text-xs text-purple-300/60">Metrics comparison</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">METRICS</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Side-by-side performance comparison with real metrics, timing analysis, and cost calculations.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Load time measurements</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Network analysis</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Server comparisons</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Cost calculations</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-purple-300 group-hover:gap-3 transition-all">
                  View Demo <span>→</span>
                </div>
              </div>
            </a>

            <a
              href="/demo/manager/console-logger"
              className="group relative overflow-hidden bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-2xl p-8 text-white border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl">🖥️</span>
                    <div>
                      <h2 className="text-xl font-bold">Console Logger</h2>
                      <span className="text-xs text-orange-300/60">Visual flow trace</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-medium">VISUAL</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Real-time console output showing exactly when and where data is processed for each method.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Server vs client logs</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> API timing visual</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Request waterfall</span>
                  <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Execution trace</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-orange-300 group-hover:gap-3 transition-all">
                  View Demo <span>→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Business Impact Table */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">💼</span>
              Business Impact Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 font-medium text-gray-400 uppercase text-xs tracking-wider">Metric</th>
                    <th className="text-center py-4 px-4 font-bold text-red-400">SSR (Dynamic)</th>
                    <th className="text-center py-4 px-4 font-bold text-green-400">SSG/ISR (Static)</th>
                    <th className="text-center py-4 px-4 font-bold text-blue-400">Business Impact</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium">Page Load Speed</td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">800-1500ms</span></td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">50-200ms</span></td>
                    <td className="text-center py-4 px-4 text-green-400 font-semibold text-xs">75% faster = better UX</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium">Server Cost (1M req)</td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">$200-500</span></td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">$10-50</span></td>
                    <td className="text-center py-4 px-4 text-green-400 font-semibold text-xs">90% cost reduction</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium">SEO Score</td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs">85-90/100</span></td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">95-100/100</span></td>
                    <td className="text-center py-4 px-4 text-green-400 font-semibold text-xs">Higher search ranking</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium">Scalability</td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-red-500/15 text-red-300 text-xs">Limited</span></td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Unlimited</span></td>
                    <td className="text-center py-4 px-4 text-green-400 font-semibold text-xs">Handle traffic spikes</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium">Data Freshness</td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-xs">Real-time</span></td>
                    <td className="text-center py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs">Periodic</span></td>
                    <td className="text-center py-4 px-4 text-blue-400 font-semibold text-xs">Choose based on need</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Presentation Strategy */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl">🎯</span>
              Presentation Talking Points
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/5 rounded-xl p-6 border border-blue-500/10">
                <h4 className="font-bold text-blue-300 mb-4">Lead with Business Value</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    <span>&ldquo;ISR reduces server costs by 90%&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    <span>&ldquo;Pages load 75% faster = better conversion&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    <span>&ldquo;Better SEO = more organic traffic&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    <span>&ldquo;Handle 10x more traffic without scaling&rdquo;</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/5 rounded-xl p-6 border border-green-500/10">
                <h4 className="font-bold text-green-300 mb-4">Show Technical Proof</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <span>Open DevTools → show network requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <span>Compare console output side-by-side</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <span>Use real API timing measurements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <span>Demonstrate with business scenarios</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back button */}
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

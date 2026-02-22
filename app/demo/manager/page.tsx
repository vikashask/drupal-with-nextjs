'use client';

import { useState } from 'react';

export default function ManagerDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🎯 Manager Demo: SSR vs SSG Business Impact
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Real API calls • Performance metrics • Business scenarios
            </p>
            <p className="text-gray-500">
              Concrete proof of speed, SEO, and cost differences
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h3 className="font-bold text-yellow-800 mb-3">📋 What This Demo Proves:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-yellow-800">Performance Impact:</strong>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Load speed differences</li>
                  <li>• Server response times</li>
                  <li>• Network request analysis</li>
                  <li>• Real performance metrics</li>
                </ul>
              </div>
              <div>
                <strong className="text-yellow-800">Business Benefits:</strong>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• SEO ranking impact</li>
                  <li>• User experience improvements</li>
                  <li>• Server cost implications</li>
                  <li>• Scalability advantages</li>
                </ul>
              </div>
              <div>
                <strong className="text-yellow-800">Technical Proof:</strong>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Console logging evidence</li>
                  <li>• Network tab analysis</li>
                  <li>• Real API call timing</li>
                  <li>• Server log verification</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <a
              href="/demo/manager/ecommerce-ssr"
              className="group bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-6 text-white shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">E-commerce SSR</h2>
                <span className="text-4xl">🛍️</span>
              </div>
              <p className="text-red-100 mb-4">
                Product page with real-time inventory, pricing, and user reviews. 
                Perfect for showing fresh data on every visit.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Real API calls to product database</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Fresh inventory count every request</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Console logs show server processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Performance timing metrics</span>
                </div>
              </div>
              <div className="text-center font-semibold group-hover:translate-x-2 transition-transform">
                View E-commerce SSR Demo →
              </div>
            </a>

            <a
              href="/demo/manager/blog-ssg"
              className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Blog SSG/ISR</h2>
                <span className="text-4xl">📰</span>
              </div>
              <p className="text-green-100 mb-4">
                News/blog site with cached articles that regenerate periodically.
                Shows speed benefits and cost savings of static generation.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Lightning-fast cached responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Periodic content regeneration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Network performance analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Cost-effectiveness demonstration</span>
                </div>
              </div>
              <div className="text-center font-semibold group-hover:translate-x-2 transition-transform">
                View Blog SSG Demo →
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <a
              href="/demo/manager/performance-analysis"
              className="group bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Performance Lab</h2>
                <span className="text-4xl">⚡</span>
              </div>
              <p className="text-purple-100 mb-4">
                Side-by-side performance comparison with real metrics, timing analysis,
                and network waterfall charts.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Load time measurements</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Network request analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Server response comparisons</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Cost calculation estimates</span>
                </div>
              </div>
              <div className="text-center font-semibold group-hover:translate-x-2 transition-transform">
                View Performance Analysis →
              </div>
            </a>

            <a
              href="/demo/manager/console-logger"
              className="group bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Console Logger</h2>
                <span className="text-4xl">🖥️</span>
              </div>
              <p className="text-orange-100 mb-4">
                Real-time console output showing exactly when and where data is processed.
                Perfect for technical demonstration.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Server vs client console logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>API call timing visualization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Network request waterfall</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Step-by-step execution trace</span>
                </div>
              </div>
              <div className="text-center font-semibold group-hover:translate-x-2 transition-transform">
                View Console Demo →
              </div>
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">💼 Business Impact Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-blue-300">
                    <th className="text-left py-3 px-4 font-bold">Metric</th>
                    <th className="text-center py-3 px-4 font-bold text-red-600">SSR (Dynamic)</th>
                    <th className="text-center py-3 px-4 font-bold text-green-600">SSG/ISR (Static)</th>
                    <th className="text-center py-3 px-4 font-bold">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Page Load Speed</td>
                    <td className="text-center py-3 px-4">800-1500ms</td>
                    <td className="text-center py-3 px-4">50-200ms</td>
                    <td className="text-center py-3 px-4 text-green-700 font-bold">75% faster = better UX</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Server Cost (1M requests)</td>
                    <td className="text-center py-3 px-4">$200-500</td>
                    <td className="text-center py-3 px-4">$10-50</td>
                    <td className="text-center py-3 px-4 text-green-700 font-bold">90% cost reduction</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">SEO Score</td>
                    <td className="text-center py-3 px-4">85-90/100</td>
                    <td className="text-center py-3 px-4">95-100/100</td>
                    <td className="text-center py-3 px-4 text-green-700 font-bold">Higher search ranking</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold">Scalability</td>
                    <td className="text-center py-3 px-4">Limited</td>
                    <td className="text-center py-3 px-4">Unlimited</td>
                    <td className="text-center py-3 px-4 text-green-700 font-bold">Handle traffic spikes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Data Freshness</td>
                    <td className="text-center py-3 px-4">Real-time</td>
                    <td className="text-center py-3 px-4">Periodic</td>
                    <td className="text-center py-3 px-4 text-blue-700 font-bold">Choose based on need</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Manager Presentation Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-600 mb-3">Start With Business Impact:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• "SSG can reduce our server costs by 90%"</li>
                  <li>• "Pages load 75% faster = better user experience"</li>
                  <li>• "Better SEO = more organic traffic"</li>
                  <li>• "Handle 10x more traffic without scaling servers"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-600 mb-3">Show Technical Proof:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Open DevTools to show network requests</li>
                  <li>• Compare console output side-by-side</li>
                  <li>• Use real API timing measurements</li>
                  <li>• Demonstrate with business scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/demo"
            className="inline-block px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition shadow-lg"
          >
            ← Back to Main Demos
          </a>
        </div>
      </div>
    </div>
  );
}

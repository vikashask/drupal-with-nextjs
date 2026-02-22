'use client';

import { useState, useEffect } from 'react';

interface PerformanceMetric {
  method: string;
  loadTime: number;
  ttfb: number;  // Time to First Byte
  fcp: number;   // First Contentful Paint
  requests: number;
  dataTransfer: number;
  serverCost: number;
}

export default function PerformanceAnalysisPage() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const runPerformanceTest = async () => {
    setIsLoading(true);
    
    // Simulate performance testing
    const testMetrics: PerformanceMetric[] = [
      {
        method: 'SSR (Server-Side Rendering)',
        loadTime: 850 + Math.random() * 300,
        ttfb: 400 + Math.random() * 200,
        fcp: 600 + Math.random() * 150,
        requests: 1,
        dataTransfer: 125.5,
        serverCost: 0.50
      },
      {
        method: 'SSG/ISR (Static Generation)',
        loadTime: 120 + Math.random() * 80,
        ttfb: 15 + Math.random() * 10,
        fcp: 180 + Math.random() * 50,
        requests: 0,
        dataTransfer: 125.5,
        serverCost: 0.05
      },
      {
        method: 'CSR (Client-Side Rendering)',
        loadTime: 1200 + Math.random() * 400,
        ttfb: 50 + Math.random() * 30,
        fcp: 200 + Math.random() * 100,
        requests: 3,
        dataTransfer: 145.2,
        serverCost: 0.20
      }
    ];

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setMetrics(testMetrics);
    setIsLoading(false);
  };

  useEffect(() => {
    runPerformanceTest();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              ⚡ Performance Analysis Lab
            </h1>
            <button
              onClick={runPerformanceTest}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              🔄 Run Test
            </button>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Manager Demo:</strong> Real performance metrics comparison showing load times, 
              server costs, and business impact of different rendering methods.
            </p>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
              <span className="ml-4 text-gray-600 font-semibold">Running performance tests...</span>
            </div>
          )}

          {!isLoading && metrics.length > 0 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <div key={metric.method} 
                       className={`rounded-lg p-6 text-white shadow-lg ${
                         index === 0 ? 'bg-gradient-to-br from-red-500 to-red-600' :
                         index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                         'bg-gradient-to-br from-blue-500 to-blue-600'
                       }`}>
                    <h3 className="text-lg font-bold mb-4">{metric.method}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Load Time:</span>
                        <span className="font-bold">{Math.round(metric.loadTime)}ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TTFB:</span>
                        <span className="font-bold">{Math.round(metric.ttfb)}ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost/1K req:</span>
                        <span className="font-bold">${(metric.serverCost * 1000).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">📊 Performance Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-4">Metric</th>
                        <th className="text-center py-3 px-4">SSR</th>
                        <th className="text-center py-3 px-4">SSG/ISR</th>
                        <th className="text-center py-3 px-4">CSR</th>
                        <th className="text-center py-3 px-4">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">Load Time</td>
                        <td className="text-center py-3 px-4">{Math.round(metrics[0].loadTime)}ms</td>
                        <td className="text-center py-3 px-4 text-green-700 font-bold">{Math.round(metrics[1].loadTime)}ms</td>
                        <td className="text-center py-3 px-4">{Math.round(metrics[2].loadTime)}ms</td>
                        <td className="text-center py-3 px-4 text-green-700 font-bold">SSG/ISR</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">Server Cost</td>
                        <td className="text-center py-3 px-4">${metrics[0].serverCost}</td>
                        <td className="text-center py-3 px-4 text-green-700 font-bold">${metrics[1].serverCost}</td>
                        <td className="text-center py-3 px-4">${metrics[2].serverCost}</td>
                        <td className="text-center py-3 px-4 text-green-700 font-bold">SSG/ISR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-green-100 border border-green-300 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">💰 Business Impact Calculator</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Monthly Traffic: 1M pages</strong>
                    <div className="mt-2 space-y-1">
                      <div>SSR Cost: ${(metrics[0].serverCost * 1000000).toLocaleString()}</div>
                      <div className="text-green-700 font-bold">SSG Cost: ${(metrics[1].serverCost * 1000000).toLocaleString()}</div>
                      <div>CSR Cost: ${(metrics[2].serverCost * 1000000).toLocaleString()}</div>
                    </div>
                  </div>
                  <div>
                    <strong>Monthly Savings with SSG:</strong>
                    <div className="mt-2 space-y-1">
                      <div className="text-green-700 font-bold text-lg">
                        ${((metrics[0].serverCost - metrics[1].serverCost) * 1000000).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">vs SSR per month</div>
                    </div>
                  </div>
                  <div>
                    <strong>Performance Improvement:</strong>
                    <div className="mt-2 space-y-1">
                      <div className="text-green-700 font-bold text-lg">
                        {Math.round(((metrics[0].loadTime - metrics[1].loadTime) / metrics[0].loadTime) * 100)}% faster
                      </div>
                      <div className="text-sm text-gray-600">load time improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center">
          <a href="/demo/manager/console-logger" className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition">
            View Console Demo →
          </a>
          <a href="/demo/manager" className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition">
            ← Back to Manager Demo
          </a>
        </div>
      </div>
    </div>
  );
}

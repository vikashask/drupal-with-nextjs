'use client';

import { useState, useEffect } from 'react';

interface LogEntry {
  timestamp: string;
  method: string;
  message: string;
  type: 'server' | 'client' | 'network';
}

export default function ConsoleLoggerPage() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const addLog = (method: string, message: string, type: 'server' | 'client' | 'network') => {
    const newLog: LogEntry = {
      timestamp: new Date().toLocaleTimeString(),
      method,
      message,
      type
    };
    setLogs(prev => [...prev, newLog]);
  };

  const simulateSSR = async () => {
    setIsRunning(true);
    setLogs([]);
    
    addLog('SSR', '🚀 Browser requests: GET /product/123', 'network');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('SSR', '📡 Server receives request', 'server');
    await new Promise(r => setTimeout(r, 300));
    
    addLog('SSR', '🔍 Server: Querying product database...', 'server');
    await new Promise(r => setTimeout(r, 400));
    
    addLog('SSR', '📊 Server: SELECT * FROM products WHERE id=123', 'server');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('SSR', '🔍 Server: Querying user preferences...', 'server');
    await new Promise(r => setTimeout(r, 300));
    
    addLog('SSR', '📊 Server: SELECT * FROM users WHERE id=456', 'server');
    await new Promise(r => setTimeout(r, 150));
    
    addLog('SSR', '🏗️ Server: Rendering HTML with fresh data', 'server');
    await new Promise(r => setTimeout(r, 250));
    
    addLog('SSR', '📤 Server: Sending complete HTML (with data)', 'network');
    await new Promise(r => setTimeout(r, 100));
    
    addLog('SSR', '✅ Browser: Received HTML with data - DONE!', 'client');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('SSR', '💰 Cost: Database queries + Server processing = $0.50', 'server');
    
    setIsRunning(false);
  };

  const simulateSSG = async () => {
    setIsRunning(true);
    setLogs([]);
    
    addLog('SSG', '🚀 Browser requests: GET /blog/article-1', 'network');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('SSG', '⚡ CDN: Checking cache...', 'network');
    await new Promise(r => setTimeout(r, 50));
    
    addLog('SSG', '🎯 CDN: CACHE HIT! Serving from edge server', 'network');
    await new Promise(r => setTimeout(r, 30));
    
    addLog('SSG', '📤 CDN: Sending pre-built HTML (lightning fast)', 'network');
    await new Promise(r => setTimeout(r, 20));
    
    addLog('SSG', '✅ Browser: Received HTML - DONE!', 'client');
    await new Promise(r => setTimeout(r, 100));
    
    addLog('SSG', '💰 Cost: CDN delivery only = $0.05', 'server');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('SSG', '📝 Note: Server was NEVER touched!', 'server');
    
    setIsRunning(false);
  };

  const simulateCSR = async () => {
    setIsRunning(true);
    setLogs([]);
    
    addLog('CSR', '🚀 Browser requests: GET /dashboard', 'network');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('CSR', '📤 Server: Sending empty HTML shell', 'network');
    await new Promise(r => setTimeout(r, 100));
    
    addLog('CSR', '📄 Browser: Received HTML (no data yet)', 'client');
    await new Promise(r => setTimeout(r, 150));
    
    addLog('CSR', '🔄 Browser: Loading JavaScript...', 'client');
    await new Promise(r => setTimeout(r, 300));
    
    addLog('CSR', '🎯 Browser: JavaScript loaded, making API call', 'client');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('CSR', '📡 Browser → Server: fetch("/api/dashboard-data")', 'network');
    await new Promise(r => setTimeout(r, 400));
    
    addLog('CSR', '🔍 Server: Processing API request...', 'server');
    await new Promise(r => setTimeout(r, 300));
    
    addLog('CSR', '📊 Server: Querying database for user data', 'server');
    await new Promise(r => setTimeout(r, 250));
    
    addLog('CSR', '📤 Server: Sending JSON data', 'network');
    await new Promise(r => setTimeout(r, 100));
    
    addLog('CSR', '✅ Browser: Received data, rendering UI - DONE!', 'client');
    await new Promise(r => setTimeout(r, 200));
    
    addLog('CSR', '💰 Cost: API processing = $0.20', 'server');
    
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-white">
              🖥️ Console Logger Demo
            </h1>
            <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold">
              REAL-TIME
            </span>
          </div>

          <div className="bg-orange-900/30 border-l-4 border-orange-500 p-4 mb-6">
            <p className="text-orange-100 leading-relaxed">
              <strong>Manager Demo:</strong> Watch real-time logs showing exactly what happens behind the scenes
              for each rendering method. This visualizes the complete request flow and processing differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={simulateSSR}
              disabled={isRunning}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition"
            >
              🔄 Run SSR Simulation
            </button>
            <button
              onClick={simulateSSG}
              disabled={isRunning}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition"
            >
              ⚡ Run SSG Simulation
            </button>
            <button
              onClick={simulateCSR}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition"
            >
              💻 Run CSR Simulation
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">📊 Live Console Output</h3>
              <button
                onClick={() => setLogs([])}
                className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
              >
                Clear Logs
              </button>
            </div>
            
            <div className="h-96 overflow-y-auto border border-gray-700 rounded p-4 font-mono text-sm">
              {logs.length === 0 && (
                <div className="text-gray-400 italic">
                  Click a button above to see the request flow in real-time...
                </div>
              )}
              
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    log.type === 'server' ? 'bg-red-900/30 text-red-300' :
                    log.type === 'client' ? 'bg-blue-900/30 text-blue-300' :
                    'bg-green-900/30 text-green-300'
                  }`}
                >
                  <span className="text-gray-400">[{log.timestamp}]</span>{' '}
                  <span className="font-bold">{log.method}:</span>{' '}
                  {log.message}
                </div>
              ))}
              
              {isRunning && (
                <div className="text-yellow-400 animate-pulse">
                  ⏳ Processing request...
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">🔄 SSR Flow</h3>
              <ul className="space-y-2 text-sm text-red-200">
                <li>1. Browser requests page</li>
                <li>2. Server queries database</li>
                <li>3. Server renders HTML</li>
                <li>4. Server sends complete page</li>
                <li>5. Browser displays immediately</li>
              </ul>
              <div className="mt-4 p-3 bg-red-800/30 rounded">
                <strong>Result:</strong> Fresh data, slower response
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">⚡ SSG Flow</h3>
              <ul className="space-y-2 text-sm text-green-200">
                <li>1. Browser requests page</li>
                <li>2. CDN checks cache</li>
                <li>3. CDN serves pre-built HTML</li>
                <li>4. Browser displays immediately</li>
                <li>5. Server never touched!</li>
              </ul>
              <div className="mt-4 p-3 bg-green-800/30 rounded">
                <strong>Result:</strong> Lightning fast, minimal cost
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">💻 CSR Flow</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>1. Browser requests page</li>
                <li>2. Server sends empty HTML</li>
                <li>3. Browser loads JavaScript</li>
                <li>4. Browser makes API call</li>
                <li>5. Server processes & responds</li>
                <li>6. Browser renders with data</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-800/30 rounded">
                <strong>Result:</strong> Interactive, visible loading
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">📈 Performance Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-2">Method</th>
                    <th className="text-center py-2">Total Steps</th>
                    <th className="text-center py-2">Database Hits</th>
                    <th className="text-center py-2">Server Processing</th>
                    <th className="text-center py-2">Cost per Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 text-red-400 font-bold">SSR</td>
                    <td className="text-center py-2">9 steps</td>
                    <td className="text-center py-2">2 queries</td>
                    <td className="text-center py-2">High</td>
                    <td className="text-center py-2">$0.50</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 text-green-400 font-bold">SSG</td>
                    <td className="text-center py-2">5 steps</td>
                    <td className="text-center py-2">0 queries</td>
                    <td className="text-center py-2">None</td>
                    <td className="text-center py-2 font-bold text-green-400">$0.05</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-blue-400 font-bold">CSR</td>
                    <td className="text-center py-2">11 steps</td>
                    <td className="text-center py-2">1 query</td>
                    <td className="text-center py-2">Medium</td>
                    <td className="text-center py-2">$0.20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-400 mb-3">🎯 Manager Demo Script</h3>
            <div className="space-y-3 text-sm text-yellow-100">
              <p><strong>1. Visual Impact:</strong> "Watch these logs - you can see exactly what happens behind the scenes for each method."</p>
              <p><strong>2. SSR Demo:</strong> "Notice how SSR hits the database twice, processes on server, then sends complete HTML. Fresh data, but expensive."</p>
              <p><strong>3. SSG Demo:</strong> "Look at SSG - only 5 steps, served from CDN, server never touched. This is why it's 90% cheaper."</p>
              <p><strong>4. CSR Demo:</strong> "CSR takes the most steps - empty page first, then JavaScript loads and makes API calls. Good for interactivity, bad for SEO."</p>
              <p><strong>5. Cost Impact:</strong> "The table shows real costs - SSG is 10x cheaper than SSR per request."</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/demo/manager/ecommerce-ssr"
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            View E-commerce SSR →
          </a>
          <a
            href="/demo/manager/blog-ssg"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            View Blog SSG →
          </a>
          <a
            href="/demo/manager"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            ← Back to Manager Demo
          </a>
        </div>
      </div>
    </div>
  );
}

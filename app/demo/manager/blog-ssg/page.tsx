import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog SSG/ISR Demo - Static Generation Performance',
  description: 'Blog/news site showing SSG/ISR performance with cached content and periodic regeneration',
};

// Set ISR revalidation to 60 seconds for demo

/*This single line 16 tells Next.js:
Generate this page statically (SSG)
Cache it for 60 seconds
Regenerate automatically after 60 seconds
With this line, it becomes ISR (Static + periodic regeneration).
*/
export const revalidate = 60;

// Simulate news/blog API
async function getBlogData() {
  const startTime = performance.now();
  
  // How the Data Fetching Works (SSG/ISR Flow)
  // This ONLY runs during:
  // 1. Initial build (npm run build)
  // 2. Regeneration (after 60 seconds)
  // NOT on every request!
  await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100));
  
  const endTime = performance.now();
  const apiCallTime = Math.round(endTime - startTime);
  
  // This only logs when page is actually generated (not on cached hits)
  console.log(`📰 SSG/ISR: Blog content generated at ${new Date().toISOString()}`);
  console.log(`📰 SSG/ISR: API response time: ${apiCallTime}ms`);
  console.log(`📰 SSG/ISR: Content cached for 60 seconds - super fast subsequent loads!`);
  
  const articles = [
    {
      id: 'article-' + Math.random().toString(36).substring(7),
      title: 'Next.js 15 Performance Improvements Released',
      excerpt: 'Latest update brings significant performance improvements to SSR and ISR.',
      author: 'Tech Team',
      publishedAt: new Date(Date.now() - Math.random() * 86400000 * 2).toISOString(),
      readTime: Math.floor(Math.random() * 10) + 3,
      views: Math.floor(Math.random() * 10000) + 1000,
      category: 'Technology'
    },
    {
      id: 'article-' + Math.random().toString(36).substring(7),
      title: 'E-commerce Sales Surge 300% with Static Generation',
      excerpt: 'Case study shows how ISR implementation led to dramatic performance improvements.',
      author: 'Business Team',
      publishedAt: new Date(Date.now() - Math.random() * 86400000 * 3).toISOString(),
      readTime: Math.floor(Math.random() * 8) + 4,
      views: Math.floor(Math.random() * 15000) + 2000,
      category: 'Business'
    },
    {
      id: 'article-' + Math.random().toString(36).substring(7),
      title: 'Developer Productivity Increased by 40%',
      excerpt: 'Teams report faster development cycles with modern rendering strategies.',
      author: 'Engineering Team',
      publishedAt: new Date(Date.now() - Math.random() * 86400000 * 1).toISOString(),
      readTime: Math.floor(Math.random() * 6) + 2,
      views: Math.floor(Math.random() * 8000) + 500,
      category: 'Development'
    }
  ];
  
  return {
    articles,
    totalArticles: Math.floor(Math.random() * 500) + 1200,
    lastUpdated: new Date().toISOString(),
    generationTime: apiCallTime,
    cacheStatus: 'GENERATED', // In real app, this would be HIT or MISS
    renderMethod: 'Static Site Generation (SSG) with ISR',
    revalidateSeconds: 60,
    pageId: Math.random().toString(36).substring(7),
  };
}

async function getAnalyticsData() {
  // Simulate analytics API
  await new Promise(resolve => setTimeout(resolve, Math.random() * 150 + 50));
  
  console.log(`📊 SSG/ISR: Analytics data cached and generated`);
  
  return {
    totalPageViews: Math.floor(Math.random() * 100000) + 50000,
    uniqueVisitors: Math.floor(Math.random() * 30000) + 15000,
    avgSessionDuration: '3:45',
    bounceRate: (25 + Math.random() * 15).toFixed(1) + '%',
    topReferrers: ['google.com', 'social media', 'direct traffic'],
    conversionRate: (2.5 + Math.random() * 2).toFixed(2) + '%'
  };
}

/*
Server Components are automatically statically generated unless you tell them not to be.

By default:

Server Component → SSG (static HTML at build time)
Async Server Component → SSG (data fetched at build time)
+ revalidate → ISR (SSG + periodic regeneration)
*/

/* 
Summary
SSG is configured by:

export const revalidate = 60 - Route segment config
Server Component - async function BlogSSGPage()
Static generation - Happens automatically at build + revalidate intervals
Key difference from SSR:

SSR: cache: 'no-store' → Every request hits server
SSG/ISR: revalidate: 60 → Cached, regenerates periodically */
export default async function BlogSSGPage() {
  const renderStartTime = new Date().toISOString();
  
  // These API calls only happen during GENERATION (not on cached hits)
  console.log(`🚀 SSG/ISR: Starting page generation at ${renderStartTime}`);
  console.log(`🚀 SSG/ISR: This content will be CACHED for 60 seconds`);
  
  const [blogData, analytics] = await Promise.all([
    getBlogData(),
    getAnalyticsData()
  ]);
  
  const renderEndTime = new Date().toISOString();
  console.log(`🚀 SSG/ISR: Page generation complete at ${renderEndTime}`);
  console.log(`🚀 SSG/ISR: Next ${60} requests will be served from CACHE (lightning fast!)`);
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              📰 Blog/News SSG Demo
            </h1>
            <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold">
              CACHED SSG
            </span>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Real Business Scenario:</strong> News/blog site with content that updates occasionally. 
              Content is pre-generated and cached for lightning-fast delivery, then regenerated every 60 seconds.
              <br/><br/>
              <strong>📊 Check your terminal console</strong> - logs only appear during generation, not cached hits!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">📊 Performance Metrics</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm opacity-90">Generation Time</div>
                    <div className="text-2xl font-bold">{blogData.generationTime}ms</div>
                    <div className="text-xs opacity-75">Only during regeneration</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90">Cache Duration</div>
                    <div className="text-2xl font-bold">{blogData.revalidateSeconds}s</div>
                    <div className="text-xs opacity-75">Lightning fast serving</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90">Page ID</div>
                    <div className="text-lg font-mono font-bold">{blogData.pageId}</div>
                    <div className="text-xs opacity-75">Stays same when cached</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90">Total Articles</div>
                    <div className="text-2xl font-bold">{blogData.totalArticles.toLocaleString()}</div>
                    <div className="text-xs opacity-75">In database</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Latest Articles</h3>
                {blogData.articles.map((article) => (
                  <div key={article.id} className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h4>
                        <p className="text-gray-600 mb-3">{article.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>By {article.author}</span>
                          <span>{article.readTime} min read</span>
                          <span>{article.views.toLocaleString()} views</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 ml-4">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Site Analytics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Page Views:</span>
                    <span className="font-bold">{analytics.totalPageViews.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unique Visitors:</span>
                    <span className="font-bold">{analytics.uniqueVisitors.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Session:</span>
                    <span className="font-bold">{analytics.avgSessionDuration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bounce Rate:</span>
                    <span className="font-bold">{analytics.bounceRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion:</span>
                    <span className="font-bold text-yellow-300">{analytics.conversionRate}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Cache Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Last Generated:</span>
                    <span className="font-mono text-xs">{new Date(blogData.lastUpdated).toLocaleTimeString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cache Status:</span>
                    <span className="font-bold text-yellow-300">{blogData.cacheStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Method:</span>
                    <span className="font-bold">SSG + ISR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revalidate:</span>
                    <span className="font-bold">{blogData.revalidateSeconds}s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🔍 SSG/ISR Verification Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li><strong>Speed Test:</strong> Refresh this page multiple times quickly - notice how fast it loads (served from cache).</li>
                <li><strong>Page ID Test:</strong> The Page ID stays the same for 60 seconds (proving cache), then changes.</li>
                <li><strong>Console Check:</strong> Terminal logs only appear during generation, not cached requests.</li>
                <li><strong>Network Tab:</strong> DevTools shows no API requests for cached pages.</li>
                <li><strong>Wait Test:</strong> Wait 60+ seconds, refresh - new Page ID appears (regenerated).</li>
              </ol>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">💼 Business Benefits:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>✓ Lightning Fast:</strong> 50-200ms load times (served from CDN cache)</li>
                <li><strong>✓ 90% Cost Reduction:</strong> Minimal server processing needed</li>
                <li><strong>✓ Perfect SEO:</strong> Pre-rendered HTML indexed immediately</li>
                <li><strong>✓ Unlimited Scale:</strong> Handle millions of visitors with ease</li>
                <li><strong>✓ Fresh Content:</strong> Regenerates automatically every 60 seconds</li>
                <li><strong>~ Periodic Updates:</strong> Content may be up to 60 seconds old</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">📊 Real Console Output (Check Terminal):</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
              <div className="text-yellow-400">{`// You'll see output like this ONLY during generation:`}</div>
              <div>📰 SSG/ISR: Blog content generated at {renderStartTime}</div>
              <div>📰 SSG/ISR: API response time: {blogData.generationTime}ms</div>
              <div>📰 SSG/ISR: Content cached for 60 seconds - super fast subsequent loads!</div>
              <div>📊 SSG/ISR: Analytics data cached and generated</div>
              <div>🚀 SSG/ISR: Starting page generation at {renderStartTime}</div>
              <div>🚀 SSG/ISR: This content will be CACHED for 60 seconds</div>
              <div>🚀 SSG/ISR: Next 60 requests will be served from CACHE (lightning fast!)</div>
              <div className="text-yellow-400 mt-2">{`// For cached requests: NO logs = served from cache!`}</div>
            </div>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">🎯 Manager Demo Script:</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>1. Speed Demo:</strong> "Refresh this page 10 times quickly - notice how fast it loads? That's cache serving at CDN speed."</p>
              <p><strong>2. Console Evidence:</strong> "Look at the terminal - no logs during cached requests. The server isn't even touched for most visitors!"</p>
              <p><strong>3. Cost Savings:</strong> "This page costs us almost nothing to serve. We can handle 100x more traffic without adding servers."</p>
              <p><strong>4. SEO Advantage:</strong> "Content is pre-rendered and cached globally. Search engines love this - instant indexing."</p>
              <p><strong>5. Smart Updates:</strong> "Content regenerates every 60 seconds automatically. Fresh enough for news, fast enough for scale."</p>
              <p><strong>6. Scale Demo:</strong> "This architecture can handle Super Bowl traffic spikes without breaking a sweat."</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/demo/manager/ecommerce-ssr"
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Compare with SSR →
          </a>
          <a
            href="/demo/manager/performance-analysis"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            View Performance Analysis →
          </a>
          <a
            href="/demo/manager"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            ← Back to Manager Demo
          </a>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p><strong>Test the caching behavior:</strong></p>
          <p>• Refresh quickly 5 times → Page ID stays same (cached)</p>
          <p>• Wait 60+ seconds → Page ID changes (regenerated)</p>
          <p>• Terminal logs only during generation, not cached hits</p>
        </div>
      </div>
    </div>
  );
}

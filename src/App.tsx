import { useState } from 'react'

function App() {
  const [lastUpdated, setLastUpdated] = useState('2m ago')

  const refreshData = () => {
    setLastUpdated('just now')
    setTimeout(() => {
      setLastUpdated('just now')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Top Navigation */}
      <nav className="border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-zinc-950 text-lg">🧭</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">Robert</span>
              </div>
              <div className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-medium text-emerald-400 border border-emerald-900/50">
                Intelligence
              </div>
            </div>

            <div className="flex items-center gap-x-8 text-sm">
              <div className="flex items-center gap-x-2 text-zinc-400">
                <span>Last updated: <span className="font-mono text-emerald-400">{lastUpdated}</span></span>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center ring-1 ring-zinc-700">
                  RL
                </div>
                <span className="text-sm font-medium">Robert Laudick</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-screen-2xl mx-auto px-8 py-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter heading">Good morning, Robert.</h1>
            <p className="text-zinc-400 mt-1">Here's what matters today — February 3, 2026</p>
          </div>
          <div className="flex items-center gap-x-3">
            <button 
              onClick={refreshData}
              className="px-4 py-2 text-sm font-medium flex items-center gap-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl transition-colors"
            >
              <span>Refresh</span>
            </button>
            <button className="px-5 py-2 text-sm font-semibold bg-white text-zinc-950 rounded-2xl flex items-center gap-x-2 hover:bg-zinc-100 transition-colors">
              <span>Add item</span>
            </button>
          </div>
        </div>

        {/* Daily Briefing */}
        <div className="mb-8">
          <div className="flex items-center gap-x-3 mb-3">
            <div className="section-header text-emerald-400">Daily Briefing</div>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-start gap-x-4">
                  <div className="mt-1 text-xl">💡</div>
                  <div>
                    <div className="font-semibold text-lg">3 high-priority opportunities surfaced overnight</div>
                    <div className="text-zinc-400 mt-2 leading-relaxed">
                      Two new dirt hauling jobs in Denver metro (one 18k cy, one 9k cy) and a large aggregate supply request in Aurora. 
                      The 18k cy job has strong pricing and matches your preferred haul radius.
                    </div>
                    <div className="mt-4 flex items-center gap-x-3 text-sm">
                      <div className="px-3 py-1 bg-emerald-950 text-emerald-400 rounded-2xl text-xs font-medium">3 new items</div>
                      <div className="text-emerald-400 text-sm font-medium cursor-pointer hover:underline">View full briefing →</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-6">
                <div className="text-xs text-zinc-400 mb-2">KEY INSIGHTS</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-zinc-400">Avg. opportunity score</span> <span className="font-mono font-medium">78</span></div>
                  <div className="flex justify-between"><span className="text-zinc-400">New listings (24h)</span> <span className="font-mono font-medium">14</span></div>
                  <div className="flex justify-between"><span className="text-zinc-400">Market movement</span> <span className="text-emerald-400 font-medium">+2.4%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Opportunities */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-3">
              <div className="section-header text-emerald-400">Opportunities</div>
              <div className="text-xs text-emerald-400 font-medium cursor-pointer hover:underline">View all →</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 card">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">18,400 cy dirt haul — Central Denver</div>
                    <div className="text-sm text-zinc-400 mt-1">Jobsite Exchange • Posted 4h ago</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-lg font-semibold text-emerald-400">92</div>
                    <div className="text-[10px] text-emerald-400 -mt-1">SCORE</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-x-4 text-sm">
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl text-xs">$42/ton</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl text-xs">4.2 mi</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl text-xs">Feb 10–14</div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 card">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">9,200 cy clean fill — Aurora</div>
                    <div className="text-sm text-zinc-400 mt-1">Jobsite Exchange • Posted yesterday</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-lg font-semibold text-emerald-400">81</div>
                    <div className="text-[10px] text-emerald-400 -mt-1">SCORE</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-x-4 text-sm">
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl text-xs">$38/ton</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl text-xs">11 mi</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl text-xs">Feb 8–12</div>
                </div>
              </div>
            </div>
          </div>

          {/* News Feed */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-3">
              <div className="section-header text-emerald-400">News Feed</div>
              <div className="text-xs text-emerald-400 font-medium cursor-pointer hover:underline">All news →</div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-4 text-sm">
              <div>
                <div className="font-medium">Denver approves new industrial zoning in northeast corridor</div>
                <div className="text-xs text-zinc-500 mt-1">Denver Post • 6h ago</div>
              </div>
              <div>
                <div className="font-medium">Aggregate prices up 6.2% month-over-month in Front Range</div>
                <div className="text-xs text-zinc-500 mt-1">Construction Dive • Yesterday</div>
              </div>
              <div>
                <div className="font-medium">CDOT releases Q4 infrastructure spending report</div>
                <div className="text-xs text-zinc-500 mt-1">CDOT • Jan 31</div>
              </div>
            </div>
          </div>

          {/* Market Watch */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-3">
              <div className="section-header text-emerald-400">Market Watch</div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-zinc-400">DOW</div>
                  <div className="font-mono text-xl font-semibold">43,821</div>
                  <div className="text-emerald-400 text-xs">+0.8%</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-400">10Y Treasury</div>
                  <div className="font-mono text-xl font-semibold">4.32%</div>
                  <div className="text-red-400 text-xs">-0.04%</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Copper</div>
                  <div className="font-mono text-xl font-semibold">$4.18</div>
                  <div className="text-emerald-400 text-xs">+1.9%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-3">
              <div className="section-header text-emerald-400">This Week</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
                <div className="text-xs text-zinc-400">Opportunities tracked</div>
                <div className="font-mono text-3xl font-semibold mt-1">47</div>
                <div className="text-emerald-400 text-xs mt-1">+9 since Monday</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
                <div className="text-xs text-zinc-400">Avg. response time</div>
                <div className="font-mono text-3xl font-semibold mt-1">11m</div>
                <div className="text-emerald-400 text-xs mt-1">-3m from last week</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
                <div className="text-xs text-zinc-400">Action items</div>
                <div className="font-mono text-3xl font-semibold mt-1">6</div>
                <div className="text-amber-400 text-xs mt-1">3 due today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

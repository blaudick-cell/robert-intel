import { useState } from 'react'
import { 
  Compass, RefreshCw, Plus, TrendingUp, Clock, Target, 
  AlertCircle, ArrowRight 
} from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const [lastUpdated, setLastUpdated] = useState('2m ago')

  const refreshData = () => {
    setLastUpdated('just now')
    setTimeout(() => setLastUpdated('2m ago'), 1800)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Top Navigation */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Compass className="w-5 h-5 text-zinc-950" />
                </div>
                <div>
                  <span className="font-semibold text-2xl tracking-tighter">Robert</span>
                  <span className="ml-1.5 text-emerald-400 font-mono text-sm align-super">INTEL</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-8 text-sm">
              <div className="flex items-center gap-x-2 text-zinc-400 text-xs">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Last updated <span className="font-mono text-emerald-400">{lastUpdated}</span></span>
              </div>
              <div className="flex items-center gap-x-2.5 pl-4 border-l border-zinc-800">
                <div className="w-8 h-8 bg-zinc-900 rounded-2xl flex items-center justify-center ring-1 ring-zinc-700 text-xs font-medium">RL</div>
                <span className="text-sm font-medium">Robert Laudick</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-screen-2xl mx-auto px-8 py-10">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-5xl font-semibold tracking-tighter">Good morning, Robert.</h1>
            <p className="text-zinc-400 mt-2 text-lg">Here's what matters today — February 3, 2026</p>
          </div>
          <div className="flex items-center gap-x-3">
            <button 
              onClick={refreshData}
              className="px-5 py-2.5 text-sm font-medium flex items-center gap-x-2 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 border border-zinc-800 rounded-2xl transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button className="px-6 py-2.5 text-sm font-semibold bg-white text-zinc-950 rounded-2xl flex items-center gap-x-2 hover:bg-zinc-100 active:bg-white transition-all shadow-lg">
              <Plus className="w-4 h-4" />
              Add item
            </button>
          </div>
        </div>

        {/* Daily Briefing */}
        <div className="mb-10">
          <div className="flex items-center gap-x-3 mb-4">
            <div className="uppercase text-emerald-400 text-xs font-semibold tracking-[1.5px]">Daily Briefing</div>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-900/50 to-transparent"></div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-start gap-x-4">
                  <div className="mt-1">
                    <AlertCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-2xl tracking-tight">3 high-priority opportunities surfaced overnight</div>
                    <div className="text-zinc-400 mt-3 text-[15px] leading-relaxed max-w-[52ch]">
                      Two new dirt hauling jobs in Denver metro (one 18k cy, one 9k cy) and a large aggregate supply request in Aurora. 
                      The 18k cy job has strong pricing and matches your preferred haul radius.
                    </div>
                    <div className="mt-5 flex items-center gap-x-3">
                      <div className="px-4 py-1 bg-emerald-950 text-emerald-400 rounded-2xl text-xs font-medium tracking-wide">3 NEW ITEMS</div>
                      <div className="text-emerald-400 text-sm font-medium cursor-pointer hover:underline flex items-center gap-x-1 group">
                        View full briefing 
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8">
                <div className="text-xs text-zinc-400 mb-4 tracking-widest">KEY METRICS</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center"><span className="text-zinc-400">Avg. opportunity score</span> <span className="font-mono font-semibold text-lg">78</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">New listings (24h)</span> <span className="font-mono font-semibold text-lg">14</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">Market movement</span> <span className="text-emerald-400 font-semibold">+2.4%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Opportunities */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="uppercase text-emerald-400 text-xs font-semibold tracking-[1.5px]">Opportunities</div>
              <div className="text-xs text-emerald-400 font-medium cursor-pointer hover:underline">View all →</div>
            </div>
            
            <div className="space-y-4">
              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-xl tracking-tight">18,400 cy dirt haul — Central Denver</div>
                    <div className="text-sm text-zinc-400 mt-1.5">Jobsite Exchange • Posted 4h ago</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-semibold text-emerald-400 tabular-nums">92</div>
                    <div className="text-[10px] text-emerald-400/70 -mt-1 tracking-widest">SCORE</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-x-2 text-xs">
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl">$42/ton</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl">4.2 mi</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl">Feb 10–14</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-xl tracking-tight">9,200 cy clean fill — Aurora</div>
                    <div className="text-sm text-zinc-400 mt-1.5">Jobsite Exchange • Posted yesterday</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-semibold text-emerald-400 tabular-nums">81</div>
                    <div className="text-[10px] text-emerald-400/70 -mt-1 tracking-widest">SCORE</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-x-2 text-xs">
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl">$38/ton</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl">11 mi</div>
                  <div className="px-3 py-1 bg-zinc-800 rounded-2xl">Feb 8–12</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* News Feed */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="uppercase text-emerald-400 text-xs font-semibold tracking-[1.5px]">News Feed</div>
              <div className="text-xs text-emerald-400 font-medium cursor-pointer hover:underline">All news →</div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5 text-[15px]">
              <div className="border-l-2 border-emerald-900 pl-4">
                <div className="font-medium leading-tight">Denver approves new industrial zoning in northeast corridor</div>
                <div className="text-xs text-zinc-500 mt-1.5">Denver Post • 6h ago</div>
              </div>
              <div className="border-l-2 border-emerald-900 pl-4">
                <div className="font-medium leading-tight">Aggregate prices up 6.2% month-over-month in Front Range</div>
                <div className="text-xs text-zinc-500 mt-1.5">Construction Dive • Yesterday</div>
              </div>
              <div className="border-l-2 border-emerald-900 pl-4">
                <div className="font-medium leading-tight">CDOT releases Q4 infrastructure spending report</div>
                <div className="text-xs text-zinc-500 mt-1.5">CDOT • Jan 31</div>
              </div>
            </div>
          </div>

          {/* Market Watch */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="uppercase text-emerald-400 text-xs font-semibold tracking-[1.5px]">Market Watch</div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-xs text-zinc-400 tracking-widest">DOW</div>
                  <div className="font-mono text-3xl font-semibold mt-1 tabular-nums">43,821</div>
                  <div className="text-emerald-400 text-xs mt-0.5 font-medium">+0.8%</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-400 tracking-widest">10Y TREASURY</div>
                  <div className="font-mono text-3xl font-semibold mt-1 tabular-nums">4.32%</div>
                  <div className="text-red-400 text-xs mt-0.5 font-medium">-0.04%</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-400 tracking-widest">COPPER</div>
                  <div className="font-mono text-3xl font-semibold mt-1 tabular-nums">$4.18</div>
                  <div className="text-emerald-400 text-xs mt-0.5 font-medium">+1.9%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="uppercase text-emerald-400 text-xs font-semibold tracking-[1.5px]">This Week</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <div className="text-xs text-zinc-400 tracking-widest">OPPORTUNITIES TRACKED</div>
                <div className="font-mono text-5xl font-semibold mt-3 tabular-nums">47</div>
                <div className="text-emerald-400 text-xs mt-2 font-medium">+9 since Monday</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <div className="text-xs text-zinc-400 tracking-widest">AVG. RESPONSE TIME</div>
                <div className="font-mono text-5xl font-semibold mt-3 tabular-nums">11m</div>
                <div className="text-emerald-400 text-xs mt-2 font-medium">-3m from last week</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                <div className="text-xs text-zinc-400 tracking-widest">ACTION ITEMS</div>
                <div className="font-mono text-5xl font-semibold mt-3 tabular-nums">6</div>
                <div className="text-amber-400 text-xs mt-2 font-medium">3 due today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import { 
  Compass, LayoutDashboard, Calendar, Target, TrendingUp, 
  Bell, User 
} from 'lucide-react'

function App() {
  const [lastUpdated] = useState('just now')

  return (
    <div className="flex h-screen bg-[#0c0e14] text-zinc-200 overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-60 bg-[#0f1117] border-r border-zinc-800 flex flex-col">
        <div className="px-6 py-5 border-b border-zinc-800 flex items-center gap-x-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center">
            <Compass className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <span className="font-semibold text-xl tracking-tight">Robert</span>
            <span className="ml-1 text-indigo-400 font-mono text-xs align-super">INTEL</span>
          </div>
        </div>

        <div className="px-3 py-4">
          <div className="px-3 py-2 bg-zinc-900 rounded-2xl flex items-center gap-x-3 text-sm font-medium">
            <LayoutDashboard className="w-4 h-4 text-indigo-400" />
            Dashboard
          </div>
          <div className="px-3 py-2 text-sm text-zinc-400 flex items-center gap-x-3 mt-1 hover:bg-zinc-900 rounded-2xl cursor-pointer">
            <Calendar className="w-4 h-4" /> Today's Summary
          </div>
          <div className="px-3 py-2 text-sm text-zinc-400 flex items-center gap-x-3 mt-1 hover:bg-zinc-900 rounded-2xl cursor-pointer">
            <Target className="w-4 h-4" /> Opportunities
          </div>
          <div className="px-3 py-2 text-sm text-zinc-400 flex items-center gap-x-3 mt-1 hover:bg-zinc-900 rounded-2xl cursor-pointer">
            <TrendingUp className="w-4 h-4" /> Market Watch
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-zinc-800 text-xs text-zinc-500">
          Last updated: {lastUpdated}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Bar */}
        <div className="h-16 border-b border-zinc-800 bg-[#0f1117] flex items-center justify-between px-8">
          <div>
            <span className="font-semibold text-xl">Dashboard</span>
            <span className="ml-3 text-sm text-zinc-400">Daily overview of construction & market intelligence</span>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="text-sm text-zinc-400">Feb 3, 2026</div>
            <div className="flex items-center gap-x-2 bg-zinc-900 px-3 py-1.5 rounded-2xl text-sm">
              <User className="w-4 h-4" />
              <span>Robert</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-8">
          
          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-400">Opportunities</div>
                <Target className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-4xl font-semibold mt-3 tabular-nums">47</div>
              <div className="text-xs text-emerald-400 mt-1">+9 since Monday</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-400">High Priority</div>
                <Bell className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-4xl font-semibold mt-3 tabular-nums">6</div>
              <div className="text-xs text-orange-400 mt-1">3 due today</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-400">Avg. Score</div>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-4xl font-semibold mt-3 tabular-nums">78</div>
              <div className="text-xs text-emerald-400 mt-1">+4 from last week</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-400">New Listings</div>
                <Target className="w-4 h-4 text-teal-400" />
              </div>
              <div className="text-4xl font-semibold mt-3 tabular-nums">14</div>
              <div className="text-xs text-teal-400 mt-1">Last 24 hours</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-400">Market Trend</div>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-4xl font-semibold mt-3 tabular-nums">+2.4%</div>
              <div className="text-xs text-emerald-400 mt-1">Copper & aggregates</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Opportunities */}
            <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="font-semibold">Top Opportunities</div>
                <div className="text-xs text-indigo-400 cursor-pointer hover:underline">View all →</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                  <div>
                    <div className="font-medium">18,400 cy dirt haul — Central Denver</div>
                    <div className="text-sm text-zinc-400">Jobsite Exchange • $42/ton • 4.2 mi</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xl text-emerald-400">92</div>
                    <div className="text-xs text-zinc-500">SCORE</div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                  <div>
                    <div className="font-medium">9,200 cy clean fill — Aurora</div>
                    <div className="text-sm text-zinc-400">Jobsite Exchange • $38/ton • 11 mi</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xl text-emerald-400">81</div>
                    <div className="text-xs text-zinc-500">SCORE</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Large aggregate request — Aurora</div>
                    <div className="text-sm text-zinc-400">Jobsite Exchange • Posted yesterday</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xl text-emerald-400">74</div>
                    <div className="text-xs text-zinc-500">SCORE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Watch */}
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="font-semibold mb-5">Market Watch</div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-zinc-400">DOW</div>
                  <div className="font-mono text-2xl font-semibold">43,821</div>
                  <div className="text-emerald-400 text-xs">+0.8%</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-400">10Y</div>
                  <div className="font-mono text-2xl font-semibold">4.32%</div>
                  <div className="text-red-400 text-xs">-0.04%</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-400">COPPER</div>
                  <div className="font-mono text-2xl font-semibold">$4.18</div>
                  <div className="text-emerald-400 text-xs">+1.9%</div>
                </div>
              </div>
            </div>

            {/* News */}
            <div className="lg:col-span-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="font-semibold mb-5">Latest Intelligence</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="border-l-2 border-indigo-900 pl-4">
                  Denver approves new industrial zoning in northeast corridor
                  <div className="text-xs text-zinc-500 mt-1">Denver Post • 6h ago</div>
                </div>
                <div className="border-l-2 border-indigo-900 pl-4">
                  Aggregate prices up 6.2% month-over-month in Front Range
                  <div className="text-xs text-zinc-500 mt-1">Construction Dive • Yesterday</div>
                </div>
                <div className="border-l-2 border-indigo-900 pl-4">
                  CDOT releases Q4 infrastructure spending report
                  <div className="text-xs text-zinc-500 mt-1">CDOT • Jan 31</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App

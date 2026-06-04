import { Compass, User } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-zinc-200">
      {/* Top Navigation */}
      <div className="border-b border-zinc-800 bg-[#0f1117]">
        <div className="max-w-screen-2xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-indigo-500 rounded-2xl flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-x-1">
                <span className="font-semibold text-2xl tracking-tighter">Robert</span>
                <span className="text-indigo-400 font-mono text-xs">INTEL</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="text-sm text-zinc-400">February 3, 2026</div>
            <div className="flex items-center gap-x-2 bg-zinc-900 px-3 py-1.5 rounded-2xl text-sm border border-zinc-800">
              <User className="w-4 h-4" />
              <span>Robert Laudick</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tighter">Dashboard</h1>
          <p className="text-zinc-400 mt-1">Daily overview of construction opportunities and market intelligence</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Active Opportunities", value: "47", change: "+9", positive: true },
            { label: "High Priority", value: "6", change: "3 due today", positive: false, warning: true },
            { label: "Average Score", value: "78", change: "+4", positive: true },
            { label: "New Listings (24h)", value: "14", change: "", positive: true },
            { label: "Market Movement", value: "+2.4%", change: "Copper", positive: true },
          ].map((kpi, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="text-sm text-zinc-400">{kpi.label}</div>
              <div className="text-4xl font-semibold mt-3 tabular-nums tracking-tighter">{kpi.value}</div>
              <div className={`text-xs mt-2 ${kpi.positive ? 'text-emerald-400' : kpi.warning ? 'text-orange-400' : 'text-zinc-400'}`}>
                {kpi.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Top Opportunities */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-semibold text-lg">Top Opportunities</div>
                <div className="text-sm text-zinc-400">Highest scoring listings from Jobsite Exchange</div>
              </div>
              <div className="text-xs text-indigo-400 cursor-pointer hover:underline">View all →</div>
            </div>

            <div className="space-y-5">
              {[
                { title: "18,400 cy dirt haul — Central Denver", source: "Jobsite Exchange", score: 92, details: "$42/ton • 4.2 mi • Feb 10–14" },
                { title: "9,200 cy clean fill — Aurora", source: "Jobsite Exchange", score: 81, details: "$38/ton • 11 mi • Feb 8–12" },
                { title: "Large aggregate request — Aurora", source: "Jobsite Exchange", score: 74, details: "Posted yesterday" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-zinc-800 last:border-0 pb-5 last:pb-0">
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-zinc-400 mt-1">{item.source} • {item.details}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-semibold text-emerald-400 tabular-nums">{item.score}</div>
                    <div className="text-xs text-zinc-500 -mt-1">SCORE</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Watch */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
            <div className="mb-6">
              <div className="font-semibold text-lg">Market Watch</div>
              <div className="text-sm text-zinc-400">Key indicators affecting construction costs</div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xs text-zinc-400 tracking-widest">DOW</div>
                <div className="font-mono text-3xl font-semibold mt-1">43,821</div>
                <div className="text-emerald-400 text-xs mt-1">+0.8%</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 tracking-widest">10Y TREASURY</div>
                <div className="font-mono text-3xl font-semibold mt-1">4.32%</div>
                <div className="text-red-400 text-xs mt-1">-0.04%</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 tracking-widest">COPPER</div>
                <div className="font-mono text-3xl font-semibold mt-1">$4.18</div>
                <div className="text-emerald-400 text-xs mt-1">+1.9%</div>
              </div>
            </div>
          </div>

          {/* Intelligence Feed */}
          <div className="lg:col-span-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
            <div className="mb-6">
              <div className="font-semibold text-lg">Latest Intelligence</div>
              <div className="text-sm text-zinc-400">Curated news and market signals</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="border-l-2 border-indigo-900 pl-5">
                <div className="font-medium leading-snug">Denver approves new industrial zoning in northeast corridor</div>
                <div className="text-xs text-zinc-500 mt-2">Denver Post • 6h ago</div>
              </div>
              <div className="border-l-2 border-indigo-900 pl-5">
                <div className="font-medium leading-snug">Aggregate prices up 6.2% month-over-month in Front Range</div>
                <div className="text-xs text-zinc-500 mt-2">Construction Dive • Yesterday</div>
              </div>
              <div className="border-l-2 border-indigo-900 pl-5">
                <div className="font-medium leading-snug">CDOT releases Q4 infrastructure spending report</div>
                <div className="text-xs text-zinc-500 mt-2">CDOT • Jan 31</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

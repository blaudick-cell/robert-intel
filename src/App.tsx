import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileText,
  LineChart,
  MapPin,
  MessageSquareText,
  Newspaper,
  Plus,
  Radar,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: BarChart3, active: true },
  { label: 'Daily Brief', icon: Sparkles },
  { label: 'Opportunities', icon: BriefcaseBusiness },
  { label: 'Market Watch', icon: LineChart },
  { label: 'News Intel', icon: Newspaper },
  { label: 'Watchlist', icon: Target },
  { label: 'Notes', icon: MessageSquareText },
]

const statCards = [
  {
    label: 'Qualified Opportunities',
    value: '47',
    change: '+9 this week',
    tone: 'violet',
    icon: BriefcaseBusiness,
  },
  {
    label: 'High-Priority Leads',
    value: '6',
    change: '3 need action',
    tone: 'amber',
    icon: Bell,
  },
  {
    label: 'Avg. Fit Score',
    value: '78',
    change: '+4 vs last week',
    tone: 'emerald',
    icon: ShieldCheck,
  },
  {
    label: 'Market Movement',
    value: '+2.4%',
    change: 'materials basket',
    tone: 'cyan',
    icon: TrendingUp,
  },
  {
    label: 'Items Captured',
    value: '128',
    change: 'news + listings',
    tone: 'rose',
    icon: Radar,
  },
]

const opportunities = [
  {
    title: '18,400 cy structural dirt export',
    location: 'Central Denver',
    source: 'Jobsite Exchange',
    score: 92,
    price: '$42/ton',
    distance: '4.2 mi',
    date: 'Feb 10–14',
    tag: 'Call today',
    tone: 'emerald',
  },
  {
    title: '9,200 cy clean fill needed',
    location: 'Aurora corridor',
    source: 'Jobsite Exchange',
    score: 81,
    price: '$38/ton',
    distance: '11 mi',
    date: 'Feb 8–12',
    tag: 'Good fit',
    tone: 'blue',
  },
  {
    title: 'Aggregate supply request',
    location: 'Commerce City',
    source: 'Private feed',
    score: 74,
    price: 'Bid req.',
    distance: '16 mi',
    date: 'This week',
    tag: 'Review',
    tone: 'amber',
  },
]

const priorities = [
  { title: 'Call Central Denver GC', label: 'High', time: '9:30 AM', color: 'bg-rose-500' },
  { title: 'Price Aurora fill haul', label: 'High', time: '11:00 AM', color: 'bg-orange-400' },
  { title: 'Review zoning alert packet', label: 'Medium', time: '1:30 PM', color: 'bg-amber-400' },
  { title: 'Confirm market basket deltas', label: 'Medium', time: 'Today', color: 'bg-blue-400' },
  { title: 'Tag weekly rollup items', label: 'Low', time: 'Fri', color: 'bg-emerald-400' },
]

const newsItems = [
  ['Denver industrial zoning expansion clears committee', 'Denver Post', '6h ago'],
  ['Front Range aggregate pricing up 6.2% MoM', 'Construction Dive', 'Yesterday'],
  ['CDOT publishes Q4 infrastructure spend update', 'CDOT', 'Jan 31'],
]

const activity = [
  ['Captured opportunity', '18,400 cy dirt haul — Central Denver', '8:30 AM'],
  ['Updated watchlist', 'Added X, CAT, VMC, EXP to materials basket', '7:45 AM'],
  ['Generated brief', 'Daily construction + market summary', '6:10 AM'],
  ['Added news item', 'Denver zoning expansion alert', 'Yesterday'],
]

function toneClasses(tone: string) {
  const map: Record<string, string> = {
    violet: 'from-violet-500/20 to-violet-500/5 text-violet-300 ring-violet-400/20',
    amber: 'from-amber-500/20 to-amber-500/5 text-amber-300 ring-amber-400/20',
    emerald: 'from-emerald-500/20 to-emerald-500/5 text-emerald-300 ring-emerald-400/20',
    cyan: 'from-cyan-500/20 to-cyan-500/5 text-cyan-300 ring-cyan-400/20',
    rose: 'from-rose-500/20 to-rose-500/5 text-rose-300 ring-rose-400/20',
    blue: 'from-blue-500/20 to-blue-500/5 text-blue-300 ring-blue-400/20',
  }
  return map[tone] ?? map.violet
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-[1.35rem] border border-white/[0.08] bg-slate-900/70 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur ${className}`}>
      {children}
    </section>
  )
}

function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: string }) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[15px] font-semibold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="mt-1 text-xs leading-5 text-slate-400">{subtitle}</p>}
      </div>
      {action && <button className="text-xs font-medium text-violet-300 hover:text-violet-200">{action} →</button>}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[18rem] top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[28rem] h-[22rem] w-[22rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen">
        <aside className="hidden w-[272px] shrink-0 border-r border-white/[0.08] bg-slate-950/75 px-4 py-5 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="mb-8 flex items-center gap-3 px-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/25">
              <Compass className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Robert Intel</div>
              <div className="text-xs text-slate-500">Operator dashboard</div>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition ${
                    item.active
                      ? 'bg-violet-500/15 text-white ring-1 ring-violet-400/25 shadow-lg shadow-violet-950/25'
                      : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${item.active ? 'text-violet-300' : ''}`} />
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="mt-auto space-y-3">
            <Card className="bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white">Daily scan active</div>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">Last collection finished at 8:45 AM.</p>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 hover:bg-violet-400">
                <RefreshCw className="h-3.5 w-3.5" /> Run scan
              </button>
            </Card>
            <button className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-300">
              <Settings className="h-4 w-4" /> Settings
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8">
          <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-violet-300/80">
                <Sparkles className="h-3.5 w-3.5" /> Daily command center
              </div>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Dashboard</h1>
              <p className="mt-1 text-sm text-slate-400">Construction opportunities, market movements, and actions worth your attention.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="hidden items-center gap-2 rounded-2xl border border-white/[0.08] bg-slate-900/70 px-3 py-2 text-sm text-slate-400 shadow-lg shadow-black/20 sm:flex">
                <Search className="h-4 w-4" /> Search intel
              </div>
              <button className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-slate-900/70 px-3 py-2 text-sm text-slate-300 shadow-lg shadow-black/20">
                <CalendarDays className="h-4 w-4 text-slate-500" /> Jun 4, 2026 <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-2xl border border-white/[0.08] bg-slate-900/70 text-slate-300 shadow-lg shadow-black/20">
                <Bell className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10">
                <Plus className="h-4 w-4" /> Add item
              </button>
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-semibold shadow-lg shadow-violet-500/20">RL</div>
            </div>
          </header>

          <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {statCards.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="group p-5 transition hover:-translate-y-0.5 hover:border-white/[0.14]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-slate-400">{stat.label}</p>
                      <div className="mt-3 text-3xl font-semibold tracking-tight text-white">{stat.value}</div>
                      <p className="mt-2 text-xs text-emerald-300">{stat.change}</p>
                    </div>
                    <div className={`rounded-2xl bg-gradient-to-br p-3 ring-1 ${toneClasses(stat.tone)}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </section>

          <section className="grid gap-6 xl:grid-cols-12">
            <Card className="p-6 xl:col-span-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionHeader title="Daily Opportunity Curve" subtitle="Qualified leads captured over the last 7 days" />
                <button className="w-fit rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">Last 7 days</button>
              </div>
              <div className="relative h-[236px] overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-950/45 p-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_48px]" />
                <svg className="relative h-full w-full" viewBox="0 0 640 210" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.38" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#22d3ee" />
                      <stop offset="55%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                  <path d="M0 158 C70 138 82 120 138 134 C190 148 211 80 265 98 C314 115 330 148 383 124 C434 100 464 129 504 102 C550 72 578 76 640 36 L640 210 L0 210 Z" fill="url(#lineFill)" />
                  <path d="M0 158 C70 138 82 120 138 134 C190 148 211 80 265 98 C314 115 330 148 383 124 C434 100 464 129 504 102 C550 72 578 76 640 36" fill="none" stroke="url(#lineStroke)" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="640" cy="36" r="5" fill="#c4b5fd" stroke="#312e81" strokeWidth="4" />
                </svg>
                <div className="absolute right-5 top-8 rounded-xl bg-violet-500 px-2 py-1 text-xs font-semibold text-white shadow-lg shadow-violet-500/30">18</div>
                <div className="absolute bottom-4 left-5 right-5 flex justify-between text-[11px] text-slate-500">
                  <span>May 29</span><span>May 30</span><span>May 31</span><span>Jun 1</span><span>Jun 2</span><span>Jun 3</span><span className="text-violet-300">Jun 4</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 xl:col-span-5">
              <SectionHeader title="Top Priorities Today" subtitle="Actions ranked by impact and freshness" action="View all" />
              <div className="space-y-3">
                {priorities.map((priority) => (
                  <div key={priority.title} className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.025] px-3 py-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${priority.color} shadow-lg`} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium text-slate-100">{priority.title}</div>
                    </div>
                    <span className={`rounded-lg px-2 py-1 text-[11px] font-medium ${priority.label === 'High' ? 'bg-rose-500/12 text-rose-300' : priority.label === 'Medium' ? 'bg-amber-500/12 text-amber-300' : 'bg-emerald-500/12 text-emerald-300'}`}>{priority.label}</span>
                    <span className="w-14 text-right text-xs text-slate-500">{priority.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 xl:col-span-5">
              <SectionHeader title="Top Opportunities" subtitle="Best matched construction leads" action="Open board" />
              <div className="space-y-4">
                {opportunities.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-white/[0.06] bg-slate-950/35 p-4 transition hover:border-white/[0.12] hover:bg-slate-950/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-white">{item.title}</h3>
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400"><MapPin className="h-3.5 w-3.5" /> {item.location} · {item.source}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-2xl font-semibold text-emerald-300">{item.score}</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500">score</div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                      {[item.price, item.distance, item.date].map((chip) => <span key={chip} className="rounded-lg bg-white/[0.05] px-2.5 py-1">{chip}</span>)}
                      <span className={`rounded-lg bg-gradient-to-br px-2.5 py-1 ring-1 ${toneClasses(item.tone)}`}>{item.tag}</span>
                    </div>
                  </article>
                ))}
              </div>
            </Card>

            <Card className="p-6 xl:col-span-3">
              <SectionHeader title="Market Watch" subtitle="Cost and rate signals" />
              <div className="space-y-4">
                {[
                  ['DOW', '43,821', '+0.8%', TrendingUp, 'text-emerald-300'],
                  ['10Y Treasury', '4.32%', '-0.04%', TrendingDown, 'text-rose-300'],
                  ['Copper', '$4.18', '+1.9%', TrendingUp, 'text-emerald-300'],
                  ['Materials Index', '112.4', '+2.4%', TrendingUp, 'text-cyan-300'],
                ].map(([label, value, change, Icon, cls]) => {
                  const MarketIcon = Icon as typeof TrendingUp
                  return (
                    <div key={label as string} className="flex items-center justify-between rounded-2xl bg-white/[0.025] px-3 py-3">
                      <div>
                        <div className="text-xs text-slate-500">{label as string}</div>
                        <div className="font-mono text-lg font-semibold text-white">{value as string}</div>
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-medium ${cls as string}`}><MarketIcon className="h-3.5 w-3.5" /> {change as string}</div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card className="p-6 xl:col-span-4">
              <SectionHeader title="Latest Intelligence" subtitle="Curated news and planning signals" action="All news" />
              <div className="space-y-4">
                {newsItems.map(([title, source, time]) => (
                  <article key={title} className="border-l border-violet-400/35 pl-4">
                    <h3 className="text-sm font-medium leading-5 text-slate-100">{title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{source} · {time}</p>
                  </article>
                ))}
              </div>
            </Card>

            <Card className="p-6 xl:col-span-8">
              <SectionHeader title="Recent Activity" subtitle="What the system collected and normalized" action="View history" />
              <div className="grid gap-3 md:grid-cols-2">
                {activity.map(([verb, detail, time], index) => (
                  <div key={detail} className="flex items-start gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.025] p-3">
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-slate-300">
                      {index % 2 === 0 ? <CheckCircle2 className="h-4 w-4 text-emerald-300" /> : <FileText className="h-4 w-4 text-violet-300" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-500">{verb}</div>
                      <div className="truncate text-sm font-medium text-slate-100">{detail}</div>
                    </div>
                    <div className="text-xs text-slate-500">{time}</div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}

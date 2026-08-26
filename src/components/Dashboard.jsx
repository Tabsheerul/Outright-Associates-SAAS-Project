import React, { useState } from 'react';

const clients = [
  {
    id: 1,
    name: 'Acme Global Industries',
    company: 'Acme Corp / Energy Sector',
    status: 'Active Engagement',
    activeServices: ['ITR', 'GST', 'Audit'],
    time: 'Just now',
    dues: {
      total: 11000,
      items: [
        { name: 'ITR Filing 26-27', invoice: 'INV-2401', amount: 6500 },
        { name: 'GST Annual Return', invoice: 'INV-2405', amount: 4500 }
      ]
    }
  },
  {
    id: 2,
    name: 'Vanguard Venture Capital',
    company: 'Vanguard Group / Financials',
    status: 'Onboarding',
    activeServices: ['Business Loan', 'CMA Data'],
    time: '42 mins ago',
    dues: {
      total: 25000,
      items: [
        { name: 'Project Report Prep', invoice: 'INV-2412', amount: 25000 }
      ]
    }
  },
  {
    id: 3,
    name: 'Nova Health Systems',
    company: 'Nova Health / Biotech',
    status: 'Under Review',
    activeServices: ['Food License', 'GST'],
    time: '2 hours ago',
    dues: {
      total: 0,
      items: []
    }
  },
  {
    id: 4,
    name: 'Apex Media Group',
    company: 'Apex Ent. / Entertainment',
    status: 'Active Engagement',
    activeServices: ['ITR'],
    time: 'Yesterday',
    dues: {
      total: 3500,
      items: [
        { name: 'ITR Filing 25-26 (Late)', invoice: 'INV-2390', amount: 3500 }
      ]
    }
  },
  {
    id: 5,
    name: 'Beacon Logistics LLC',
    company: 'Beacon Group / Supply Chain',
    status: 'Active Engagement',
    activeServices: ['GST', 'PF', 'ESI'],
    time: '3 days ago',
    dues: {
      total: 0,
      items: []
    }
  },
  {
    id: 6,
    name: 'Sovereign Cybersec',
    company: 'Sovereign Inc / Tech',
    status: 'Under Review',
    activeServices: ['Project Report', 'ITR'],
    time: '1 week ago',
    dues: {
      total: 15000,
      items: [
        { name: 'CMA Data Preparation', invoice: 'INV-2420', amount: 15000 }
      ]
    }
  },
  {
    id: 7,
    name: 'Quantum Data Dynamics',
    company: 'Quantum / Big Data',
    status: 'Active Engagement',
    activeServices: ['Audit', 'GST'],
    time: '2 weeks ago',
    dues: {
      total: 45000,
      items: [
        { name: 'Statutory Audit 25-26', invoice: 'INV-2409', amount: 40000 },
        { name: 'GST Audit', invoice: 'INV-2410', amount: 5000 }
      ]
    }
  },
  {
    id: 8,
    name: 'Horizon Renewables',
    company: 'Horizon Energy / Clean Tech',
    status: 'Onboarding',
    activeServices: ['Business Loan', 'Project Report'],
    time: '3 weeks ago',
    dues: {
      total: 0,
      items: []
    }
  },
  {
    id: 9,
    name: 'Meridian Trading Group',
    company: 'Meridian / Finance',
    status: 'Under Review',
    activeServices: ['PAN', 'ITR'],
    time: '1 month ago',
    dues: {
      total: 1500,
      items: [
        { name: 'PAN Card Application', invoice: 'INV-2433', amount: 1500 }
      ]
    }
  },
  {
    id: 10,
    name: 'Silverline Aerospace',
    company: 'Silverline / Aviation',
    status: 'Active Engagement',
    activeServices: ['GST', 'Audit'],
    time: '1 month ago',
    dues: {
      total: 0,
      items: []
    }
  },
  {
    id: 11,
    name: 'Cobalt Pharmaceuticals',
    company: 'Cobalt Pharma / Healthcare',
    status: 'Active Engagement',
    activeServices: ['Food License', 'Business License'],
    time: '2 months ago',
    dues: {
      total: 12000,
      items: [
        { name: 'Food License Renewal', invoice: 'INV-2455', amount: 8500 },
        { name: 'Trade License', invoice: 'INV-2456', amount: 3500 }
      ]
    }
  },
  {
    id: 12,
    name: 'Nebula Cloud Solutions',
    company: 'Nebula Inc / SaaS',
    status: 'Under Review',
    activeServices: ['ITR', 'PF'],
    time: '3 months ago',
    dues: {
      total: 2500,
      items: [
        { name: 'PF Registration', invoice: 'INV-2460', amount: 2500 }
      ]
    }
  }
];

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <circle cx="12" cy="12" r="10" stroke="#94A3B8" strokeWidth="2"/>
    <path d="M12 6v6l4 2" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="8" stroke="#94A3B8" strokeWidth="2"/>
    <path d="m21 21-4.35-4.35" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DiamondIcon = ({ color = '#081C44', size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
const FileTextIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);
const SettingsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ALL_SERVICES = ['ITR', 'GST', 'Audit', 'PF', 'ESI', 'Business Loan', 'CMA Data', 'Project Report', 'PAN', 'Food License', 'Business License'];
const ALL_STATUSES = ['Active Engagement', 'Onboarding', 'Under Review'];

const Dashboard = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('26-27 *');
  const [showFilters, setShowFilters] = useState(false);
  const [filterService, setFilterService] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const [filterPayment, setFilterPayment] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [showLedger, setShowLedger] = useState(false);
  const [activeTab, setActiveTab] = useState('workspace'); // 'workspace' | 'vault'

  const activeFilterCount = (filterService ? 1 : 0) + (filterStatus ? 1 : 0) + (filterPayment ? 1 : 0);

  const filteredClients = clients
    .filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(c => !filterService || c.activeServices?.includes(filterService))
    .filter(c => !filterStatus || c.status === filterStatus)
    .filter(c => {
      if (filterPayment === 'Pending') return c.dues?.total > 0;
      if (filterPayment === 'Paid') return c.dues?.total === 0;
      return true;
    })
    .sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div 
      className="h-screen w-full flex overflow-hidden p-3 gap-3 text-slate-900 font-sans"
      style={{
        backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(199, 212, 253, 0.6) 0%, rgba(255, 255, 255, 1) 100%)'
      }}
    >
      {/* COLUMN 1: Global Sidebar */}
      <aside className="w-16 border border-slate-200 rounded-xl flex flex-col items-center py-5 gap-6 bg-white flex-shrink-0 z-10 shadow-sm">
        <div className="w-10 h-10 rounded-md bg-[#0F172A] flex items-center justify-center text-white mb-2">
          <DiamondIcon color="white" size={20} />
        </div>
        <button className="text-slate-400 hover:text-slate-900 hover:bg-slate-50 p-2.5 rounded-md transition-colors"><HomeIcon /></button>
        <button className="text-[#0F172A] bg-slate-100 p-2.5 rounded-md transition-colors"><UsersIcon /></button>
        <button className="text-slate-400 hover:text-slate-900 hover:bg-slate-50 p-2.5 rounded-md transition-colors"><FileTextIcon /></button>
        
        <div className="mt-auto flex flex-col gap-4 items-center">
          <button className="text-slate-400 hover:text-slate-900 hover:bg-slate-50 p-2.5 rounded-md transition-colors"><SettingsIcon /></button>
          <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center text-white text-xs font-bold cursor-pointer">
            OA
          </div>
        </div>
      </aside>

      {/* COLUMN 2: Assessee List */}
      <div className="w-[420px] border border-slate-200 rounded-xl flex flex-col bg-white flex-shrink-0 z-10 shadow-sm overflow-hidden">
        <div className="p-6 pb-4 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Assessees</h1>
              <p className="text-xs text-slate-500 mt-1">Managing {filteredClients.length} of {clients.length} portfolios</p>
            </div>
            <button className="h-8 w-8 rounded-md bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-colors" title="Add new Assessee">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          
          {/* Search + Filter Toggle */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search clients, PAN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 pl-9 pr-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all rounded-md"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`relative h-[38px] w-[38px] flex-shrink-0 rounded-md flex items-center justify-center transition-all border ${showFilters || activeFilterCount > 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-300 hover:text-slate-900 hover:bg-slate-50'}`}
              title="Filter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[9px] font-bold rounded-md flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-md flex flex-col gap-4">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Sort by Name</p>
                <div className="flex gap-1.5">
                  {[{ key: 'asc', label: 'A → Z' }, { key: 'desc', label: 'Z → A' }].map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setSortOrder(opt.key)}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-colors border ${sortOrder === opt.key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Filter by Service</p>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_SERVICES.map(svc => (
                    <button
                      key={svc}
                      onClick={() => setFilterService(filterService === svc ? null : svc)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors border ${filterService === svc ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Filter by Status</p>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_STATUSES.map(st => (
                    <button
                      key={st}
                      onClick={() => setFilterStatus(filterStatus === st ? null : st)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors border ${filterStatus === st ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Filter by Payment</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Pending', 'Paid'].map(pay => (
                    <button
                      key={pay}
                      onClick={() => setFilterPayment(filterPayment === pay ? null : pay)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors border ${filterPayment === pay ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                    >
                      {pay === 'Pending' ? 'Has Dues' : 'Paid In Full'}
                    </button>
                  ))}
                </div>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => { setFilterService(null); setFilterStatus(null); setFilterPayment(null); }}
                  className="self-end text-[10px] font-bold text-red-600 hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col">
            {filteredClients.map((client) => {
              const isSelected = selectedClient?.id === client.id;
              return (
                <div
                  key={client.id}
                  onClick={() => { setSelectedClient(client); setActiveTab('workspace'); setShowLedger(false); }}
                  className={`flex items-center justify-between px-6 py-4 cursor-pointer border-b border-slate-100 transition-colors ${
                    isSelected ? 'bg-slate-50 border-l-4 border-l-blue-600' : 'hover:bg-slate-50 border-l-4 border-l-transparent'
                  }`}
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className={`font-bold text-sm ${isSelected ? 'text-blue-700' : 'text-slate-900'}`}>{client.name}</span>
                    <span className="text-xs text-slate-500">{client.company}</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {client.activeServices?.map(service => (
                        <span key={service} className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronRight />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* COLUMN 3: Main Workspace */}
      <div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {selectedClient ? (
          <div className="h-full flex flex-col bg-white border-l border-slate-200">
            {/* Header */}
            <div className="px-8 pt-6 border-b border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <DiamondIcon size={16} color="#475569" />
                <span className="font-semibold text-slate-600 text-xs tracking-wide uppercase">Workspace</span>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{selectedClient.name}</h2>
                  <span className="text-sm text-slate-500">{selectedClient.company}</span>
                </div>
                
                {/* Total Dues Button & Popover */}
                <div className="relative">
                  {selectedClient.dues.total > 0 ? (
                    <button 
                      onClick={() => setShowLedger(!showLedger)} 
                      className="flex items-center gap-3 bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-md border border-red-200 transition-colors shadow-sm"
                    >
                      <div className="flex flex-col items-end text-left">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-red-500">Pending Dues</span>
                        <span className="text-sm font-extrabold">₹{selectedClient.dues.total.toLocaleString('en-IN')}</span>
                      </div>
                      <svg className={`w-4 h-4 transition-transform ${showLedger ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-md border border-emerald-200 cursor-default">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span className="text-xs font-bold uppercase tracking-widest">Paid In Full</span>
                    </div>
                  )}

                  {/* Vercel-style Popover */}
                  {showLedger && selectedClient.dues.total > 0 && (
                    <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-slate-200 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 flex flex-col overflow-hidden">
                      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Outstanding Ledger</h4>
                      </div>
                      <div className="flex flex-col p-2">
                        {/* Breakdown Items dynamically mapped */}
                        {selectedClient.dues.items.map((item, i) => (
                          <div key={i} className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-md transition-colors">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900">{item.name}</span>
                              <span className="text-[10px] text-slate-500">Invoice #{item.invoice}</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-900">₹{item.amount.toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total</span>
                        <span className="text-base font-extrabold text-red-600">₹{selectedClient.dues.total.toLocaleString('en-IN')}</span>
                      </div>
                      <button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 transition-colors">
                        Record Payment
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-6 mt-6">
                <button 
                  onClick={() => setActiveTab('workspace')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'workspace' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  Active Services
                </button>
                <button 
                  onClick={() => setActiveTab('vault')}
                  className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'vault' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  Client Vault & KYC
                </button>
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
              {activeTab === 'workspace' ? (
                <div className="grid grid-cols-2 gap-6">

                  {/* ── TAX MODULE ── */}
                {selectedClient.activeServices?.some(s => ['ITR', 'Audit'].includes(s)) && (
                  <div className="col-span-1 bg-white border border-slate-200 rounded-md p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Tax & Audit</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">{selectedClient.activeServices.filter(s => ['ITR', 'Audit'].includes(s)).join(' · ')}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                      <span>Assessment Year</span>
                      <span>Status</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {[{ year: '22-23 *', filed: 'Filed' }, { year: '23-24 *', filed: 'Filed' }, { year: '24-25 *', filed: 'Filed' }, { year: '25-26 *', filed: 'Filed' }, { year: '26-27 *', filed: 'Filed' }, { year: '27-28 P', filed: 'Pending' }].map((ay) => {
                        const isActive = selectedYear === ay.year;
                        return (
                          <div key={ay.year} onClick={() => setSelectedYear(ay.year)} className={`flex justify-between items-center px-3 py-2.5 rounded-md cursor-pointer text-xs font-semibold transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                            <div className="flex items-center gap-2">
                              {isActive ? <span className="text-blue-600">→</span> : <span className="w-3"></span>}
                              <span>{ay.year}</span>
                            </div>
                            <span className={`text-[10px] w-[50px] text-center py-0.5 rounded font-bold ${ay.filed === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{ay.filed}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ── COMPLIANCE MODULE ── */}
                {selectedClient.activeServices?.some(s => ['GST', 'PF', 'ESI'].includes(s)) && (
                  <div className="col-span-1 bg-white border border-slate-200 rounded-md p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Compliance</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">{selectedClient.activeServices.filter(s => ['GST', 'PF', 'ESI'].includes(s)).join(' · ')}</p>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Monthly Returns (F/Y 26-27)</p>
                    <div className="grid grid-cols-4 gap-2">
                      {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((month, i) => {
                        const isFiled = i < 4;
                        const isCurrent = i === 4;
                        return (
                          <div key={month} className={`flex flex-col items-center py-2 rounded-md text-[10px] font-bold border ${isCurrent ? 'bg-blue-50 text-blue-700 border-blue-200' : isFiled ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                            <span>{month}</span>
                            <span className="text-[9px] mt-1">{isCurrent ? 'DUE' : isFiled ? '✓' : '—'}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ── FINANCE MODULE ── */}
                {selectedClient.activeServices?.some(s => ['Business Loan', 'CMA Data', 'Project Report'].includes(s)) && (
                  <div className="col-span-1 bg-white border border-slate-200 rounded-md p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Corporate Finance</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">{selectedClient.activeServices.filter(s => ['Business Loan', 'CMA Data', 'Project Report'].includes(s)).join(' · ')}</p>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Pipeline Status</p>
                    <div className="flex flex-col gap-0 mt-2">
                      {[{ step: 'Document Collection', done: true }, { step: 'CMA Preparation', done: true }, { step: 'Bank Submission', done: true }, { step: 'Bank Processing', done: false, current: true }, { step: 'Sanctioned', done: false }].map((s, i) => (
                        <div key={s.step} className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold border-2 ${s.done ? 'bg-emerald-500 border-emerald-500 text-white' : s.current ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-300'}`}>
                              {s.done ? '✓' : i + 1}
                            </div>
                            {i < 4 && <div className={`w-0.5 h-6 ${s.done ? 'bg-emerald-300' : 'bg-slate-100'}`}></div>}
                          </div>
                          <span className={`text-xs font-bold pt-0.5 ${s.done ? 'text-emerald-600' : s.current ? 'text-blue-700' : 'text-slate-400'}`}>{s.step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── REGISTRATION MODULE ── */}
                {selectedClient.activeServices?.some(s => ['PAN', 'Food License', 'Business License'].includes(s)) && (
                  <div className="col-span-1 bg-white border border-slate-200 rounded-md p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-amber-500 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Registrations & Licenses</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">{selectedClient.activeServices.filter(s => ['PAN', 'Food License', 'Business License'].includes(s)).join(' · ')}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-2">
                      {selectedClient.activeServices.filter(s => ['PAN', 'Food License', 'Business License'].includes(s)).map(service => {
                        const isPAN = service === 'PAN';
                        return (
                          <div key={service} className="flex justify-between items-center bg-slate-50 px-4 py-3 rounded-md border border-slate-200">
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-bold text-slate-900">{service}</span>
                              <span className="text-[10px] text-slate-500 font-mono">{isPAN ? 'ABCDE1234F' : 'Valid till 15 Aug 2028'}</span>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${isPAN ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                              {isPAN ? 'Issued' : '730 days left'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              ) : (
                // ═══════════════════════════════════════════
                //   CLIENT VAULT & KYC - COMPREHENSIVE VIEW
                // ═══════════════════════════════════════════
                <div className="flex flex-col gap-5 max-w-4xl pb-4">

                  {/* ── SECTION 1: PERSONAL / DIRECTOR DETAILS ── */}
                  <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
                    <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                      <h3 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Primary Director / Proprietor</h3>
                      <button className="text-[10px] font-bold text-blue-600 hover:underline">Edit →</button>
                    </div>
                    <div className="p-5 grid grid-cols-3 gap-x-8 gap-y-5">
                      {[
                        { label: 'Full Name', value: 'Rahul Kumar Verma' },
                        { label: 'Date of Birth', value: '14 March 1982' },
                        { label: 'Sex', value: 'Male' },
                        { label: "Father's Name", value: 'Suresh Kumar Verma' },
                        { label: 'PAN Number', value: 'ABCDE1234F', mono: true },
                        { label: 'Aadhaar Number', value: '5678 XXXX XXXX', mono: true },
                        { label: 'Phone Number', value: '+91 98765 43210' },
                        { label: 'Email Address', value: `contact@${selectedClient.name.toLowerCase().replace(/\s+/g, '')}.com` },
                        { label: 'Service Start A/Y', value: '2022-23' },
                      ].map(f => (
                        <div key={f.label}>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{f.label}</p>
                          <p className={`text-sm text-slate-900 font-semibold mt-0.5 ${f.mono ? 'font-mono' : ''}`}>{f.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── SECTION 2: ADDRESS DETAILS ── */}
                  <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
                    <div className="px-5 py-3 bg-slate-50 border-b border-slate-200">
                      <h3 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Address Details</h3>
                    </div>
                    <div className="p-5 grid grid-cols-2 gap-x-8 gap-y-5">
                      {[
                        { label: 'Permanent / Residential Address', value: '142, Ram Nagar, Sector 12, New Delhi – 110044' },
                        { label: 'Office / Business Address', value: '3rd Floor, Business Hub, Phase 1, Noida – 201301' },
                      ].map(f => (
                        <div key={f.label}>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{f.label}</p>
                          <p className="text-sm text-slate-900 font-semibold mt-0.5 leading-relaxed">{f.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── SECTION 3: SERVICE-SPECIFIC DATA ── */}
                  {/* ITR / Audit Specific */}
                  {selectedClient.activeServices?.some(s => ['ITR', 'Audit'].includes(s)) && (
                    <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
                      <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                        <h3 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Tax & Audit — Required Data</h3>
                        <span className="ml-auto text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold border border-slate-200">{selectedClient.activeServices.filter(s => ['ITR', 'Audit'].includes(s)).join(' · ')}</span>
                      </div>
                      <div className="p-5 grid grid-cols-3 gap-x-8 gap-y-5">
                        {[
                          { label: 'ITR Form Type', value: 'ITR-6 (Company)' },
                          { label: 'Business Nature', value: 'Manufacturing / Trading' },
                          { label: 'Audit Applicable', value: 'Yes (Tax Audit u/s 44AB)' },
                          { label: 'Form 26AS Status', value: 'Reconciled ✓' },
                          { label: 'AIS / TIS Status', value: 'Verified ✓' },
                          { label: 'Total Turnover (26-27)', value: '₹2.4 Crore' },
                          { label: 'Advance Tax Paid', value: '₹1,20,000' },
                          { label: 'TDS (as per 26AS)', value: '₹34,500' },
                          { label: '80C/80D Investments', value: '₹1,50,000' },
                        ].map(f => (
                          <div key={f.label}>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{f.label}</p>
                            <p className="text-sm text-slate-900 font-semibold mt-0.5">{f.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* GST / PF / ESI Specific */}
                  {selectedClient.activeServices?.some(s => ['GST', 'PF', 'ESI'].includes(s)) && (
                    <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
                      <div className="px-5 py-3 bg-blue-50 border-b border-blue-100 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <h3 className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Compliance — Required Data</h3>
                        <span className="ml-auto text-[9px] px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold border border-blue-200">{selectedClient.activeServices.filter(s => ['GST', 'PF', 'ESI'].includes(s)).join(' · ')}</span>
                      </div>
                      <div className="p-5 grid grid-cols-3 gap-x-8 gap-y-5">
                        {[
                          { label: 'GSTIN', value: '07ABCDE1234F1Z5', mono: true },
                          { label: 'GST Registration Type', value: 'Regular' },
                          { label: 'GST Start Date', value: '01 July 2017' },
                          { label: 'Business Place of Supply', value: 'Delhi (07)' },
                          { label: 'PF Registration No.', value: 'MH/PF/1234567', mono: true },
                          { label: 'ESI Registration No.', value: '31-00-123456-000-0001', mono: true },
                          { label: 'Total Employees (PF/ESI)', value: '42 Employees' },
                          { label: 'Bank Account (GST Linked)', value: 'SBI A/c ...4321' },
                        ].map(f => (
                          <div key={f.label}>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{f.label}</p>
                            <p className={`text-sm text-slate-900 font-semibold mt-0.5 ${f.mono ? 'font-mono text-xs' : ''}`}>{f.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Business Loan / CMA / Project Report Specific */}
                  {selectedClient.activeServices?.some(s => ['Business Loan', 'CMA Data', 'Project Report'].includes(s)) && (
                    <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
                      <div className="px-5 py-3 bg-purple-50 border-b border-purple-100 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        <h3 className="text-[10px] font-bold text-purple-700 uppercase tracking-widest">Corporate Finance — Required Data</h3>
                        <span className="ml-auto text-[9px] px-2 py-0.5 rounded bg-purple-100 text-purple-700 font-bold border border-purple-200">{selectedClient.activeServices.filter(s => ['Business Loan', 'CMA Data', 'Project Report'].includes(s)).join(' · ')}</span>
                      </div>
                      <div className="p-5 grid grid-cols-3 gap-x-8 gap-y-5">
                        {[
                          { label: 'Loan Amount Required', value: '₹50,00,000' },
                          { label: 'Loan Type', value: 'Working Capital + Term Loan' },
                          { label: 'Bank / Lender', value: 'State Bank of India' },
                          { label: 'Net Profit (Last 3 Yr Avg)', value: '₹8.2 Lakh / Year' },
                          { label: 'Existing Liabilities', value: '₹12,00,000' },
                          { label: 'Collateral / Security', value: 'Commercial Property' },
                          { label: 'Bank Statement Period', value: 'Apr 2023 – Mar 2024' },
                          { label: 'Udyam/MSME Reg. No.', value: 'UDYAM-DL-01-0012345', mono: true },
                        ].map(f => (
                          <div key={f.label}>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{f.label}</p>
                            <p className={`text-sm text-slate-900 font-semibold mt-0.5 ${f.mono ? 'font-mono text-xs' : ''}`}>{f.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Food License / Business License / PAN Specific */}
                  {selectedClient.activeServices?.some(s => ['PAN', 'Food License', 'Business License'].includes(s)) && (
                    <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
                      <div className="px-5 py-3 bg-amber-50 border-b border-amber-100 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <h3 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">Registrations — Required Data</h3>
                        <span className="ml-auto text-[9px] px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-bold border border-amber-200">{selectedClient.activeServices.filter(s => ['PAN', 'Food License', 'Business License'].includes(s)).join(' · ')}</span>
                      </div>
                      <div className="p-5 grid grid-cols-3 gap-x-8 gap-y-5">
                        {[
                          ...(selectedClient.activeServices.includes('PAN') ? [
                            { label: 'Applicant Type', value: 'Company' },
                            { label: 'PAN Application No.', value: 'N-881234567', mono: true },
                            { label: 'PAN Issued Date', value: '22 Jan 2010' },
                          ] : []),
                          ...(selectedClient.activeServices.includes('Food License') ? [
                            { label: 'FSSAI License No.', value: '11224057000123', mono: true },
                            { label: 'License Type', value: 'State License' },
                            { label: 'Food Category', value: 'Packaged Food / Bakery' },
                            { label: 'License Validity', value: 'Till 15 Aug 2028' },
                            { label: 'FBO Name', value: 'Cobalt Foods Pvt. Ltd.' },
                          ] : []),
                          ...(selectedClient.activeServices.includes('Business License') ? [
                            { label: 'Trade License No.', value: 'MCGM/TL/2021/45678', mono: true },
                            { label: 'Business Category', value: 'Manufacturing' },
                            { label: 'Shop Est. Reg. No.', value: 'MH/12/2021/88877', mono: true },
                          ] : []),
                        ].map(f => (
                          <div key={f.label}>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{f.label}</p>
                            <p className={`text-sm text-slate-900 font-semibold mt-0.5 ${f.mono ? 'font-mono text-xs' : ''}`}>{f.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── SECTION 4: DOCUMENT VAULT ── */}
                  <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
                    <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                      <h3 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Document Vault</h3>
                      <button className="text-[10px] font-bold text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-md transition-colors">+ Upload Document</button>
                    </div>
                    <div className="p-5 grid grid-cols-2 gap-3">
                      {[
                        { name: 'PAN Card (Director)', type: 'KYC', date: '10 Jan 2024', status: 'Verified' },
                        { name: 'Aadhaar Card (Director)', type: 'KYC', date: '10 Jan 2024', status: 'Verified' },
                        { name: 'Incorporation Certificate', type: 'Business', date: '12 Feb 2024', status: 'Verified' },
                        { name: 'Balance Sheet 25-26', type: 'Financial', date: '31 Mar 2024', status: 'Uploaded' },
                        { name: 'P&L Statement 25-26', type: 'Financial', date: '31 Mar 2024', status: 'Uploaded' },
                        { name: 'Bank Statement (6M)', type: 'Financial', date: '15 Aug 2024', status: 'Uploaded' },
                        { name: 'GST Certificate', type: 'Compliance', date: '01 Jul 2017', status: 'Verified' },
                        { name: 'Previous ITR Copy (24-25)', type: 'Tax', date: '30 Jul 2024', status: 'Uploaded' },
                      ].map((doc, idx) => {
                        const typeColors = {
                          KYC: 'bg-blue-50 text-blue-600 border-blue-100',
                          Business: 'bg-purple-50 text-purple-600 border-purple-100',
                          Financial: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                          Compliance: 'bg-amber-50 text-amber-600 border-amber-100',
                          Tax: 'bg-slate-50 text-slate-600 border-slate-200',
                        };
                        return (
                          <div key={idx} className="flex items-center justify-between p-3 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 flex-shrink-0">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-900">{doc.name}</span>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${typeColors[doc.type]}`}>{doc.type}</span>
                                  <span className="text-[9px] text-slate-400">{doc.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="text-slate-400 hover:text-slate-900 p-1" title="Download">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="border-t border-slate-200 p-6 bg-white flex items-center justify-between">
               <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secured by Outright Security Suite
              </p>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Assign Service
                </button>
                <button className="px-5 py-2.5 rounded-md bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors">
                  Edit Assessee
                </button>
                <button className="px-5 py-2.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center bg-white border-l border-slate-200">
            <div className="w-16 h-16 bg-slate-100 rounded-md flex items-center justify-center mb-6">
              <DiamondIcon color="#94A3B8" size={32} />
            </div>
            <h3 className="text-slate-900 text-xl font-extrabold mb-2">No Assessee Selected</h3>
            <p className="text-slate-500 text-sm max-w-xs mb-8">
              Select an Assessee from the directory to view their complete workspace and active services.
            </p>
            <button className="px-6 py-3 rounded-md bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14m-7-7h14"/></svg>
              Create New Assessee
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import { useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

type IconName = 'grid' | 'calendar' | 'users' | 'leaf' | 'chart' | 'settings' | 'search' | 'bell' | 'plus' | 'arrow' | 'clock' | 'more' | 'chevron' | 'logout' | 'filter'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    leaf: <><path d="M20.8 3.2C12 2.5 5.4 5.5 4 11c-1.1 4.2 2.3 7.3 5.8 6.3C15.4 15.7 18 9.7 20.8 3.2Z"/><path d="M3 21c3-6 7-9 13-12"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1a1.7 1.7 0 1 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 1 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 1 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 1 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 1 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 1 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    arrow: <><path d="M7 17 17 7M7 7h10v10"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    more: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    logout: <><path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/></>,
    filter: <><path d="M4 7h16M7 12h10m-7 5h4"/><circle cx="8" cy="7" r="1.5" fill="currentColor"/><circle cx="15" cy="12" r="1.5" fill="currentColor"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const bookings = [
  { name: 'Olivia Rhye', initials: 'OR', service: 'Deep tissue massage', time: '09:00 AM', staff: 'Maya Chen', status: 'Confirmed', color: '#dfc7b5' },
  { name: 'Phoenix Baker', initials: 'PB', service: 'Botanical facial', time: '10:30 AM', staff: 'Sophie Laurent', status: 'Checked in', color: '#c7d4c1' },
  { name: 'Lana Steiner', initials: 'LS', service: 'Aromatherapy ritual', time: '11:00 AM', staff: 'Maya Chen', status: 'Confirmed', color: '#d8c9df' },
  { name: 'Demi Wilkinson', initials: 'DW', service: 'Hot stone therapy', time: '01:30 PM', staff: 'Noah Williams', status: 'Pending', color: '#c7d5e2' },
]

const navItems: { label: string; icon: IconName }[] = [
  { label: 'Overview', icon: 'grid' }, { label: 'Appointments', icon: 'calendar' }, { label: 'Clients', icon: 'users' }, { label: 'Treatments', icon: 'leaf' }, { label: 'Reports', icon: 'chart' },
]

export default function Admin() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [activeFilter, setActiveFilter] = useState('All bookings')
  const [search, setSearch] = useState('')
  const [notice, setNotice] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<h2>A slower kind of care</h2><p>Let the day fall away with our signature <strong>deep tissue massage</strong>, thoughtfully tailored to where your body needs care most. Our therapists use warm botanical oils and grounding techniques to help you find your way back to stillness.</p><ul><li><p>Choose a 60 or 90 minute session</p></li><li><p>Personalized pressure and aromatherapy</p></li><li><p>A quiet moment to settle in before your treatment</p></li></ul><p><em>Your time, your pace, your sanctuary.</em></p>',
  })
  const filtered = useMemo(() => bookings.filter((booking) => {
    const matchesSearch = `${booking.name} ${booking.service} ${booking.staff}`.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = activeFilter === 'All bookings' || booking.status === activeFilter
    return matchesSearch && matchesFilter
  }), [search, activeFilter])

  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date())
  const feedback = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(''), 2600) }

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#3a3028] md:flex">
      {mobileOpen && <button aria-label="Close navigation" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-[#241e19]/30 md:hidden"/>}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col border-r border-[#e4ddd2] bg-[#fbf9f5] px-5 py-6 transition-transform md:static md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Link to="/" className="mb-9 flex items-center gap-3 px-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-[15px] bg-[#6ba5a0] font-serif text-xl text-white">S</span>
          <span><span className="block font-serif text-lg font-semibold leading-5">Serenova</span><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#8a7d70]">Wellness Spa</span></span>
        </Link>
        <div className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#a09487]">Workspace</div>
        <nav className="space-y-1">
          {navItems.map(({ label, icon }) => <button key={label} onClick={() => { setActiveNav(label); setMobileOpen(false); if (label === 'Treatments') document.getElementById('treatment-editor')?.scrollIntoView({ behavior: 'smooth' }); else if (label !== 'Overview') feedback(`${label} view is coming soon`) }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold transition-colors ${activeNav === label ? 'bg-[#e6efea] text-[#477a74]' : 'text-[#786e63] hover:bg-[#f0ece5]'}`}><Icon name={icon}/>{label}{label === 'Appointments' && <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[10px] text-[#6ba5a0]">8</span>}</button>)}
        </nav>
        <div className="mb-2 mt-8 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#a09487]">Preferences</div>
        <button onClick={() => feedback('Settings are coming soon')} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-[#786e63] hover:bg-[#f0ece5]"><Icon name="settings"/>Settings</button>
        <div className="mt-auto rounded-2xl border border-[#e7dfd3] bg-[#f5f1ea] p-4">
          <div className="mb-2 flex items-center justify-between"><span className="text-xs font-bold">Need a hand?</span><span className="h-2 w-2 rounded-full bg-[#8eaf86]"/></div>
          <p className="mb-3 text-[11px] leading-relaxed text-[#85796d]">Our team is here to help your sanctuary thrive.</p>
          <button onClick={() => feedback('Support team notified')} className="text-xs font-bold text-[#548d87]">Contact support <span aria-hidden="true">↗</span></button>
        </div>
        <button onClick={() => feedback('You are all caught up')} className="mt-4 flex items-center gap-3 border-t border-[#e8e1d7] px-2 pt-4 text-left"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfd4c5] text-xs font-bold text-[#66594c]">SC</span><span className="min-w-0 flex-1"><span className="block text-xs font-bold">Sarah Chen</span><span className="block text-[10px] text-[#92877b]">Spa administrator</span></span><Icon name="more" size={16}/></button>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#e4ddd2] bg-[#f5f1ea]/95 px-5 backdrop-blur md:px-9">
          <div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} aria-label="Open navigation" className="rounded-lg p-2 text-[#6a6055] hover:bg-[#ebe5db] md:hidden"><span className="block h-0.5 w-5 bg-current"/><span className="mt-1 block h-0.5 w-5 bg-current"/><span className="mt-1 block h-0.5 w-5 bg-current"/></button><div className="hidden text-xs text-[#988c80] sm:block">Serenova <span className="px-1.5">/</span><span className="font-semibold text-[#55483d]">{activeNav}</span></div><span className="font-serif text-lg font-semibold sm:hidden">{activeNav}</span></div>
          <div className="flex items-center gap-2 sm:gap-4"><label className="hidden h-10 w-56 items-center gap-2 rounded-xl border border-[#e4ddd2] bg-[#fbf9f5] px-3 text-[#998d80] md:flex"><Icon name="search" size={16}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search anything..." className="w-full bg-transparent text-xs text-[#3a3028] outline-none placeholder:text-[#a69a8d]"/><kbd className="rounded border border-[#e7dfd3] px-1 text-[9px]">⌘ K</kbd></label><button onClick={() => feedback('You’re all caught up!')} className="relative rounded-xl p-2.5 text-[#786e63] hover:bg-[#ebe5db]" aria-label="Notifications"><Icon name="bell"/><span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[#f5f1ea] bg-[#d39175]"/></button><span className="hidden h-8 w-px bg-[#e4ddd2] sm:block"/><div className="hidden items-center gap-2.5 sm:flex"><span className="text-right"><span className="block text-xs font-bold">Sarah Chen</span><span className="text-[10px] text-[#968a7e]">Administrator</span></span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ded1bf] text-xs font-bold">SC</span></div></div>
        </header>

        <div className="mx-auto max-w-[1400px] px-5 py-7 md:px-9 md:py-9">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-1 text-xs font-semibold tracking-wide text-[#8f8275]">{today} <span className="px-1">·</span> Welcome back, Sarah</p><h1 className="font-serif text-[32px] font-medium leading-tight tracking-[-.03em] md:text-[38px]">Your sanctuary at a glance</h1><p className="mt-2 text-sm text-[#8b7f73]">Here’s what’s happening at Serenova today.</p></div><button onClick={() => feedback('New appointment form opened')} className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#568f89] px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#477c76]"><Icon name="plus" size={16}/> New appointment</button></div>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Metric label="Today’s appointments" value="24" change="12%" detail="vs. yesterday" icon="calendar" tint="#e4efeb" tone="#5b918a"/>
            <Metric label="Revenue this month" value="$18,420" change="8.2%" detail="vs. last month" icon="chart" tint="#eee8f2" tone="#8c76a3"/>
            <Metric label="Active clients" value="1,284" change="4.6%" detail="vs. last month" icon="users" tint="#f2e9df" tone="#b5805c"/>
            <Metric label="Average rating" value="4.9" change="0.3" detail="from 186 reviews" icon="leaf" tint="#e9eedf" tone="#7e9669"/>
          </section>

          <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(280px,.85fr)]">
            <div className="rounded-2xl border border-[#e7dfd3] bg-[#fbf9f5] p-5 md:p-6">
              <div className="mb-5 flex items-start justify-between"><div><h2 className="font-serif text-lg font-semibold">Revenue overview</h2><p className="mt-1 text-xs text-[#968a7e]">A gentle upward trend this season</p></div><select aria-label="Revenue range" className="rounded-lg border border-[#e8e1d7] bg-[#fbf9f5] px-2.5 py-2 text-[11px] font-semibold text-[#786e63] outline-none"><option>Last 7 days</option><option>Last 30 days</option><option>This year</option></select></div>
              <div className="mb-3 flex items-end gap-2"><span className="font-serif text-3xl font-medium">$6,840</span><span className="mb-1 flex items-center gap-1 rounded-full bg-[#e7f0e9] px-2 py-1 text-[10px] font-bold text-[#59875f]"><Icon name="arrow" size={11}/> 12.8%</span></div>
              <div className="relative h-[190px] w-full"><div className="absolute inset-0 flex flex-col justify-between pb-7"><div className="border-t border-dashed border-[#e9e3d9]"/><div className="border-t border-dashed border-[#e9e3d9]"/><div className="border-t border-dashed border-[#e9e3d9]"/><div className="border-t border-dashed border-[#e9e3d9]"/></div><div className="absolute inset-0 bottom-7 flex items-end justify-between px-1"><Bars values={[42,58,48,72,57,86,68]} /></div><div className="absolute inset-x-0 bottom-0 flex justify-between px-1 text-[10px] text-[#a2968a]"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
            </div>
            <div className="flex flex-col rounded-2xl border border-[#e7dfd3] bg-[#fbf9f5] p-5 md:p-6"><div className="mb-4 flex items-center justify-between"><div><h2 className="font-serif text-lg font-semibold">Today’s schedule</h2><p className="mt-1 text-xs text-[#968a7e]">Tuesday, September 23</p></div><button onClick={() => setActiveNav('Appointments')} className="rounded-lg p-1.5 text-[#998d80] hover:bg-[#f0ece5]" aria-label="More schedule options"><Icon name="more"/></button></div><div className="mb-4 flex items-center gap-2 text-[11px] font-semibold text-[#776d62]"><span className="h-2 w-2 rounded-full bg-[#6ba5a0]"/> 8 sessions scheduled <span className="text-[#b1a69a]">·</span> <span className="font-normal text-[#968a7e]">5 remaining</span></div><div className="relative flex-1 space-y-0">{[['09:00','Deep tissue massage','Olivia Rhye · Maya'],['10:30','Botanical facial','Phoenix Baker · Sophie'],['11:00','Aromatherapy ritual','Lana Steiner · Maya'],['01:30','Hot stone therapy','Demi Wilkinson · Noah']].map(([time,title,meta],i)=><div key={time} className="flex min-h-[61px] gap-3"><span className="w-11 pt-1 text-[10px] font-semibold text-[#978b7f]">{time}</span><div className={`relative flex-1 border-l pl-3 ${i < 3 ? 'border-[#dcd4c8]' : 'border-transparent'}`}><span className="absolute -left-[4px] top-[5px] h-[7px] w-[7px] rounded-full bg-[#9dbbb0] ring-2 ring-[#fbf9f5]"/><p className="text-xs font-bold leading-tight">{title}</p><p className="mt-1 text-[10px] text-[#978b7f]">{meta}</p></div></div>)}</div><button onClick={() => setActiveNav('Appointments')} className="mt-2 flex items-center justify-center gap-1 border-t border-[#ece6dd] pt-3 text-[11px] font-bold text-[#578d86]">View full schedule <Icon name="chevron" size={14}/></button></div>
          </section>

          <section className="mt-5 overflow-hidden rounded-2xl border border-[#e7dfd3] bg-[#fbf9f5]">
            <div className="flex flex-col justify-between gap-4 p-5 md:flex-row md:items-center md:px-6"><div><h2 className="font-serif text-lg font-semibold">Upcoming appointments</h2><p className="mt-1 text-xs text-[#968a7e]">A little care, thoughtfully planned.</p></div><div className="flex flex-wrap items-center gap-2"><label className="flex h-9 items-center gap-2 rounded-lg border border-[#e8e1d7] px-2.5 text-[#998d80] md:hidden"><Icon name="search" size={15}/><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search clients" className="w-32 bg-transparent text-xs outline-none"/></label><button onClick={() => setActiveFilter(activeFilter === 'All bookings' ? 'Confirmed' : 'All bookings')} className="flex h-9 items-center gap-2 rounded-lg border border-[#e8e1d7] px-3 text-[11px] font-semibold text-[#756b60]"><Icon name="filter" size={14}/>{activeFilter}</button><button onClick={() => feedback('Appointment list exported')} className="h-9 rounded-lg border border-[#e8e1d7] px-3 text-[11px] font-semibold text-[#756b60] hover:bg-[#f5f1ea]">Export</button></div></div>
            <div className="overflow-x-auto"><table className="w-full min-w-[700px] border-collapse text-left"><thead><tr className="border-y border-[#eee8df] bg-[#f8f5ef] text-[10px] font-bold uppercase tracking-[.11em] text-[#9a8e82]"><th className="px-6 py-3 font-semibold">Client</th><th className="px-4 py-3 font-semibold">Treatment</th><th className="px-4 py-3 font-semibold">Time</th><th className="px-4 py-3 font-semibold">Therapist</th><th className="px-4 py-3 font-semibold">Status</th><th className="px-5 py-3"/></tr></thead><tbody>{filtered.map((booking)=><tr key={booking.name} className="border-b border-[#f0ebe3] last:border-0 hover:bg-[#fcfaf7]"><td className="px-6 py-3.5"><div className="flex items-center gap-3"><span style={{backgroundColor:booking.color}} className="flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold text-[#63584d]">{booking.initials}</span><span className="text-xs font-bold">{booking.name}</span></div></td><td className="px-4 py-3.5 text-xs text-[#766c61]">{booking.service}</td><td className="px-4 py-3.5 text-xs font-semibold text-[#554b41]">{booking.time}</td><td className="px-4 py-3.5 text-xs text-[#766c61]">{booking.staff}</td><td className="px-4 py-3.5"><Status value={booking.status}/></td><td className="px-5 py-3.5 text-right"><button onClick={() => feedback(`Options for ${booking.name}`)} className="rounded-lg p-1.5 text-[#9c9084] hover:bg-[#f0ece5]" aria-label={`More options for ${booking.name}`}><Icon name="more" size={16}/></button></td></tr>)}{filtered.length===0 && <tr><td colSpan={6} className="px-6 py-8 text-center text-xs text-[#968a7e]">No appointments match your search.</td></tr>}</tbody></table></div>
            <div className="flex items-center justify-between border-t border-[#eee8df] px-5 py-3.5 md:px-6"><span className="text-[10px] text-[#978b7f]">Showing <strong className="text-[#61564b]">{filtered.length ? 1 : 0}–{filtered.length}</strong> of 24 appointments</span><div className="flex gap-1"><button aria-label="Previous page" onClick={()=>feedback('You’re viewing the first page')} className="rounded-lg border border-[#e8e1d7] p-1.5 text-[#988c80]"><Icon name="chevron" size={13}/></button><button aria-label="Next page" onClick={()=>feedback('Next appointments loaded')} className="rounded-lg border border-[#e8e1d7] p-1.5 text-[#988c80]"><Icon name="chevron" size={13}/></button></div></div>
          </section>
          <section id="treatment-editor" className="mt-5 scroll-mt-24 overflow-hidden rounded-2xl border border-[#e7dfd3] bg-[#fbf9f5]">
            <div className="flex flex-col justify-between gap-4 border-b border-[#eee8df] p-5 md:flex-row md:items-center md:px-6"><div><div className="mb-1 flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e9eedf] text-[#7e9669]"><Icon name="leaf" size={15}/></span><span className="text-[10px] font-bold uppercase tracking-[.13em] text-[#8f8275]">Treatment details</span></div><h2 className="font-serif text-lg font-semibold">Deep tissue massage</h2><p className="mt-1 text-xs text-[#968a7e]">Edit the treatment description shown to your clients.</p></div><span className="w-fit rounded-full bg-[#e7f0e9] px-2.5 py-1 text-[10px] font-bold text-[#59815d]">Published</span></div>
            <div className="p-4 md:p-6">
              <div className="overflow-hidden rounded-xl border border-[#e8e1d7] bg-white shadow-[0_2px_10px_rgba(70,55,38,.025)]">
                <div role="toolbar" aria-label="Text formatting" className="flex flex-wrap items-center gap-1 border-b border-[#eee8df] bg-[#fcfaf7] p-2">
                  <ToolbarButton label="Heading 2" active={editor?.isActive('heading', { level: 2 }) ?? false} onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>H2</ToolbarButton>
                  <ToolbarButton label="Paragraph" active={editor?.isActive('paragraph') ?? false} onClick={() => editor?.chain().focus().setParagraph().run()}>¶</ToolbarButton>
                  <span className="mx-1 h-5 w-px bg-[#e7dfd3]"/>
                  <ToolbarButton label="Bold" active={editor?.isActive('bold') ?? false} onClick={() => editor?.chain().focus().toggleBold().run()}><strong>B</strong></ToolbarButton>
                  <ToolbarButton label="Italic" active={editor?.isActive('italic') ?? false} onClick={() => editor?.chain().focus().toggleItalic().run()}><em>I</em></ToolbarButton>
                  <span className="mx-1 h-5 w-px bg-[#e7dfd3]"/>
                  <ToolbarButton label="Bullet list" active={editor?.isActive('bulletList') ?? false} onClick={() => editor?.chain().focus().toggleBulletList().run()}>☷</ToolbarButton>
                  <ToolbarButton label="Numbered list" active={editor?.isActive('orderedList') ?? false} onClick={() => editor?.chain().focus().toggleOrderedList().run()}>1.</ToolbarButton>
                  <span className="mx-1 h-5 w-px bg-[#e7dfd3]"/>
                  <ToolbarButton label="Undo" onClick={() => editor?.chain().focus().undo().run()}>↶</ToolbarButton>
                  <ToolbarButton label="Redo" onClick={() => editor?.chain().focus().redo().run()}>↷</ToolbarButton>
                  <span className="ml-auto hidden pr-2 text-[10px] text-[#a2968a] sm:inline">Rich text</span>
                </div>
                <EditorContent editor={editor} className="tiptap-content min-h-[240px] px-5 py-4 md:px-8 md:py-6" />
              </div>
              <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><span className="text-[10px] text-[#a09488]">Save logs the edited HTML to the developer console.</span><button onClick={() => { const html = editor?.getHTML() ?? ''; console.log(html); feedback('Treatment description saved') }} disabled={!editor} className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#568f89] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#477c76] disabled:cursor-not-allowed disabled:opacity-50"><span aria-hidden="true">✓</span>Save</button></div>
            </div>
          </section>
          <div className="mt-6 flex flex-col justify-between gap-1 pb-3 text-[10px] text-[#a19589] sm:flex-row"><span>Serenova admin <span className="px-1">·</span> Take a moment for yourself, too.</span><span>© 2026 Serenova Wellness Spa</span></div>
        </div>
      </main>
      {notice && <div role="status" className="fixed bottom-5 right-5 z-[60] rounded-xl bg-[#3a3028] px-4 py-3 text-xs font-semibold text-white shadow-xl">{notice}</div>}
    </div>
  )
}

function Metric({label,value,change,detail,icon,tint,tone}:{label:string;value:string;change:string;detail:string;icon:IconName;tint:string;tone:string}) {
  return <div className="rounded-2xl border border-[#e7dfd3] bg-[#fbf9f5] p-5"><div className="mb-5 flex items-start justify-between"><span className="text-xs font-semibold text-[#82776b]">{label}</span><span style={{backgroundColor:tint,color:tone}} className="flex h-9 w-9 items-center justify-center rounded-xl"><Icon name={icon} size={17}/></span></div><div className="flex items-end justify-between gap-2"><span className="font-serif text-[29px] font-medium leading-none tracking-tight">{value}</span><span className="mb-0.5 inline-flex items-center gap-1 rounded-full bg-[#e7f0e9] px-2 py-1 text-[9px] font-bold text-[#59875f]"><Icon name="arrow" size={10}/>{change}</span></div><p className="mt-3 text-[10px] text-[#9c9084]">{detail}</p></div>
}

function Status({value}:{value:string}) {
  const color = value === 'Confirmed' ? 'bg-[#e7f0e9] text-[#59815d]' : value === 'Checked in' ? 'bg-[#e6efef] text-[#4d8584]' : 'bg-[#f5eddd] text-[#a17a3d]'
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${color}`}><span className="h-1.5 w-1.5 rounded-full bg-current"/>{value}</span>
}

function Bars({values}:{values:number[]}) {
  return <>{values.map((value,index)=><div key={index} className="group relative flex h-full w-[9%] items-end justify-center"><div style={{height:`${value}%`}} className={`w-full max-w-10 rounded-t-[7px] transition-colors ${index===5?'bg-[#6ba5a0]':'bg-[#c7dbd2] group-hover:bg-[#8ebbb1]'}`}><div className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded bg-[#3a3028] px-2 py-1 text-[9px] text-white group-hover:block">${(value*82).toLocaleString()}</div></div></div>)}</> 
}

function ToolbarButton({ label, active = false, onClick, children }: { label: string; active?: boolean; onClick: () => void; children: ReactNode }) {
  return <button type="button" title={label} aria-label={label} aria-pressed={active} onClick={onClick} className={`flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-xs transition-colors ${active ? 'bg-[#e6efea] text-[#477a74]' : 'text-[#74695e] hover:bg-[#f0ece5] hover:text-[#3a3028]'}`}>{children}</button>
}

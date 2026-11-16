import { type FormEvent, useEffect, useState } from 'react';
import { Search, Menu, X, ChevronDown, Plus } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const topNav = [
  { label: 'Students', href: '#intent' },
  { label: 'Faculty', href: '#about' },
  { label: 'Staff', href: '#about' },
  { label: 'Alumni', href: '#about' },
  { label: 'Partners', href: '#about' },
];

const mainNav = [
  {
    label: 'Academics',
    href: '#programs',
    children: [
      { heading: 'Colleges', links: ['AI & Digital Business', 'Robotics & Automation', 'Gaming & Simulation', 'Sports & Media Tech', 'Business & Consulting'] },
      { heading: 'Certification Academies', links: ['ACIM', 'AICTAaaS', 'Tech Software', 'Partner Academy'] },
    ],
  },
  {
    label: 'Admissions',
    href: '#admissions',
    children: [
      { heading: 'Apply', links: ['How to Apply', 'Requirements', 'Key Dates', 'FAQ'] },
      { heading: 'Cost & Aid', links: ['Tuition & Financial Aid', 'Scholarships', 'Payment Options'] },
    ],
  },
  {
    label: 'About',
    href: '#about',
    children: [
      { heading: 'University', links: ['Mission', 'Leadership', 'News & Press', 'Contact'] },
      { heading: 'Engagement', links: ['Corporate Partners', 'Advisory Boards', 'Become a Partner'] },
    ],
  },
];

function makeAnchorId(prefix: string, value: string) {
  return `${prefix}-${value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

function getMenuHref(heading: string, label: string) {
  if (heading === 'Colleges') return `#${makeAnchorId('college', label)}`;
  if (heading === 'Certification Academies') return `#${makeAnchorId('academy', label)}`;

  if (heading === 'Apply') {
    const admissionsTargets: Record<string, string> = {
      'How to Apply': '#admissions-how-to-apply',
      Requirements: '#admissions-requirements',
      'Key Dates': '#admissions-key-dates',
      FAQ: '#admissions-faq',
    };
    return admissionsTargets[label] ?? '#admissions';
  }

  if (heading === 'Cost & Aid') return '#admissions-tuition-financial-aid';
  return '#about';
}

export function Header({ activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchMessage('Enter a topic to search.');
      return;
    }

    const match = Array.from(document.querySelectorAll<HTMLElement>('main section, footer'))
      .find((section) => section.innerText.toLowerCase().includes(query));
    if (!match) {
      setSearchMessage('No matching content found. Try a program, college, or admissions topic.');
      return;
    }

    setSearchMessage('');
    setSearchOpen(false);
    match.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (match.id) window.history.replaceState(null, '', `#${match.id}`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top utility bar */}
        <div className={`hidden lg:block bg-stone-900 text-stone-300 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-10 flex items-center justify-between">
            <nav className="flex items-center gap-6">
              {topNav.map((item) => (
                <a key={item.label} href={item.href} className="text-xs font-medium tracking-wide hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a href="#programs" className="text-xs font-medium tracking-wide hover:text-white transition-colors">Program Finder</a>
              <span className="w-px h-3 bg-stone-700" />
              <a href="#about" className="text-xs font-medium tracking-wide hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className={`bg-white border-b transition-all duration-300 ${scrolled ? 'border-stone-200 shadow-sm' : 'border-stone-200'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-16 lg:h-20 flex items-center justify-between gap-8">
              {/* Logo */}
              <a href="#home" className="flex items-center gap-3 shrink-0">
                <div className="w-11 h-11 rounded-full bg-cardinal-600 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-white text-xl leading-none">T</span>
                </div>
                <div>
                  <div className="font-display font-bold text-stone-900 text-lg leading-tight tracking-tight">
                    Tech University
                  </div>
                  <div className="text-[10px] text-stone-500 leading-tight tracking-widest uppercase">
                    Technology &amp; Innovation
                  </div>
                </div>
              </a>

              {/* Desktop nav with dropdowns */}
              <nav className="hidden lg:flex items-center gap-1">
                {mainNav.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
                        activeSection === item.href.slice(1)
                          ? 'text-cardinal-700'
                          : 'text-stone-700 hover:text-cardinal-700'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openMenu === item.label ? 'rotate-180' : ''}`} />
                    </a>

                    {/* Mega menu */}
                    {openMenu === item.label && (
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[520px] bg-white border border-stone-200 shadow-xl z-50 mega-menu mega-menu-open`}>
                        <div className="p-8">
                          <div className="grid grid-cols-2 gap-8">
                            {item.children?.map((col) => (
                              <div key={col.heading}>
                                <h3 className="text-xs font-bold text-cardinal-700 uppercase tracking-widest mb-4 pb-2 border-b border-stone-200">
                                  {col.heading}
                                </h3>
                                <ul className="space-y-2.5">
                                  {col.links.map((link) => (
                                    <li key={link}>
                                      <a href={getMenuHref(col.heading, link)} className="text-sm text-stone-700 hover:text-cardinal-700 transition-colors block">
                                        {link}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right actions */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setSearchOpen((v) => !v)}
                  className="p-2 text-stone-600 hover:text-cardinal-700 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <a
                  href="#admissions"
                  className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-cardinal-600 text-white text-sm font-semibold rounded-sm hover:bg-cardinal-700 transition-colors"
                >
                  Apply Now
                </a>
                <button
                  onClick={() => setMobileOpen(true)}
                  className="lg:hidden p-2 text-stone-700"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="border-t border-stone-200 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
                <form onSubmit={handleSearch} className="flex items-center gap-4">
                  <Search className="w-5 h-5 text-stone-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search Tech University..."
                    value={searchQuery}
                    aria-label="Search the website"
                    onChange={(event) => {
                      setSearchQuery(event.target.value);
                      setSearchMessage('');
                    }}
                    className="flex-1 text-base bg-transparent outline-none placeholder:text-stone-400 text-stone-900"
                    autoFocus
                  />
                  <button type="submit" className="text-sm font-semibold text-cardinal-700 hover:text-cardinal-900">Search</button>
                  <button type="button" onClick={() => { setSearchOpen(false); setSearchMessage(''); }} className="p-1 text-stone-400 hover:text-stone-900" aria-label="Close search">
                    <X className="w-5 h-5" />
                  </button>
                </form>
                {searchMessage && <p role="status" className="mt-3 pl-9 text-sm text-stone-600">{searchMessage}</p>}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white flex flex-col">
            <div className="h-16 flex items-center justify-between px-5 border-b border-stone-200">
              <span className="font-display font-bold text-stone-900">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-stone-500" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-stone-100">
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 text-left"
                  >
                    <span className="font-display font-semibold text-lg text-stone-900">{item.label}</span>
                    <Plus className={`w-4 h-4 text-stone-400 transition-transform ${mobileSubmenu === item.label ? 'rotate-45' : ''}`} />
                  </button>
                  {mobileSubmenu === item.label && item.children && (
                    <div className="pb-4 space-y-4">
                      {item.children.map((col) => (
                        <div key={col.heading}>
                          <h4 className="text-xs font-bold text-cardinal-700 uppercase tracking-widest mb-2">{col.heading}</h4>
                          <ul className="space-y-2">
                            {col.links.map((link) => (
                              <li key={link}>
                                <a href={getMenuHref(col.heading, link)} onClick={() => setMobileOpen(false)} className="text-sm text-stone-700 hover:text-cardinal-700 transition-colors block py-1">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-1">
                {topNav.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm text-stone-700 hover:text-cardinal-700 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-stone-200">
              <a href="#admissions" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full px-5 py-3.5 bg-cardinal-600 text-white text-sm font-semibold rounded-sm">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

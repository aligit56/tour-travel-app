import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar({ links, onDestinations, onJournal, onWhy, onHome, onPlanTrip, currency = 'PKR', onCurrencyChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setIsOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <nav className="mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#102e2c]/35 px-5 py-3.5 shadow-xl shadow-black/10 backdrop-blur-md sm:px-7 lg:px-8">
        <button className="font-display text-[29px] font-semibold tracking-tight" onClick={onHome} type="button">roamwell<span className="text-[#f0a27e]">.</span></button>
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => <a className={`nav-link relative text-[17px] font-bold transition-colors hover:text-white ${activeLink === link.href ? 'text-white' : 'text-white/90'}`} href={link.href} key={link.label} onClick={(event) => { if (link.label === 'Destinations') { event.preventDefault(); onDestinations() } if (link.label === 'Journal') { event.preventDefault(); onJournal() } if (link.label === 'Why Roamwell') { event.preventDefault(); onWhy() } handleLinkClick(link.href) }}>{link.label}</a>)}
          {onCurrencyChange && <select aria-label="Choose currency" className="rounded-full border border-white/25 bg-transparent px-3 py-2 text-sm font-bold text-white outline-none" onChange={(event) => onCurrencyChange(event.target.value)} value={currency}><option className="text-[#18312f]" value="PKR">PKR</option><option className="text-[#18312f]" value="USD">USD</option><option className="text-[#18312f]" value="EUR">EUR</option></select>}<button className="rounded-full bg-[#f8f5ef] px-5 py-3 text-sm font-bold text-[#18312f] shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5" onClick={onPlanTrip} type="button">Plan a trip</button>
        </div>
        <button aria-label={isOpen ? 'Close menu' : 'Open menu'} className="rounded-full border border-white/35 p-2 md:hidden" onClick={() => setIsOpen(!isOpen)} type="button">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen && <div className="border-t border-white/20 bg-[#18312f]/95 px-5 py-5 md:hidden"><div className="flex flex-col gap-5">{links.map((link) => <a className={`nav-link relative w-fit font-medium ${activeLink === link.href ? 'text-white' : 'text-white/75'}`} href={link.href} key={link.label} onClick={(event) => { if (link.label === 'Destinations') { event.preventDefault(); onDestinations() } if (link.label === 'Journal') { event.preventDefault(); onJournal() } if (link.label === 'Why Roamwell') { event.preventDefault(); onWhy() } handleLinkClick(link.href) }}>{link.label}</a>)}{onCurrencyChange && <label className="flex w-fit items-center gap-3 text-sm text-white/75">Currency<select aria-label="Choose currency" className="rounded-[3px] border border-white/25 bg-[#18312f] px-3 py-2 text-white outline-none" onChange={(event) => onCurrencyChange(event.target.value)} value={currency}><option value="PKR">PKR</option><option value="USD">USD</option><option value="EUR">EUR</option></select></label>}<button className="w-fit rounded-full bg-[#f8f5ef] px-5 py-2.5 text-sm font-bold text-[#18312f]" onClick={onPlanTrip} type="button">Plan a trip</button></div></div>}
    </header>
  )
}

export default Navbar

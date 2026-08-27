import { ArrowLeft, Check, Compass, Heart, Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import TourCard from './TourCard'

function JourneysPage({ tours, onBack, onBook, currency, formatPrice, favoriteIds, onToggleFavorite, compareIds, onToggleCompare, onClearCompare }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const filteredTours = useMemo(() => tours.filter((tour) => {
    const matchesQuery = `${tour.title} ${tour.location}`.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'all' || (filter === 'short' && Number.parseInt(tour.duration, 10) <= 7) || (filter === 'long' && Number.parseInt(tour.duration, 10) >= 8) || (filter === 'top' && tour.rating >= 4.9)
    return matchesQuery && matchesFilter
  }), [filter, query, tours])
  const comparedTours = tours.filter((tour) => compareIds.includes(tour.id))

  return (
    <div className="min-h-screen bg-[#18312f] text-[#f8f5ef]">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <button className="mb-12 flex items-center gap-2 text-sm font-bold text-white/80 transition-colors hover:text-[#f0a27e]" onClick={onBack} type="button">
          <ArrowLeft size={17} /> Back to home
        </button>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#f0a27e]"><Compass size={16} /> The full collection</p>
          <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl">Go where your curiosity leads.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">From ancient streets to wild horizons, browse our handpicked journeys across the world.</p>
        </div>
        <div className="mb-8 grid gap-3 rounded-[4px] border border-white/15 bg-white/10 p-4 md:grid-cols-[1fr_auto_auto] md:items-center"><label className="relative block"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} /><input aria-label="Search journeys" className="w-full rounded-[3px] border border-white/20 bg-white/10 py-3 pl-10 pr-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#f0a27e]" onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations or journeys" value={query} /></label><select aria-label="Filter journeys" className="rounded-[3px] border border-white/20 bg-[#18312f] px-3 py-3 text-sm text-white outline-none" onChange={(event) => setFilter(event.target.value)} value={filter}><option value="all">All journeys</option><option value="short">Up to 7 days</option><option value="long">8+ days</option><option value="top">Top rated</option></select><p className="flex items-center gap-2 text-sm text-white/70"><Heart size={17} /> {favoriteIds.length} saved</p></div>
        {comparedTours.length > 0 && <section className="mb-8 rounded-[4px] bg-[#f8f5ef] p-4 text-[#18312f]"><div className="mb-4 flex items-center justify-between"><h2 className="font-display text-2xl">Compare journeys</h2><button aria-label="Clear comparison" className="text-[#58706a] hover:text-[#da6b47]" onClick={onClearCompare} type="button"><X size={19} /></button></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{comparedTours.map((tour) => <div className="border-t border-[#cbd4ce] pt-3 text-sm" key={tour.id}><p className="font-bold">{tour.title}</p><p className="mt-1 text-[#58706a]">{tour.location} | {tour.duration} | {formatPrice(tour.price)} | {tour.rating} rating</p><Check className="mt-2 text-[#da6b47]" size={16} /></div>)}</div></section>}
        <p className="mb-4 text-sm text-white/60">Showing {filteredTours.length} of {tours.length} journeys</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour) => <TourCard key={tour.id} {...tour} currency={currency} formatPrice={formatPrice} isCompared={compareIds.includes(tour.id)} isFavorite={favoriteIds.includes(tour.id)} onBook={onBook} onToggleCompare={onToggleCompare} onToggleFavorite={onToggleFavorite} />)}
        </div>
        {filteredTours.length === 0 && <p className="rounded-[4px] bg-white/10 p-8 text-center text-white/75">No journeys match your search.</p>}
      </div>
    </div>
  )
}

export default JourneysPage

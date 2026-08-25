import { ArrowLeft, Compass } from 'lucide-react'
import TourCard from './TourCard'

function JourneysPage({ tours, onBack, onBook }) {
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => <TourCard key={tour.id} {...tour} onBook={onBook} />)}
        </div>
      </div>
    </div>
  )
}

export default JourneysPage

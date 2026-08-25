import { ArrowUpRight, Clock, MapPin, Star } from 'lucide-react'

function TourCard({ title, location, price, duration, image, rating, onBook }) {
  const formattedPrice = `PKR ${new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }).format(price)}`

  return <article className="group overflow-hidden rounded-[4px] bg-[#f8f5ef] text-[#18312f]"><div className="relative aspect-[4/3] overflow-hidden"><img alt={`${title} in ${location}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={image} /><span className="absolute right-4 top-4 rounded-full bg-[#f0a27e] px-3 py-1 text-xs font-bold">From {formattedPrice}</span></div><div className="p-5 sm:p-6"><div className="mb-4 flex items-center justify-between text-xs text-[#58706a]"><span className="flex items-center gap-1"><MapPin size={14} />{location}</span><span className="flex items-center gap-1"><Star className="fill-[#da6b47] text-[#da6b47]" size={13} />{rating}</span></div><h3 className="font-display text-3xl">{title}</h3><div className="mt-5 flex items-center justify-between border-t border-[#d9dfd9] pt-4"><span className="flex items-center gap-2 text-sm text-[#58706a]"><Clock size={15} />{duration}</span><button aria-label={`Book ${title}`} className="flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#da6b47]" onClick={() => onBook({ title, location, price, duration, image, rating })} type="button">Book now <ArrowUpRight size={17} /></button></div></div></article>
}

export default TourCard

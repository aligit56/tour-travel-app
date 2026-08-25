import { Compass, Heart, Map, Users } from 'lucide-react'

const icons = { map: Map, users: Users, compass: Compass, heart: Heart }

function ServiceCard({ title, description, icon }) {
  const Icon = icons[icon] || Compass

  return <article className="service-card group relative border-t border-[#cbd4ce] py-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#da6b47] hover:bg-white/60 hover:px-4 hover:shadow-lg hover:shadow-[#18312f]/5 focus-within:-translate-y-2 focus-within:border-[#da6b47] focus-within:bg-white/60 focus-within:px-4 focus-within:shadow-lg focus-within:shadow-[#18312f]/5 sm:py-6"><span className="absolute inset-x-0 top-[-1px] h-0.5 origin-left scale-x-0 bg-[#da6b47] transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100" /><Icon className="mb-8 text-[#da6b47] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]" size={25} strokeWidth={1.6} /><h3 className="mb-2 font-display text-2xl text-[#18312f] transition-colors group-hover:text-[#da6b47]">{title}</h3><p className="text-sm leading-6 text-[#58706a]">{description}</p></article>
}

export default ServiceCard

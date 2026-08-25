import { ArrowRight, Play, X } from 'lucide-react'
import { useRef, useState } from 'react'

function Hero({ title, subtitle, ctaText, image, video }) {
  const imageRef = useRef(null)
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    imageRef.current?.style.setProperty('--pointer-x', `${x * 8}px`)
    imageRef.current?.style.setProperty('--pointer-y', `${y * 5}px`)
  }

  return (
    <section className="hero-motion relative flex min-h-[680px] items-end overflow-hidden bg-[#18312f] text-white sm:min-h-[760px]" id="top" onPointerMove={handlePointerMove}>
      <div className="hero-image absolute -inset-3 bg-cover bg-center" ref={imageRef} style={{ backgroundImage: `url(${image})` }} />
      {!videoFailed && <video aria-hidden="true" autoPlay className="hero-video absolute -inset-3 h-[calc(100%+24px)] w-[calc(100%+24px)] object-cover" loop muted onError={() => setVideoFailed(true)} playsInline preload="metadata" poster={image} src={video} />}
      <div aria-hidden="true" className="air-current air-current-one absolute -left-1/4 top-1/3 h-28 w-3/4 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden="true" className="air-current air-current-two absolute -right-1/4 top-2/3 h-20 w-2/3 rounded-full bg-[#9ed4d1]/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,35,32,.82),rgba(8,35,32,.22)_75%),linear-gradient(0deg,rgba(8,35,32,.65),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-12">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#f0a27e]">Travel with intention</p>
        <h1 className="font-display max-w-3xl text-5xl leading-[.98] tracking-tight sm:text-7xl lg:text-[92px]">{title}</h1>
        <div className="mt-8 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-center">
          <p className="text-base leading-7 text-white/80 sm:text-lg">{subtitle}</p>
          <a className="flex shrink-0 items-center gap-2 self-start rounded-full bg-[#f0a27e] px-5 py-3 text-sm font-bold text-[#18312f] transition-transform hover:-translate-y-1" href="#tours">{ctaText}<ArrowRight size={17} /></a>
        </div>
        <button className="story-link group mt-14 flex w-fit items-center gap-3 text-left text-sm font-bold text-white/85" onClick={() => setIsStoryOpen(true)} type="button"><span className="story-play flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/5 transition-all group-hover:scale-110 group-hover:border-[#f0a27e] group-hover:bg-[#f0a27e] group-hover:text-[#18312f]"><Play fill="currentColor" size={13} /></span><span className="border-b border-transparent pb-1 transition-colors group-hover:border-[#f0a27e]">Our way of wandering</span><ArrowRight className="-ml-1 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" size={15} /></button>
      </div>
      {isStoryOpen && <div className="story-panel fixed inset-0 z-50 flex items-center justify-center bg-[#081f1d]/85 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Our way of wandering" onClick={() => setIsStoryOpen(false)}><div className="relative w-full max-w-3xl overflow-hidden rounded-[6px] bg-[#f8f5ef] text-[#18312f] shadow-2xl" onClick={(event) => event.stopPropagation()}><button aria-label="Close story" className="absolute right-4 top-4 z-10 rounded-full bg-[#f8f5ef]/90 p-2" onClick={() => setIsStoryOpen(false)} type="button"><X size={19} /></button>{!videoFailed && <video autoPlay className="aspect-video w-full object-cover" controls loop muted playsInline poster={image} src={video} onError={() => setVideoFailed(true)} />}<div className="p-6 sm:p-8"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#da6b47]">Our way of wandering</p><h2 className="font-display text-3xl sm:text-4xl">Leave room for the unexpected.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#58706a]">We build journeys with enough structure to feel cared for and enough freedom to follow the road when it calls.</p><a className="mt-5 inline-flex items-center gap-2 text-sm font-bold" href="#services" onClick={() => setIsStoryOpen(false)}>Discover our approach <ArrowRight size={16} /></a></div></div></div>}
    </section>
  )
}

export default Hero

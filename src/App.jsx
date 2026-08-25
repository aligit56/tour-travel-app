import { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BookingPage from './components/BookingPage'
import JourneysPage from './components/JourneysPage'
import Navbar from './components/Navbar'
import ServiceCard from './components/ServiceCard'
import TourCard from './components/TourCard'
import TopicPage from './components/TopicPage'
import {
  footerLinks,
  heroContent,
  allTours,
  navLinks,
  services,
  tours,
} from './data/toursData'

function App() {
  const [showJourneys, setShowJourneys] = useState(false)
  const [selectedTour, setSelectedTour] = useState(null)
  const [activeTopic, setActiveTopic] = useState(null)

  const openBooking = (tour) => setSelectedTour(tour)
  const closeBooking = () => setSelectedTour(null)
  const openTopic = (topic) => setActiveTopic(topic)
  const topicForLink = {
    'All journeys': 'all',
    'Private trips': 'private',
    'Gift a journey': 'gift',
    'Our story': 'story',
    'Meet the guides': 'guides',
    'Contact us': 'contact',
    FAQs: 'faqs',
    'Travel insurance': 'insurance',
    Journal: 'journal',
  }
  const navigateFooter = (link) => {
    if (link === 'Home') {
      setActiveTopic(null)
      setSelectedTour(null)
      setShowJourneys(false)
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
      return
    }
    if (link === 'All journeys') {
      setShowJourneys(true)
      return
    }
    openTopic(topicForLink[link])
  }

  const homeNavigation = () => navigateFooter('Home')
  const whyNavigation = () => {
    setActiveTopic(null)
    setSelectedTour(null)
    setShowJourneys(false)
    window.requestAnimationFrame(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }))
  }
  const sharedFooter = <Footer footerLinks={footerLinks} copyright="© 2025 Roamwell Travel Co." onNavigate={navigateFooter} />

  if (activeTopic) {
    return <><Navbar links={navLinks} onHome={homeNavigation} onWhy={whyNavigation} onDestinations={() => setShowJourneys(true)} onJournal={() => openTopic('journal')} /><TopicPage topic={activeTopic} onBack={homeNavigation} onContact={() => openTopic('contact')} />{sharedFooter}</>
  }

  if (selectedTour) {
    return <><Navbar links={navLinks} onHome={homeNavigation} onWhy={whyNavigation} onDestinations={() => { closeBooking(); setShowJourneys(true) }} onJournal={() => { closeBooking(); openTopic('journal') }} /><BookingPage tour={selectedTour} onBack={closeBooking} />{sharedFooter}</>
  }

  if (showJourneys) {
    return <><Navbar links={navLinks} onHome={homeNavigation} onWhy={whyNavigation} onDestinations={() => setShowJourneys(true)} onJournal={() => openTopic('journal')} /><JourneysPage tours={allTours} onBack={() => setShowJourneys(false)} onBook={openBooking} />{sharedFooter}</>
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f5ef] text-[#18312f]">
      <Navbar links={navLinks} onHome={homeNavigation} onWhy={whyNavigation} onDestinations={() => setShowJourneys(true)} onJournal={() => openTopic('journal')} />
      <main>
        <Hero {...heroContent} />

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24" id="services">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#da6b47]">The Wanderer Standard</p>
              <h2 className="font-display text-4xl leading-tight text-[#18312f] sm:text-5xl">Travel that feels like yours.</h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#58706a]">Thoughtful details, local knowledge, and a little more room to follow your curiosity.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </section>

        <section className="bg-[#18312f] px-5 py-16 text-[#f8f5ef] sm:px-8 lg:px-12 lg:py-24" id="tours">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#f0a27e]">Handpicked escapes</p>
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">Find your next story.</h2>
              </div>
              <button className="group flex items-center gap-2 text-sm font-bold text-[#f8f5ef]" onClick={() => setShowJourneys(true)} type="button">View all journeys <span className="transition-transform group-hover:translate-x-1">-&gt;</span></button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour) => <TourCard key={tour.id} {...tour} onBook={openBooking} />)}
            </div>
          </div>
        </section>
      </main>
      {sharedFooter}
    </div>
  )
}

export default App

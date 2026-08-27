export const navLinks = [
  { label: 'Destinations', href: '#tours' },
  { label: 'Why Roamwell', href: '#services' },
  { label: 'Journal', href: '#journal' },
]

export const heroContent = {
  title: 'Go somewhere that changes you.',
  subtitle: 'Small-group journeys for the wildly curious. Discover the places that stay with you long after you return home.',
  ctaText: 'Explore journeys',
  image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85',
  video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
}

export const services = [
  { title: 'Local perspective', description: 'Meet the people who know a place by heart.', icon: 'map' },
  { title: 'Small groups', description: 'More genuine moments, fewer crowded itineraries.', icon: 'users' },
  { title: 'Thoughtful pace', description: 'Space to linger, wander, and be surprised.', icon: 'compass' },
  { title: 'Always supported', description: 'Expert help from takeoff to the way back home.', icon: 'heart' },
]

export const tours = [
  {
    id: 1,
    title: 'The Wild Coast',
    location: 'Patagonia, Chile',
    duration: '8 days',
    price: 694400,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 2,
    title: 'Island Time',
    location: 'Cyclades, Greece',
    duration: '7 days',
    price: 546000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 3,
    title: 'Forest & Fire',
    location: 'Kyoto, Japan',
    duration: '10 days',
    price: 873600,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85',
  },
]

export const allTours = [
  ...tours,
  { id: 4, title: 'Silk Road Stories', location: 'Lahore, Pakistan', duration: '9 days', price: 487200, rating: 4.9, image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=85' },
  { id: 5, title: 'Between Two Continents', location: 'Istanbul, Turkey', duration: '8 days', price: 529200, rating: 4.8, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=85' },
  { id: 6, title: 'London After Rain', location: 'London, England', duration: '6 days', price: 618800, rating: 4.7, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85' },
  { id: 7, title: 'The Golden Triangle', location: 'Rajasthan, India', duration: '11 days', price: 576800, rating: 4.9, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85' },
  { id: 8, title: 'Fire & Stone', location: 'Baku, Azerbaijan', duration: '7 days', price: 459200, rating: 4.8, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1000&q=85' },
  { id: 9, title: 'A Table in Provence', location: 'Provence, France', duration: '8 days', price: 767200, rating: 5.0, image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=85' },
  { id: 10, title: 'Ancient & Electric', location: 'Shanghai, China', duration: '10 days', price: 809200, rating: 4.9, image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1000&q=85' },
  { id: 11, title: 'Salt Roads', location: 'Marrakech, Morocco', duration: '7 days', price: 442400, rating: 4.8, image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1000&q=85' },
  { id: 12, title: 'Northern Light', location: 'Reykjavik, Iceland', duration: '8 days', price: 912800, rating: 4.9, image: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1000&q=85' },
]

export const footerLinks = [
  { heading: 'Explore', links: ['All journeys', 'Private trips', 'Gift a journey'] },
  { heading: 'About', links: ['Our story', 'Meet the guides', 'Journal'] },
  { heading: 'Support', links: ['Contact us', 'FAQs', 'Travel insurance'] },
]

export const testimonials = [
  { quote: 'Every detail felt considered, but nothing felt over-planned.', name: 'Maya R.', trip: 'The Wild Coast' },
  { quote: 'Our guide gave us the kind of Kyoto day we could never have found alone.', name: 'Daniel K.', trip: 'Forest & Fire' },
  { quote: 'Small group, big memories. Roamwell made travel feel wonderfully human.', name: 'Sara A.', trip: 'Island Time' },
]

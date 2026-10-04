export interface Property {
  id: string
  name: string
  location: string
  city: string
  state: string
  country: string
  price: number
  priceLabel: string
  type: 'Villa' | 'House' | 'Penthouse' | 'Estate' | 'Retreat'
  bedrooms: number
  bathrooms: number
  sqft: number
  lotSize: string
  yearBuilt: number
  featured: boolean
  description: string
  features: string[]
  amenities: string[]
  images: string[]
  agent: {
    name: string
    role: string
    phone: string
    email: string
    avatar: string
  }
}

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Verified working Unsplash photo IDs
const PHOTOS = {
  home1: '1600585154340-be6161a56a0c',
  home2: '1600566753086-00f18fb6b3ea',
  home3: '1600573472550-8090b5e0745e',
  home4: '1600121848594-d8644e57abab',
  home5: '1582268611958-ebfd161ef9cf',
  home6: '1600210492493-0946911123ea',
  home7: '1518780664697-55e3ad937233',
  home8: '1505691938895-1758d7feb511',
  home9: '1564507592333-c60657eea523',
  home10: '1545324418-cc1a3fa10c00',
  home11: '1568605114967-8130f3a36994',
  home12: '1577415124269-fc1140a69e91',
  home13: '1503387762-592deb58ef4e',
  home14: '1490806843957-31f4c9a91c65',
  home15: '1531973576160-7125cd663d86',
  home16: '1504609813442-a8924e83f76e',
  // Portraits
  portrait1: '1573496359142-b8d87734a5a2',
  portrait2: '1472099645785-5658abf4ff4e',
  portrait3: '1494790108377-be9c29b29330',
  portrait4: '1500648767791-00dcc994a43e',
}

export const agents = {
  daniel: {
    name: 'Daniel Morgan',
    role: 'Managing Director',
    phone: '(555) 246-7891',
    email: 'daniel@horizonproperties.com',
    avatar: img(PHOTOS.portrait2, 400),
  },
  olivia: {
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    phone: '(555) 246-7892',
    email: 'olivia@horizonproperties.com',
    avatar: img(PHOTOS.portrait1, 400),
  },
  james: {
    name: 'James Wilson',
    role: 'Investment Consultant',
    phone: '(555) 246-7893',
    email: 'james@horizonproperties.com',
    avatar: img(PHOTOS.portrait4, 400),
  },
  sophia: {
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    phone: '(555) 246-7894',
    email: 'sophia@horizonproperties.com',
    avatar: img(PHOTOS.portrait3, 400),
  },
}

export const properties: Property[] = [
  {
    id: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    price: 2350000,
    priceLabel: '$2.35 Million',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    lotSize: '0.8 acres',
    yearBuilt: 2021,
    featured: true,
    description:
      'A masterwork of contemporary architecture set against the tranquil shores of Lake Austin. Floor-to-ceiling glass walls dissolve the boundary between interior and landscape, while warm oak finishes and Italian marble create an atmosphere of refined serenity. The infinity pool appears to merge with the lake beyond, offering an uninterrupted horizon of water and sky.',
    features: [
      'Infinity pool with lake views',
      'Floor-to-ceiling thermal glass',
      'Smart home automation',
      'Italian marble finishes',
      'Private dock',
      'Wine cellar',
    ],
    amenities: ['Home theater', 'Gym', 'Sauna', '3-car garage', 'Outdoor kitchen', 'Solar panels'],
    images: [
      img(PHOTOS.home1),
      img(PHOTOS.home2),
      img(PHOTOS.home3),
      img(PHOTOS.home9),
      img(PHOTOS.home10),
    ],
    agent: agents.daniel,
  },
  {
    id: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    city: 'Malibu',
    state: 'California',
    country: 'USA',
    price: 4800000,
    priceLabel: '$4.8 Million',
    type: 'House',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5800,
    lotSize: '1.2 acres',
    yearBuilt: 2022,
    featured: true,
    description:
      'Perched on the Malibu cliffs, this architectural statement in glass and steel offers 270-degree Pacific Ocean views. The cantilevered design creates a sense of suspension over the coastline, while interiors by a renowned Milanese studio blend warm walnut with brushed bronze for an atmosphere of quiet luxury.',
    features: [
      'Ocean-facing infinity pool',
      'Cantilevered architecture',
      'Walnut interiors',
      'Private beach access',
      'Home automation system',
      'Radiant floor heating',
    ],
    amenities: ['Wine room', 'Spa', 'Screening room', '4-car garage', "Chef's kitchen", 'Rooftop terrace'],
    images: [
      img(PHOTOS.home7),
      img(PHOTOS.home3),
      img(PHOTOS.home4),
      img(PHOTOS.home11),
      img(PHOTOS.home12),
    ],
    agent: agents.olivia,
  },
  {
    id: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    city: 'Scottsdale',
    state: 'Arizona',
    country: 'USA',
    price: 3150000,
    priceLabel: '$3.15 Million',
    type: 'Estate',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    lotSize: '2.5 acres',
    yearBuilt: 2020,
    featured: true,
    description:
      'A desert modernist masterpiece that harmonizes with the rugged Sonoran landscape. Rammed-earth walls and weathered steel blend seamlessly with the natural terrain, while a negative-edge pool mirrors the vast Arizona sky. Interiors feature warm plaster, microcement floors, and custom millwork by local artisans.',
    features: [
      'Negative-edge pool',
      'Rammed-earth walls',
      'Weathered steel facade',
      'Desert landscaping',
      'Outdoor living room',
      'Star-gazing terrace',
    ],
    amenities: ['Casita guest house', 'Wine cellar', 'Home office', '3-car garage', 'Spa bathroom', 'Solar power'],
    images: [
      img(PHOTOS.home5),
      img(PHOTOS.home6),
      img(PHOTOS.home8),
      img(PHOTOS.home13),
      img(PHOTOS.home14),
    ],
    agent: agents.james,
  },
  {
    id: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    city: 'Miami',
    state: 'Florida',
    country: 'USA',
    price: 5200000,
    priceLabel: '$5.2 Million',
    type: 'House',
    bedrooms: 7,
    bathrooms: 6,
    sqft: 6500,
    lotSize: '0.5 acres',
    yearBuilt: 2023,
    featured: true,
    description:
      'A bold expression of tropical modernism on Miami\'s most coveted waterfront. The residence unfolds around a central courtyard with a reflecting pool, while floor-to-ceiling glass frames the Atlantic horizon. White terrazzo floors, teak accents, and curated lighting create a gallery-like ambiance throughout.',
    features: [
      'Private oceanfront',
      'Reflecting pool courtyard',
      'Terrazzo floors',
      'Teak millwork',
      'Summer kitchen',
      'Deep-water dock',
    ],
    amenities: ['Elevator', 'Wine cellar', 'Gym', 'Staff quarters', '5-car garage', 'Hurricane impact glass'],
    images: [
      img(PHOTOS.home1),
      img(PHOTOS.home9),
      img(PHOTOS.home2),
      img(PHOTOS.home10),
      img(PHOTOS.home15),
    ],
    agent: agents.sophia,
  },
  {
    id: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    price: 3750000,
    priceLabel: '$3.75 Million',
    type: 'Retreat',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    lotSize: '1.5 acres',
    yearBuilt: 2021,
    featured: false,
    description:
      'Nestled into the Hollywood Hills, this retreat captures panoramic city views through a fully glazed rear elevation. The design balances board-formed concrete with warm cedar, creating a dialogue between raw structure and natural warmth. A lap pool runs the length of the terrace, reflecting the city lights below.',
    features: [
      'Panoramic city views',
      'Board-formed concrete',
      'Cedar cladding',
      'Lap pool',
      'Glass elevator',
      'Home theater',
    ],
    amenities: ['Wine room', 'Gym', 'Office', '2-car garage', 'Fire pit lounge', 'Smart lighting'],
    images: [
      img(PHOTOS.home3),
      img(PHOTOS.home1),
      img(PHOTOS.home4),
      img(PHOTOS.home11),
      img(PHOTOS.home16),
    ],
    agent: agents.olivia,
  },
  {
    id: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    city: 'Beverly Hills',
    state: 'California',
    country: 'USA',
    price: 6400000,
    priceLabel: '$6.4 Million',
    type: 'Estate',
    bedrooms: 8,
    bathrooms: 7,
    sqft: 7800,
    lotSize: '1.8 acres',
    yearBuilt: 2022,
    featured: false,
    description:
      'A landmark estate in the heart of Beverly Hills, enveloped by mature palms and manicured gardens. The residence features a grand double-height entry, limestone floors throughout, and a resort-style pool pavilion. Every detail, from the bronze stair rail to the custom millwork, was executed by master craftsmen.',
    features: [
      'Resort-style pool pavilion',
      'Double-height entry',
      'Limestone floors',
      'Bronze stair rail',
      'Tennis court',
      'Motor court with fountain',
    ],
    amenities: ['Wine cellar', 'Home theater', 'Gym', 'Spa', '6-car garage', 'Guest house', 'Staff wing'],
    images: [
      img(PHOTOS.home1),
      img(PHOTOS.home2),
      img(PHOTOS.home9),
      img(PHOTOS.home12),
      img(PHOTOS.home15),
    ],
    agent: agents.daniel,
  },
  {
    id: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    city: 'Lake Tahoe',
    state: 'Nevada',
    country: 'USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3600,
    lotSize: '1.0 acres',
    yearBuilt: 2020,
    featured: false,
    description:
      'A modern interpretation of the alpine cabin, this Lake Tahoe residence pairs charred-cedar siding with expansive glass walls facing the water. The great room features a double-height stone fireplace and Douglas fir beams, while the terrace offers a hot tub submerged into the deck for seamless lake living.',
    features: [
      'Lakefront location',
      'Charred-cedar siding',
      'Double-height fireplace',
      'Douglas fir beams',
      'Integrated hot tub',
      'Private dock',
    ],
    amenities: ['Sauna', 'Boot room', 'Wine room', '2-car garage', 'Heated driveway', 'Ski storage'],
    images: [
      img(PHOTOS.home2),
      img(PHOTOS.home3),
      img(PHOTOS.home4),
      img(PHOTOS.home10),
      img(PHOTOS.home16),
    ],
    agent: agents.james,
  },
  {
    id: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    type: 'Penthouse',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    lotSize: 'N/A',
    yearBuilt: 2023,
    featured: false,
    description:
      'A full-floor penthouse atop Austin\'s most architecturally significant tower. The residence wraps around a private rooftop terrace with a plunge pool and 360-degree views of the city skyline. Interiors feature microcement walls, European oak floors, and a Bulthaup kitchen with Gaggenau appliances.',
    features: [
      'Full-floor residence',
      'Private rooftop terrace',
      'Plunge pool',
      '360-degree views',
      'Bulthaup kitchen',
      'Gaggenau appliances',
    ],
    amenities: ['Concierge', 'Gym', 'Spa', 'Wine storage', '2 parking spots', 'EV charging'],
    images: [
      img(PHOTOS.home3),
      img(PHOTOS.home4),
      img(PHOTOS.home7),
      img(PHOTOS.home11),
      img(PHOTOS.home12),
    ],
    agent: agents.sophia,
  },
]

export const services = [
  {
    id: 'luxury-home-sales',
    title: 'Luxury Home Sales',
    description: 'Curated representation of exceptional properties for discerning sellers and buyers.',
    image: img(PHOTOS.home1, 1200),
  },
  {
    id: 'property-investment',
    title: 'Property Investment',
    description: 'Strategic acquisition guidance backed by deep market intelligence and analysis.',
    image: img(PHOTOS.home6, 1200),
  },
  {
    id: 'property-marketing',
    title: 'Property Marketing',
    description: 'Cinematic photography, film, and editorial campaigns that position properties as art.',
    image: img(PHOTOS.home2, 1200),
  },
  {
    id: 'real-estate-advisory',
    title: 'Real Estate Advisory',
    description: 'Confidential counsel on portfolio strategy, market entry, and long-term positioning.',
    image: img(PHOTOS.home4, 1200),
  },
  {
    id: 'property-valuation',
    title: 'Property Valuation',
    description: 'Rigorous, evidence-based appraisals grounded in comparable sales and architectural merit.',
    image: img(PHOTOS.home11, 1200),
  },
  {
    id: 'relocation-services',
    title: 'Relocation Services',
    description: 'End-to-end relocation support, from neighborhood discovery to move-in coordination.',
    image: img(PHOTOS.home12, 1200),
  },
]

export const teamMembers = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    image: img(PHOTOS.portrait2, 800),
    email: 'daniel@horizonproperties.com',
    phone: '(555) 246-7891',
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    image: img(PHOTOS.portrait1, 800),
    email: 'olivia@horizonproperties.com',
    phone: '(555) 246-7892',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Investment Consultant',
    image: img(PHOTOS.portrait4, 800),
    email: 'james@horizonproperties.com',
    phone: '(555) 246-7893',
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    image: img(PHOTOS.portrait3, 800),
    email: 'sophia@horizonproperties.com',
    phone: '(555) 246-7894',
  },
]

export const whyChooseReasons = [
  {
    title: 'Curated Portfolio',
    description: 'Every property in our portfolio is hand-selected for architectural distinction and investment merit.',
  },
  {
    title: 'Market Intelligence',
    description: 'Decades of hyper-local expertise across the most sought-after luxury markets in the country.',
  },
  {
    title: 'Discretion & Trust',
    description: 'Absolute confidentiality and a fiduciary commitment to your goals, from first viewing to closing.',
  },
  {
    title: 'Global Network',
    description: 'A connected network of buyers, sellers, architects, and investors spanning three continents.',
  },
]

// Shared image URLs for page heroes
export const pageImages = {
  about: img(PHOTOS.home1, 2000),
  services: img(PHOTOS.home2, 2000),
  team: img(PHOTOS.home4, 2000),
  contact: img(PHOTOS.home11, 2000),
  hero: img(PHOTOS.home1, 2000),
  aboutMain: img(PHOTOS.home6, 1200),
  aboutSecondary: img(PHOTOS.home2, 800),
}

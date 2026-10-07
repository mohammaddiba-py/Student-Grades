export interface Property {
  id: string
  name: string
  location: string
  city: string
  state: string
  country: string
  price: number // in USD
  priceLabel: string
  type: PropertyType
  beds: number
  baths: number
  sqft: number
  lotSqft?: number
  yearBuilt: number
  garage?: number
  featured: boolean
  image: string
  gallery: string[]
  description: string
  features: string[]
  amenities: string[]
  agentId: string
}

export type PropertyType =
  | 'Villa'
  | 'Penthouse'
  | 'Estate'
  | 'House'
  | 'Residence'
  | 'Retreat'

export interface Service {
  id: string
  title: string
  description: string
  image: string
  number: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  email: string
  phone: string
  bio: string
}

export interface Agent {
  id: string
  name: string
  role: string
  image: string
  email: string
  phone: string
}

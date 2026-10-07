/**
 * Central image registry — every photo ID here has been verified to exist on
 * the Unsplash CDN (404s were confirmed for removed IDs). Keep adding new
 * images ONLY after verifying the ID returns HTTP 200.
 */
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  // Exteriors — modern / luxury architecture
  villaDusk: img('1512917774080-9991f1c4c750'), // villa with pool at dusk (hero fallback)
  glassVilla: img('1580587771525-78b9dba3b914'), // white modern villa with pool
  modernHome: img('1600047509807-ba8f99d2cdde'), // luxury modern home, evening
  poolHouse: img('1600585152220-90363fe7e115'), // modern house with pool
  hillsideHome: img('1600566753086-00f18fb6b3ea'), // modern home exterior
  sunsetHouse: img('1523217582562-09d0def993a6'), // house exterior, warm evening
  terraceDusk: img('1416331108676-a22ccb276e35'), // modern house terrace at dusk
  whiteModern: img('1568605114967-8130f3a36994'), // white modern house
  gardenHouse: img('1570129477492-45c003edd2be'), // contemporary house with lawn
  estate: img('1583608205776-bfd35f0d9f83'), // luxury estate
  duskVilla: img('1605276374104-dee2a0ed3cd6'), // villa at blue hour
  modernFacade: img('1613977257363-707ba9348227'), // architectural facade
  drivewayHouse: img('1605146769289-440113cc3d00'), // house exterior with driveway

  // Interiors — living, dining, kitchen
  livingRoom: img('1616486338812-3dadae4b4ace'),
  loftInterior: img('1502672260266-1c1ef2d93688'),
  cozyLiving: img('1522708323590-d24dbb6b0267'),
  apartment: img('1560448204-e02f11c3d0e2'),
  penthouseInterior: img('1493809842364-78817add7ffb'),
  classicInterior: img('1554995207-c18c203602cb'),
  bedroomSuite: img('1560448075-bb485b067938'),
  diningSuite: img('1512918728675-ed5a9ecdebfd'),
  loungeSuite: img('1600210492486-724fe5c67fb0'),
  staircase: img('1502005229762-cf1b2da7c5d6'),
  interiorWarm: img('1600607687920-4e2a09cf159d'),
  interiorLight: img('1600121848594-d8644e57abab'),
  bathSuite: img('1616594039964-ae9021a400a0'),

  // Portraits
  portraitMan1: img('1507003211169-0a1dd7228f2d', 800),
  portraitMan2: img('1500648767791-00dcc994a43e', 800),
  portraitWoman1: img('1438761681033-6461ffad8d80', 800),
  portraitWoman2: img('1580489944761-15a19d654956', 800),
} as const

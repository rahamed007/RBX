/* ------------------------------------------------------------------ */
/*  ROYAL BENGAL X — content layer                                     */
/* ------------------------------------------------------------------ */

export type Podium = { first: number; second: number; third: number };

export interface Player {
  slug: string;
  handle: string;
  realName: string;
  role: string;
  type: 'Attack' | 'Stamina' | 'Balance' | 'Defense';
  age: number;
  city: string;
  joined: string;
  tagline: string;
  quote: string;
  bio: string[];
  signatureBey: string;
  stats: { attack: number; burst: number; stamina: number; control: number };
  podium: Podium;
  tournaments: { name: string; year: string; place: 1 | 2 | 3; location: string }[];
  image: string;
  featured?: boolean;
  leadership?: 'Captain' | 'Vice Captain' | 'Founder';
}

export const players: Player[] = [
  {
    slug: 'cmx',
    handle: 'CMX',
    realName: 'MD Khaled Mahmud',
    role: 'Captain',
    type: 'Attack',
    age: 24,
    city: 'Dhaka',
    joined: '2023',
    tagline: 'The Tiger’s Edge',
    quote: 'We don’t chase storms. We are the storm.',
    bio: [
      'CMX co-founded Royal Bengal X in a rented Dhanmondi garage with three tops, one stadium, and a promise: Bangladesh would one day roar on the world stage. As captain he leads by example — first to train, last to leave, and undefeated in the moments that matter most.',
      'His aggressive left-spin style and signature Rogue Fang Xodus-9 have made him the most feared attacker in the country. Two national Open titles, back-to-back G1 Ranking crowns, and a SEA Open silver medal later, CMX remains the heartbeat of the Royal Bengal roar.',
    ],
    signatureBey: 'Rogue Fang Xodus-9',
    stats: { attack: 96, burst: 91, stamina: 78, control: 88 },
    podium: { first: 14, second: 9, third: 6 },
    tournaments: [
      { name: 'G1 National Ranking', year: '2026', place: 1, location: 'Dhaka' },
      { name: 'G2 Dhaka Masters', year: '2026', place: 1, location: 'Dhaka' },
      { name: 'Bangladesh National Beyblade X Open', year: '2025', place: 1, location: 'Dhaka' },
      { name: 'SEA Beyblade X Open', year: '2026', place: 2, location: 'Kuala Lumpur, MY' },
      { name: 'Beyblade X S1 Bangladesh Championship', year: '2024', place: 1, location: 'Dhaka' },
      { name: 'MYBX Invitational', year: '2025', place: 3, location: 'Kuala Lumpur, MY' },
    ],
    image: '/assets/players/cmx.PNG',
    featured: true,
    leadership: 'Captain',
  },
  {
    slug: 'shadow-sf',
    handle: 'Shadow SF',
    realName: 'Shakib Ferdous',
    role: 'Founder & Vice Captain',
    type: 'Balance',
    age: 27,
    city: 'Dhaka',
    joined: '2023',
    tagline: 'The Silent Storm',
    quote: 'Every Spin Has a Purpose, Every Move Has My Control.',
    bio: [
      'Every Spin Has a Purpose, Every Move Has My Control.',
    ],
    signatureBey: 'Shade Serpent Surge-0',
    stats: { attack: 72, burst: 70, stamina: 96, control: 91 },
    podium: { first: 11, second: 12, third: 8 },
    tournaments: [
      { name: 'Individual League S1', year: '2025', place: 1, location: 'Dhaka' },
      { name: 'Team League Bangladesh S2', year: '2026', place: 1, location: 'Dhaka' },
      { name: 'Summer Burst Open', year: '2024', place: 2, location: 'Dhaka' },
      { name: 'SEA Beyblade X Open', year: '2026', place: 2, location: 'Kuala Lumpur, MY' },
      { name: 'G3 National Circuit Finals', year: '2026', place: 3, location: 'Dhaka' },
    ],
    image: '/assets/players/shadow-sf.jpeg',
    featured: true,
    leadership: 'Founder',
  },
  {
    slug: 'blader-igris',
    handle: 'Blader Igris',
    realName: 'Zidan Khan',
    role: 'Vanguard',
    type: 'Attack',
    age: 23,
    city: 'Dhaka',
    joined: '2023',
    tagline: 'The Iron Claw',
    quote: 'Every burst is a decision. I make mine fast.',
    bio: [
      'I am Not A Genius also Not a Prodigy that’s why I am more dangerous than any of you,My Magic Power is Not Giving up',
    ],
    signatureBey: 'dran strike 360 RUSH',
    stats: { attack: 92, burst: 86, stamina: 74, control: 80 },
    podium: { first: 9, second: 7, third: 10 },
    tournaments: [
      { name: 'Dhaka Dawn International', year: '2026', place: 3, location: 'Dhaka' },
      { name: 'G3 Dhaka Masters', year: '2024', place: 3, location: 'Dhaka' },
      { name: 'RBX Clash Series Vol. 1', year: '2024', place: 2, location: 'Dhaka' },
      { name: 'Team League Bangladesh S2', year: '2026', place: 1, location: 'Dhaka' },
    ],
    image: '/assets/players/zidan.png',
    featured: true,
  },
  {
    slug: 'tamim-x',
    handle: 'Tamim X',
    realName: 'Tamim Arabi',
    role: 'Striker',
    type: 'Attack',
    age: 21,
    city: 'Dhaka',
    joined: '2024',
    tagline: 'The North Wind',
    quote: 'Dhaka made me patient. The arena made me deadly.',
    bio: [
      'Tamim X rose from Sylhet’s hilltop arenas to become RBX’s most explosive striker. His burst finishes arrive fast and often — the port city of Chattogram learned that the hard way at the G2 Clash.',
      'An Individual League S2 champion, Tamim represents the new generation of Bangladeshi bladers: hungry, technical, and utterly unbothered by the noise of a packed stadium.',
    ],
    signatureBey: 'Tempest Tiger Vanish-3',
    stats: { attack: 93, burst: 89, stamina: 70, control: 82 },
    podium: { first: 10, second: 8, third: 5 },
    tournaments: [
      { name: 'Individual League S2', year: '2026', place: 1, location: 'Dhaka' },
      { name: 'G2 Chattogram Clash', year: '2025', place: 1, location: 'Chattogram' },
      { name: 'RBX Invitational Cup', year: '2025', place: 2, location: 'Dhaka' },
      { name: 'SEA Beyblade X Open', year: '2026', place: 2, location: 'Kuala Lumpur, MY' },
    ],
    image: '/assets/players/tamim.jpeg',
    featured: true,
  },
  {
    slug: 'nfs-x',
    handle: 'NFS X',
    realName: 'Nafees Rahman ',
    role: 'Controller',
    type: 'Balance',
    age: 22,
    city: 'Dhaka',
    joined: '2024',
    tagline: 'The Meta Architect',
    quote: 'Read the format. Then rewrite it.',
    bio: [
      'NFS X is RBX’s format specialist — the blader who studies rulebooks so the rest of the squad can break them. His control-first balance style turns chaotic brackets into quiet, calculated runs.',
      'A G3 Chattogram Circuit runner-up and the squad’s resident data mind, NFS X designs the practice regimes that keep nine competitive egos spinning as one unit.',
    ],
    signatureBey: 'Nova Forge Flux-5',
    stats: { attack: 76, burst: 74, stamina: 84, control: 94 },
    podium: { first: 7, second: 9, third: 8 },
    tournaments: [
      { name: 'G3 Chattogram Circuit', year: '2026', place: 2, location: 'Chattogram' },
      { name: 'RBX Academy Clash', year: '2026', place: 1, location: 'Rajshahi' },
      { name: 'Winter Burst Clash', year: '2025', place: 3, location: 'Sylhet' },
      { name: 'Team League Bangladesh S2', year: '2026', place: 1, location: 'Dhaka' },
    ],
    image: '/assets/players/nafis.png',
  },
  {
    slug: 'omnix',
    handle: 'Omnix',
    realName: 'Sayham Rhaman',
    role: 'Strategist',
    type: 'Balance',
    age: 25,
    city: 'North Bengal',
    joined: '2023',
    tagline: 'The Omniscient',
    quote: 'I already know how this ends.',
    bio: [
      'Omnix plays beyblade like grandmaster chess — three matchups ahead, never rattled, never rushed. His Omnisphere Genesis-10 is a mirror of its pilot: balanced, adaptive, and impossible to read.',
      'From the RBX Invitational Cup title to a perfect finals run at the G3 National Circuit Finals, Omnix’s trophy cabinet proves that the sharpest mind in the arena cuts deeper than the sharpest blade.',
    ],
    signatureBey: 'Omnisphere Genesis-10',
    stats: { attack: 80, burst: 82, stamina: 82, control: 92 },
    podium: { first: 12, second: 6, third: 7 },
    tournaments: [
      { name: 'G3 National Circuit Finals', year: '2026', place: 1, location: 'Dhaka' },
      { name: 'RBX Invitational Cup', year: '2025', place: 1, location: 'Dhaka' },
      { name: 'Bangladesh National Beyblade X Open', year: '2025', place: 2, location: 'Dhaka' },
      { name: 'Dhaka Dawn International', year: '2026', place: 3, location: 'Dhaka' },
    ],
    image: '/assets/players/omnix.jpeg',
    featured: true,
  },
  {
    slug: 'androx',
    handle: 'AndroX',
    realName: 'Al Mussabir Ahmed',
    role: 'Powerhouse',
    type: 'Attack',
    age: 26,
    city: 'Dhaka',
    joined: '2023',
    tagline: 'The Red Machine',
    quote: 'Spin is physics. Fear is optional.',
    bio: [
      'AndroX is raw voltage in jersey form. The Khulna powerhouse hits harder than anyone in South Asian beyblade, and his Andro Crusher Doom-2 has ended more streaks than any other blade on the roster.',
      'A G1 national runner-up and the RBX New Year Rumble champion, AndroX opens tournaments like weather systems — you don’t watch him, you survive him.',
    ],
    signatureBey: 'Andro Crusher Doom-2',
    stats: { attack: 97, burst: 88, stamina: 68, control: 75 },
    podium: { first: 11, second: 8, third: 4 },
    tournaments: [
      { name: 'RBX New Year Rumble', year: '2026', place: 1, location: 'Dhaka' },
      { name: 'G1 National Ranking', year: '2025', place: 2, location: 'Dhaka' },
      { name: 'G2 Chattogram Clash', year: '2025', place: 3, location: 'Chattogram' },
      { name: 'Team League Bangladesh S2', year: '2026', place: 1, location: 'Dhaka' },
    ],
    image: '/assets/players/androx.png',
  },
  {
    slug: 'rayn',
    handle: 'Rayn',
    realName: 'Rayan Ahmed',
    role: 'Flanker',
    type: 'Stamina',
    age: 20,
    city: 'Barisal',
    joined: '2024',
    tagline: 'The Raindrop',
    quote: 'Slow storms still flood the arena.',
    bio: [
      'Rayn wins the way rivers carve deltas — slowly, and then all at once. His monsoon-mirage stamina game frustrates attackers into mistakes, and his flanker role lets him exploit exhausted opponents late in matches.',
      'A Winter Burst Clash podium finisher from Barisal, Rayn is the squad’s calm under fire and its most improved blader two seasons running.',
    ],
    signatureBey: 'Monsoon Mirage Extend-4',
    stats: { attack: 74, burst: 72, stamina: 91, control: 85 },
    podium: { first: 5, second: 7, third: 9 },
    tournaments: [
      { name: 'Winter Burst Clash', year: '2025', place: 3, location: 'Sylhet' },
      { name: 'RBX Invitational Cup', year: '2025', place: 3, location: 'Dhaka' },
      { name: 'G3 Chattogram Circuit', year: '2026', place: 2, location: 'Chattogram' },
      { name: 'Team League Bangladesh S2', year: '2026', place: 1, location: 'Dhaka' },
    ],
    image: '/assets/players/ryan.jpeg',
  },
  {
    slug: 'blader-17',
    handle: 'Blader 17',
    realName: 'Didar Imran',
    role: 'Rookie Prodigy',
    type: 'Attack',
    age: 18,
    city: 'Rajshahi',
    joined: '2026',
    tagline: 'The 17th Strike',
    quote: 'Seventeen spins. One destiny.',
    bio: [
      'The youngest roster signing in RBX history. Blader 17 tore through the Rajshahi junior circuit at 16 and earned his jersey number — and his name — by finishing second in his debut RBX Academy Clash.',
      'Coached directly by CMX, the prodigy’s Seventh Sin Rush-6 hits like a freight train. Bangladesh’s blading future, already on the podium.',
    ],
    signatureBey: 'Seventh Sin Rush-6',
    stats: { attack: 89, burst: 84, stamina: 66, control: 78 },
    podium: { first: 3, second: 4, third: 2 },
    tournaments: [
      { name: 'RBX Academy Clash', year: '2026', place: 2, location: 'Rajshahi' },
      { name: 'RBX New Year Rumble', year: '2026', place: 3, location: 'Dhaka' },
      { name: 'Individual League S2', year: '2026', place: 3, location: 'Dhaka' },
    ],
    image: '/assets/players/blader-17.PNG',
  },
];

/* ------------------------------------------------------------------ */

export type TournamentCategory =
  | 'Local Ranked'
  | 'Casual'
  | 'S1'
  | 'G3'
  | 'G2'
  | 'G1'
  | 'International'
  | 'Individual League'
  | 'Team League';

export interface Tournament {
  id: string;
  name: string;
  category: TournamentCategory;
  placement: 1 | 2 | 3;
  year: string;
  location: string;
  winner: string;
  note: string;
}

export const tournamentCategories: TournamentCategory[] = [
  'Local Ranked',
  'Casual',
  'S1',
  'G3',
  'G2',
  'G1',
  'International',
  'Individual League',
  'Team League',
];

export const tournaments: Tournament[] = [
  { id: 't1', name: 'RBX Clash Series Vol. 1', category: 'Local Ranked', placement: 1, year: '2024', location: 'Dhaka', winner: 'CMX', note: 'The first official RBX ranked clash — 64 bladers, one crown.' },
  { id: 't2', name: 'Summer Burst Open', category: 'Casual', placement: 2, year: '2024', location: 'Dhaka', winner: 'Shadow SF', note: 'Season opener hosted at the Dhanmondi arena.' },
  { id: 't3', name: 'Beyblade X S1 Bangladesh Championship', category: 'S1', placement: 1, year: '2024', location: 'Dhaka', winner: 'CMX', note: 'RBX claims the inaugural S1 national title.' },
  { id: 't4', name: 'G3 Dhaka Masters', category: 'G3', placement: 3, year: '2024', location: 'Dhaka', winner: 'Blader Igris', note: 'Igris storms the podium in his Masters debut.' },
  { id: 't5', name: 'G2 Chattogram Clash', category: 'G2', placement: 1, year: '2025', location: 'Chattogram', winner: 'Tamim X', note: 'Tamim X takes the port city with a burst finish.' },
  { id: 't6', name: 'G1 National Ranking', category: 'G1', placement: 2, year: '2025', location: 'Dhaka', winner: 'AndroX', note: 'The Red Machine edges the final burst by a single point.' },
  { id: 't7', name: 'Bangladesh National Beyblade X Open', category: 'Local Ranked', placement: 1, year: '2025', location: 'Dhaka', winner: 'CMX', note: 'Back-to-back national Open titles for the captain.' },
  { id: 't8', name: 'RBX Invitational Cup', category: 'Casual', placement: 1, year: '2025', location: 'Dhaka', winner: 'Omnix', note: 'The Strategist out-plays the entire roster.' },
  { id: 't9', name: 'MYBX Invitational', category: 'International', placement: 3, year: '2025', location: 'Kuala Lumpur, MY', winner: 'Team RBX', note: 'First international podium for Bangladesh.' },
  { id: 't10', name: 'Individual League S1', category: 'Individual League', placement: 1, year: '2025', location: 'Dhaka', winner: 'Shadow SF', note: 'Shadow SF wins the first Individual League crown.' },
  { id: 't11', name: 'Team League Bangladesh S1', category: 'Team League', placement: 2, year: '2025', location: 'Dhaka', winner: 'RBX Squad', note: 'Narrow final loss fuels the S2 redemption run.' },
  { id: 't12', name: 'Winter Burst Clash', category: 'Casual', placement: 3, year: '2025', location: 'Sylhet', winner: 'Rayn', note: 'Rayn puts Sylhet on the podium map.' },
  { id: 't13', name: 'G3 Chattogram Circuit', category: 'G3', placement: 2, year: '2026', location: 'Chattogram', winner: 'NFS X', note: 'A masterclass round-robin from the Controller.' },
  { id: 't14', name: 'G2 Dhaka Masters', category: 'G2', placement: 1, year: '2026', location: 'Dhaka', winner: 'CMX', note: 'The captain adds another Masters crown.' },
  { id: 't15', name: 'SEA Beyblade X Open', category: 'International', placement: 2, year: '2026', location: 'Kuala Lumpur, MY', winner: 'Team RBX', note: 'Silver on the SEA stage — Bangladesh’s best international finish.' },
  { id: 't16', name: 'Individual League S2', category: 'Individual League', placement: 1, year: '2026', location: 'Dhaka', winner: 'Tamim X', note: 'The Striker dominates the league format.' },
  { id: 't17', name: 'Team League Bangladesh S2', category: 'Team League', placement: 1, year: '2026', location: 'Dhaka', winner: 'RBX Squad', note: 'RBX lifts the trophy in front of a sold-out crowd.' },
  { id: 't18', name: 'RBX New Year Rumble', category: 'Local Ranked', placement: 1, year: '2026', location: 'Dhaka', winner: 'AndroX', note: 'The Powerhouse opens 2026 with gold.' },
  { id: 't19', name: 'G1 National Ranking', category: 'G1', placement: 1, year: '2026', location: 'Dhaka', winner: 'CMX', note: 'Back-to-back G1 titles for the captain.' },
  { id: 't20', name: 'Dhaka Dawn International', category: 'International', placement: 3, year: '2026', location: 'Dhaka', winner: 'Blader Igris', note: 'The first international event hosted on home soil.' },
  { id: 't21', name: 'RBX Academy Clash', category: 'Casual', placement: 2, year: '2026', location: 'Rajshahi', winner: 'Blader 17', note: 'The prodigy nearly wins in only his second event.' },
  { id: 't22', name: 'G3 National Circuit Finals', category: 'G3', placement: 1, year: '2026', location: 'Dhaka', winner: 'Omnix', note: 'A perfect finals run closes the circuit.' },
];

export const recordSummary = {
  totalPodiums: 92,
  firstPlace: 34,
  secondPlace: 31,
  thirdPlace: 27,
  tournaments: 140,
  categories: 9,
  countries: 3,
  cities: 8,
};

export interface TimelineEvent {
  year: string;
  title: string;
  body: string;
  tag: string;
}

export const timeline: TimelineEvent[] = [
  { year: '2023', title: 'The Garage Years', body: 'Shadow SF and CMX found Royal Bengal X in a rented Dhanmondi garage with three tops, one borrowed stadium, and a flag taped to the wall. First local meet draws 12 bladers.', tag: 'Founding' },
  { year: '2024', title: 'First Gold', body: 'CMX wins the RBX Clash Series Vol. 1, then captures the inaugural Beyblade X S1 Bangladesh Championship. RBX is officially the team to beat.', tag: 'National' },
  { year: '2025', title: 'National Dominance', body: 'RBX bladers sweep the G2 Chattogram Clash, the National Open, the Invitational Cup and Individual League S1. The academy program launches with free weekly clinics.', tag: 'Dominance' },
  { year: '2025', title: 'First International Podium', body: 'Team RBX travels to Kuala Lumpur for the MYBX Invitational and takes bronze — the first international podium ever for a Bangladeshi beyblade squad.', tag: 'International' },
  { year: '2026', title: 'SEA Silver & Home Soil', body: 'Silver at the SEA Beyblade X Open in Malaysia. RBX then hosts the Dhaka Dawn International on home soil, with Igris on the podium and a sold-out crowd.', tag: 'World Stage' },
  { year: '2026', title: 'Team League Champions', body: 'RBX lifts the Team League Bangladesh S2 trophy in front of a sold-out Dhaka arena, completing a 92-podium journey across four seasons.', tag: 'Champions' },
];

/* ------------------------------------------------------------------ */

export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  author: string;
  body: string[];
}

export const news: NewsArticle[] = [
  {
    slug: 'rbx-officially-forms',
    title: 'ROYAL BENGAL X OFFICIALLY FORMS AS BANGLADESH’S FIRST BEYBLADE X NATIONAL TEAM',
    category: 'Announcement',
    date: '2026-11-10',
    readTime: '4 min read',
    image: '/assets/team-photo.jpg',
    featured: true,
    author: 'RBX Media Team',
    excerpt: 'Nine bladers. One roar. Royal Bengal X steps onto the world stage as Bangladesh’s first-ever Beyblade X national team.',
    body: [
      'DHAKA, BANGLADESH — Royal Bengal X (RBX) today announced its official formation as Bangladesh’s first-ever national Beyblade X team, uniting nine of the country’s most decorated bladers under a single crimson banner.',
      'Founded in 2023 by Shadow SF and captain CMX out of a one-room Dhanmondi arena, RBX has grown from a garage squad into a competitive organization with 92 career podium finishes, 34 tournament titles, and two international medals representing Bangladesh in Malaysia.',
      '“This is bigger than any one of us,” said captain CMX at the launch event. “Every kid spinning a top on a Dhaka rooftop now has a team to wear on their chest. We’re not just here to compete — we’re here to show the world where Bangladesh belongs.”',
      'The inaugural roster spans six divisions and five cities: CMX (Captain), Shadow SF (Founder & Vice Captain), Blader Igris (Vanguard), Tamim X (Striker), NFS X (Controller), Omnix (Strategist), AndroX (Powerhouse), Rayn (Flanker), and rookie prodigy Blader 17.',
      'RBX confirmed its 2027 international calendar with returns to Kuala Lumpur and first-ever appearances in Thailand and Indonesia, alongside the second season of its free RBX Academy clinic program across all eight divisions.',
    ],
  },
  {
    slug: 'cmx-g1-back-to-back',
    title: 'CMX CLAIMS BACK-TO-BACK G1 NATIONAL RANKING TITLE',
    category: 'Achievement',
    date: '2026-10-22',
    readTime: '3 min read',
    image: '/assets/players/cmx.PNG',
    author: 'RBX Media Team',
    excerpt: 'The captain survives a 14-round gauntlet to defend his G1 crown — his 14th career title and fourth of 2026.',
    body: [
      'DHAKA — CMX did it again. The RBX captain captured his second consecutive G1 National Ranking title on Saturday, surviving a 14-round gauntlet that included three comeback victories from 0–2 deficits.',
      'The final against G2 Masters champion Omnix went the distance — a 2–1 decider decided by a single burst in the final ten seconds. The arena erupted as the Rogue Fang Xodus-9 skidded to a stop in the center of the stadium.',
      '“I’ve never wanted a title more,” CMX said afterward, holding the crimson trophy above his head. “This one is for every blader who told me the first one was a fluke.”',
      'The win marks CMX’s 14th career title and his fourth of 2026, extending his lead atop the national rankings. He now turns his attention to the 2027 international circuit.',
    ],
  },
  {
    slug: 'rbx-kuala-lumpur-podium',
    title: 'RBX MAKES HISTORY WITH PODIUM FINISH AT KUALA LUMPUR INTERNATIONAL OPEN',
    category: 'International',
    date: '2026-09-14',
    readTime: '5 min read',
    image: '/assets/events/malaysia.jpg',
    author: 'RBX Media Team',
    excerpt: 'Silver at the SEA Beyblade X Open — the best international finish ever for a Bangladeshi beyblade team.',
    body: [
      'KUALA LUMPUR, MALAYSIA — Team Royal Bengal X stood on the international podium on Sunday, claiming silver at the SEA Beyblade X Open — the best finish ever for a Bangladeshi beyblade squad on foreign soil.',
      'RBX entered the 24-team bracket as underdogs and left as headline writers: group-stage wins over two seeded Malaysian sides, a quarterfinal upset of the host nation’s top team, and a grueling semifinal run that went to a double-overtime burst.',
      'The final against the reigning SEA champions ended 2–1, but the message was sent. “Silver tonight, gold next year,” said vice-captain Shadow SF. “The world knows our name now.”',
      'The result earns RBX a direct invitation to the 2027 World Beyblade X Invitational and cemented the team’s status as Bangladesh’s flagship representative in international competition.',
    ],
  },
  {
    slug: 'rbx-academy-launch',
    title: 'SHADOW SF UNVEILS RBX ACADEMY: FREE TRAINING FOR UNDERPRIVILEGED BLADERS',
    category: 'Community',
    date: '2026-08-30',
    readTime: '4 min read',
    image: '/assets/community.jpg',
    author: 'RBX Media Team',
    excerpt: 'Weekly free clinics, donated starter kits, and a scholarship track — RBX Academy opens its doors across all eight divisions.',
    body: [
      'DHAKA — Royal Bengal X founder Shadow SF today unveiled RBX Academy, the organization’s flagship community initiative: free weekly beyblade training clinics for young bladers across all eight divisions of Bangladesh.',
      'The program pairs RBX players with athletes aged 10–18 for coaching on launch technique, stadium control, sportsmanship, and tournament preparation — completely free of charge, with equipment provided on site.',
      '“Beyblade changed my life, but the barrier to entry shouldn’t be money,” Shadow SF said. “Every kid in Bangladesh deserves a stadium to spin in and a mentor who believes in them.”',
      'Since its pilot phase, RBX Academy has trained over 1,200 young bladers and donated 300+ starter kits. Registration for the 2027 season opens next month at all regional clinics.',
    ],
  },
  {
    slug: 'team-league-s2-champions',
    title: 'TEAM LEAGUE BANGLADESH S2: RBX SQUAD LIFTS THE TROPHY',
    category: 'Tournament Report',
    date: '2026-07-18',
    readTime: '4 min read',
    image: '/assets/events/trophy.jpg',
    author: 'RBX Media Team',
    excerpt: 'A sold-out Dhaka arena watches RBX complete the redemption arc — Team League champions, one year after the S1 heartbreak.',
    body: [
      'DHAKA — One year after a heart-breaking Team League S1 final loss, RBX completed the redemption arc in front of a sold-out Dhaka arena, lifting the Team League Bangladesh S2 trophy on Sunday night.',
      'The finals pitted RBX against their fiercest rivals in a best-of-nine team format. Trailing 2–4 after the sixth match, the squad roared back with three straight wins — capped by a rookie sensation from 18-year-old Blader 17.',
      '“Last year this trophy broke us,” said captain CMX. “This year it made us. This is what a team is — nine blades, one spin.”',
      'The title is RBX’s first Team League championship and caps a domestic season that saw the team place on the podium in every major event entered.',
    ],
  },
  {
    slug: 'tiger-starter-kit',
    title: 'RBX LAUNCHES AFFORDABLE ‘TIGER STARTER KIT’ TO MAKE BEYBLADE X ACCESSIBLE',
    category: 'Announcement',
    date: '2026-06-05',
    readTime: '3 min read',
    image: '/assets/events/top.jpg',
    author: 'RBX Media Team',
    excerpt: 'A full stadium, two tops, and a league rulebook — at a price any family in Bangladesh can afford.',
    body: [
      'DHAKA — Royal Bengal X today announced the Tiger Starter Kit, an affordable beyblade bundle designed to remove the cost barrier that keeps thousands of young Bangladeshis out of the sport.',
      'Priced at less than half the cost of imported equivalents, the kit includes a regulation stadium, two competitive tops, a launcher, and the official RBX league rulebook — assembled locally in partnership with Dhaka manufacturers.',
      '“We built RBX from borrowed equipment,” said founder Shadow SF. “No kid should have to wait that long. The Tiger Starter Kit is our promise that talent, not wallet size, decides who gets to compete.”',
      'The first production run sold out within 72 hours. A portion of every kit funds the RBX Academy scholarship track, and a second run is planned for early 2027.',
    ],
  },
];

/* ------------------------------------------------------------------ */

export type AlbumKey = 'Team Photos' | 'Local Tournaments' | 'International Events' | 'Podium Moments';

export interface GalleryItem {
  src: string;
  caption: string;
  album: AlbumKey;
  tall?: boolean;
}

export const galleryAlbums: AlbumKey[] = ['Team Photos', 'Local Tournaments', 'International Events', 'Podium Moments'];

export const galleryItems: GalleryItem[] = [
  { src: '/assets/team-photo.jpg', caption: 'The official Royal Bengal X squad — captain, vice captain and the full roster.', album: 'Team Photos' },
  { src: '/assets/events/team-huddle.jpg', caption: 'The squad before the S2 final — nine blades, one spin.', album: 'Team Photos' },
  { src: '/assets/players/cmx.PNG', caption: 'Captain CMX — The Tiger’s Edge.', album: 'Team Photos', tall: true },
  { src: '/assets/team-photo.jpg', caption: 'Founder & Vice Captain Shadow SF — The Silent Storm.', album: 'Team Photos', tall: true },
  { src: '/assets/events/team-casual.jpg', caption: 'Off the clock, on the road to Malaysia.', album: 'Team Photos' },
  { src: '/assets/events/smoke.jpg', caption: 'Entrance smoke — the roar begins.', album: 'Team Photos' },
  { src: '/assets/events/stage.jpg', caption: 'Main stage, Team League Bangladesh S2 semifinal.', album: 'Local Tournaments' },
  { src: '/assets/events/top.jpg', caption: 'Burst finish — Rogue Fang Xodus-9 mid-spin.', album: 'Local Tournaments' },
  { src: '/assets/events/crowd.jpg', caption: 'Dhaka arena, capacity crowd, decider round.', album: 'Local Tournaments' },
  { src: '/assets/events/stadium.jpg', caption: 'Lights up for the National Open.', album: 'Local Tournaments' },
  { src: '/assets/events/trophy.jpg', caption: 'The crimson trophy tour — G1 champions.', album: 'Local Tournaments', tall: true },
  { src: '/assets/events/malaysia.jpg', caption: 'Kuala Lumpur — SEA Beyblade X Open, 2026.', album: 'International Events' },
  { src: '/assets/events/flag.jpg', caption: 'The flag goes where the team goes.', album: 'International Events', tall: true },
  { src: '/assets/battle.jpg', caption: 'Mid-air burst clash, MYBX Invitational 2025.', album: 'International Events' },
  { src: '/assets/events/medal.jpg', caption: 'First international medal — bronze, KL 2025.', album: 'International Events' },
  { src: '/assets/podium.jpg', caption: 'Team League S2 — champions’ podium, Dhaka 2026.', album: 'Podium Moments' },
  { src: '/assets/events/trophy.jpg', caption: 'Lift night, Team League Bangladesh S2.', album: 'Podium Moments' },
  { src: '/assets/beystadium.jpg', caption: 'The stadium where legends burst.', album: 'Podium Moments' },
  { src: '/assets/events/medal.jpg', caption: 'Gold for AndroX — New Year Rumble 2026.', album: 'Podium Moments', tall: true },
  { src: '/assets/battle.jpg', caption: 'Sparring session before the SEA Open final.', album: 'Podium Moments' },
];

/* ------------------------------------------------------------------ */

export const socials = [
  { name: 'Facebook', handle: '@RoyalBengalX', followers: '48.2K', url: 'https://www.facebook.com', icon: 'facebook' },
  { name: 'Instagram', handle: '@royalbengalx', followers: '32.7K', url: 'https://www.instagram.com', icon: 'instagram' },
  { name: 'YouTube', handle: '@RoyalBengalX', followers: '18.4K', url: 'https://www.youtube.com', icon: 'youtube' },
  { name: 'X (Twitter)', handle: '@RoyalBengalX', followers: '9.1K', url: 'https://www.x.com', icon: 'twitter' },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Players', path: '/players' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'News', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

export const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export const placementLabel = (p: 1 | 2 | 3) => (p === 1 ? '1st' : p === 2 ? '2nd' : '3rd');

export const placementClasses: Record<number, string> = {
  1: 'text-gold border-gold/50 bg-gold/10',
  2: 'text-zinc-200 border-zinc-300/40 bg-zinc-300/10',
  3: 'text-amber-600 border-amber-600/40 bg-amber-600/10',
};

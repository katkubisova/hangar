export type GymStatus = "open" | "coming-soon" | "hidden";

export type Gym = {
  id: string;
  name: string;
  city: string;
  slug: string;
  status: GymStatus;
  heroImage: string;
  shortDescription: string;
  address: string;
  companyName: string;
  companyId: string;
  taxId: string;
  openingHours: OpeningHours[];
  email: string;
  phone: string;
  mapEmbedUrl: string;
  directionsText: string;
  directionsVideoUrl?: string;
  registrationUrl: string;
  bookingUrl: string;
  activitiesBookingUrl: string;
  prices: PriceCategory[];
  consentFormUrl?: string;
  visitorRulesUrl?: string;
  cafeMenuUrl?: string;
  cafeMenuThumbnail?: string;
  physio?: PhysioData;
  displayOrder: number;
};

export type OpeningHours = {
  label: string;
  open: string;
  close: string;
  note?: string;
};

export type PriceCategory = {
  title: string;
  footnote?: string;
  rows: PriceRow[];
};

export type PriceRow = {
  label: string;
  price: string;
  note?: string;
};

export type Article = {
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  author: Author;
  heroImage: string;
  body: string;
  publishedDate: string;
  readTime: number;
  relatedSlugs?: string[];
};

export type Author = {
  name: string;
  photo: string;
};

export type TeamMember = {
  name: string;
  photo: string;
  position: string;
  gymSlug: string;
  bio: string;
  email?: string;
  displayOrder: number;
};

export type Position = {
  title: string;
  slug: string;
  gymSlug: string;
  employmentType: "full-time" | "part-time" | "contract";
  roleDescription: string;
  contactPerson: ContactPerson;
  status: "open" | "closed";
};

export type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export type ActivityCategory = {
  name: string;
  image: string;
  description: string;
  displayOrder: number;
};

export type FAQItem = {
  question: string;
  answer: string;
  gymSlugs: string[] | "all";
  displayOrder: number;
};

export type BenefitCard = {
  title: string;
  text: string;
  icon: string;
  displayOrder: number;
};

export type PhysioTherapist = {
  name: string;
  specialisation: string;
  bio: string;
};

export type PhysioPriceRow = {
  service: string;
  duration: string;
  price: string;
};

export type PhysioData = {
  enabled: boolean;
  intro: string;
  team: PhysioTherapist[];
  prices: PhysioPriceRow[];
  bookingFormRecipient: string;
};

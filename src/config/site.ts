/**
 * =============================================================================
 *  MAIN CONFIGURATION FILE
 * =============================================================================
 *  This is the ONLY file you need to edit to update the institute's details
 *  on the website. Everything shown across the site reads from here.
 *
 *  Leave a field as an empty string ("") to hide it.
 * =============================================================================
 */

export const siteConfig = {
  /** Institute name. Used in the navbar, footer, page title and SEO. */
  instituteName: 'Krishna Academy',

  /** Short line shown under the institute name. Keep it to 3-6 words. */
  instituteTagline: 'Spoken English Academy',

  /** City / area. */
  location: 'Avadi',

  /** Short line used in headings and the footer. */
  locationLong: 'Avadi & Thirunindravur, Chennai',

  /** Used for SEO text such as "Spoken English Classes in Avadi". */
  localSeoPhrase: 'Spoken English Classes in Avadi & Thirunindravur',

  /** One-line summary used in the hero and meta description. */
  summary:
    '1-to-1 spoken English coaching in Avadi and Thirunindravur. Overcome stage fear, correct your grammar and speak English with confidence.',

  /** Your address. Leave any line as "" if you do not want it shown. */
  address: {
    line1: 'New Military Road, near Vasanth & Co',
    line2: 'Kannigapuram',
    city: 'Avadi',
    state: 'Tamil Nadu',
    pincode: '600054',
  },

  /** Phone number used for the "Call" button. */
  phoneNumber: '+91 97908 05779',

  /** Phone number with country code, digits only. Used for tap-to-call links. */
  phoneDigits: '919790805779',

  /**
   * WhatsApp number in international format, digits only.
   * India, 97908 05779 -> "919790805779"
   * While this is empty, WhatsApp buttons link to the Contact section instead.
   */
  whatsappNumber: '919790805779',

  /** Optional email address. */
  email: '',

  /** One-line timings summary, e.g. "Mon-Sat, 9:30 AM - 9:30 PM". */
  classTimings: 'Mon-Sat, 9:30 AM - 9:30 PM',

  /**
   * Paste the Google Maps link of your institute here.
   * (Google Maps -> your location -> Share -> Copy link)
   * A "/embed" link renders the live map inside the page.
   */
  googleMapsUrl: 'https://www.google.com/maps?q=Krishna%20Academy%2C%20New%20Military%20Road%2C%20Kannigapuram%2C%20Avadi%2C%20Chennai%20600054&output=embed',

  /** Link that opens directions in Google Maps. */
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Krishna+Academy%2C+New+Military+Road%2C+Kannigapuram%2C+Avadi%2C+Chennai+600054',

  /** Optional social links. Add a link and the icon appears in the footer. */
  instagramUrl: '',
  facebookUrl: '',
  youtubeUrl: '',
} as const

/** The two areas the academy serves. */
export const locations = [
  {
    id: 'avadi',
    name: 'Avadi',
    isHeadOffice: true,
    address: 'New Military Road, near Vasanth & Co, Kannigapuram, Avadi, Chennai 600054',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Krishna+Academy%2C+New+Military+Road%2C+Kannigapuram%2C+Avadi%2C+Chennai+600054',
    note: 'Main centre. Walk-ins welcome during class hours.',
  },
  {
    id: 'thirunindravur',
    name: 'Thirunindravur',
    isHeadOffice: false,
    address: 'Thirunindravur, Chennai',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Thirunindravur%2C+Chennai',
    note: 'Classes available here. Confirm your slot on WhatsApp before visiting.',
  },
] as const

/** Class timings, shown in the timetable section and the contact card. */
export const classSchedule = [
  { day: 'Monday - Friday', time: '9:30 AM - 9:30 PM' },
  { day: 'Saturday', time: '4:30 PM - 9:30 PM' },
  { day: 'Sunday', time: 'Closed' },
] as const

/** The single most important promise of the academy. */
export const keyFeatures = [
  {
    id: 'one-on-one',
    title: '1-to-1 Teaching',
    text: 'One teacher, one student. You get the full hour to yourself - no waiting for your turn, no falling behind.',
  },
  {
    id: 'stage-fear',
    title: 'Stage Fear Removal',
    text: 'We start where you are. Repetition, role play and regular speaking build the habit of talking without freezing.',
  },
  {
    id: 'grammar',
    title: 'Grammar Correction',
    text: 'Your mistakes are corrected as you speak, not three weeks later. You learn from the sentence you just said wrong.',
  },
] as const

/** Details about the trainer. */
export const trainerConfig = {
  name: 'Sivakumar',
  qualification: 'Spoken English Teaching',
  experience:  '20years of Experience',
  /** Photo lives in /public. Keep this in sync with the file name. */
  photo: '/attak.png',
}

/** Short introduction used in the "About the Institute" section. */
export const aboutText = {
  intro:
    'Krishna Academy is a spoken English institute in Avadi and Thirunindravur built around a single promise: you speak in every class. Our students learn the way real English is used - in interviews, at college, at work and in everyday conversations.',
  approach:
    'Every session is 1-to-1, so the lesson is built around you. We correct your grammar as you speak, work on the words you actually need, and push you out of your comfort zone gently until hesitation disappears.',
}

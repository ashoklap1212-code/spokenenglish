import { siteConfig } from '../config/site'

/**
 * Builds a wa.me link with a pre-filled message.
 * Returns null while the WhatsApp number is not configured, so buttons can
 * fall back to the Contact section instead of opening a wrong number.
 */
export function whatsappUrl(message: string): string | null {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function telUrl(): string | null {
  const phone = siteConfig.phoneDigits.trim()
  if (!phone) return null
  return `tel:+${phone}`
}

export function mailUrl(): string | null {
  if (!siteConfig.email) return null
  return `mailto:${siteConfig.email}`
}

export function mapsUrl(): string | null {
  if (!siteConfig.googleMapsUrl) return null
  return siteConfig.googleMapsUrl
}

/** Builds the enquiry-form message, including the visitor's details. */
export function enquiryMessage(details: {
  name: string
  phone: string
  level: string
  goal: string
}): string {
  const lines = [
    `Hello ${siteConfig.instituteName}, I would like to enquire about Spoken English classes.`,
    '',
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Current level: ${details.level}`,
    `Goal: ${details.goal}`,
  ]
  return lines.join('\n')
}

/** Pre-filled WhatsApp messages, one for each enquiry type. */
export const waMessages = {
  general: `Hello ${siteConfig.instituteName}, I would like to know more about your spoken English classes.`,
  hero: `Hello ${siteConfig.instituteName}, I want to join 1-to-1 spoken English classes. Please share the details.`,
  floating: `Hello ${siteConfig.instituteName}, I found your website and would like to know more about your spoken English classes.`,
  askAboutClasses: `Hello ${siteConfig.instituteName}, I would like to ask about your 1-to-1 spoken English classes.`,
  finalCta: `Hello ${siteConfig.instituteName}, I would like to enquire about your spoken English classes.`,
  timings: `Hello ${siteConfig.instituteName}, please share the class timings and available slots.`,
  course: {
    beginner: `Hello ${siteConfig.instituteName}, I am interested in the Beginner Spoken English course. Could you please share the details?`,
    intermediate: `Hello ${siteConfig.instituteName}, I am interested in the Intermediate Spoken English course. Could you please share the details?`,
    interview: `Hello ${siteConfig.instituteName}, I am interested in English Interview Training. Could you please share the details?`,
    students: `Hello ${siteConfig.instituteName}, I am interested in English Communication Training for students. Could you please share the details?`,
  },
}

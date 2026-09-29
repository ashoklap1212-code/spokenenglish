import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { classSchedule, siteConfig } from '../config/site'
import { mailUrl, mapsUrl, telUrl, waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

const addressLines = [
  siteConfig.address.line1,
  siteConfig.address.line2,
  `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pincode}`,
].filter(Boolean)

type ContactRow = {
  icon: LucideIcon
  label: string
  value: string
  href?: string | null
  isLink: boolean
}

const contactRows: ContactRow[] = [
  {
    icon: MapPin,
    label: 'Address',
    value: addressLines.join(', '),
    href: siteConfig.directionsUrl,
    isLink: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phoneNumber,
    href: telUrl(),
    isLink: true,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: `+${siteConfig.whatsappNumber.replace(/^91/, '')}`,
    href: undefined,
    isLink: true,
  },
  {
    icon: Clock,
    label: 'Class Timings',
    value: siteConfig.classTimings,
    isLink: false,
  },
  ...(siteConfig.email
    ? [{ icon: Mail, label: 'Email', value: siteConfig.email, href: mailUrl(), isLink: true }]
    : []),
]

function MapCard() {
  const url = mapsUrl()

  if (url?.includes('/embed') || url?.includes('output=embed')) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-mist">
        {/* Shorter on phones so the whole card is visible without scrolling */}
        <iframe
          src={url}
          title={`Map showing the location of ${siteConfig.instituteName} in ${siteConfig.location}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full sm:h-full sm:min-h-80"
          style={{ border: 0 }}
          allowFullScreen
        />
        <a
          href={siteConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 border-t border-line bg-white px-5 py-3.5 text-[0.95rem] font-semibold text-ink-800 transition-colors active:bg-ink-50 lg:hidden"
        >
          <Navigation className="size-4" aria-hidden="true" />
          Open in Google Maps
        </a>
      </div>
    )
  }

  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink-200 bg-mist p-6 text-center sm:min-h-80 sm:p-8">
      <span className="flex size-12 items-center justify-center rounded-xl bg-white text-ink-500">
        <MapPin className="size-6" aria-hidden="true" />
      </span>
      <p className="text-sm font-semibold text-ink-700">Google Maps location</p>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex min-h-12 items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
        >
          <Navigation className="size-4" aria-hidden="true" />
          Open in Google Maps
        </a>
      ) : null}
    </div>
  )
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Visit Us, Call Us, Or Message Us"
      description={`${siteConfig.instituteName} is at ${siteConfig.address.line2}, ${siteConfig.address.city}. Send a message and we will reply with the next available slot.`}
      align="left"
      tone="mist"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {contactRows.map(({ icon: Icon, label, value, href, isLink }) => (
              <li key={label} className="flex items-start gap-4 bg-white p-4 sm:p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-ink-800">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-ink-400 uppercase">
                    {label}
                  </p>
                  {isLink && href ? (
                    <a
                      href={href}
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="mt-1 inline-flex min-h-11 items-center py-1.5 text-[0.97rem] font-medium break-words text-ink-900 underline-offset-4 hover:underline lg:min-h-0"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 py-1.5 text-[0.97rem] font-medium break-words text-ink-900">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-2xl border border-line bg-white p-5 sm:mt-6 sm:p-6">
            <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-ink-400 uppercase">
              Weekly schedule
            </p>
            <ul className="mt-4 space-y-3">
              {classSchedule.map(({ day, time }) => (
                <li key={day} className="flex items-center justify-between gap-3 text-[0.9rem] sm:text-sm">
                  <span className="min-w-0 text-ink-600">{day}</span>
                  <span
                    className={`shrink-0 font-semibold tabular-nums ${
                      time === 'Closed' ? 'text-ink-400' : 'text-ink-900'
                    }`}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full-width, generously sized touch targets on mobile. */}
          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-6 sm:flex sm:flex-row sm:gap-3">
            <ActionButton
              message={waMessages.general}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              Chat on WhatsApp
            </ActionButton>
            {telUrl() ? (
              <ActionButton
                href={telUrl() ?? '#contact'}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Phone className="size-5" aria-hidden="true" />}
              >
                Call Now
              </ActionButton>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <MapCard />
        </Reveal>
      </div>
    </Section>
  )
}

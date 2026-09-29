import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../config/site'
import { mailUrl, telUrl, waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Reveal } from './ui/Reveal'

const CURRENT_YEAR = new Date().getFullYear()

/** Phones show the six most useful destinations; desktop keeps the full map. */
const quickLinks = [
  { label: 'About', href: '#about', hideOnMobile: false },
  { label: 'Courses', href: '#courses', hideOnMobile: false },
  { label: 'Why Us', href: '#why-us', hideOnMobile: false },
  { label: 'Class Timings', href: '#timings', hideOnMobile: false },
  { label: 'Locations', href: '#locations', hideOnMobile: true },
  { label: 'Reviews', href: '#testimonials', hideOnMobile: true },
  { label: 'FAQ', href: '#faq', hideOnMobile: false },
  { label: 'Enquire', href: '#enquire', hideOnMobile: true },
  { label: 'Contact', href: '#contact', hideOnMobile: false },
]

const courseLinks = [
  { label: 'Beginner English', href: '#courses' },
  { label: 'Everyday Fluency', href: '#courses' },
  { label: 'English for Interviews', href: '#courses' },
  { label: 'Students & College', href: '#courses' },
]

/** Social links appear only if a real link has been added to the config. */
const socials = [
  { label: 'Instagram', href: siteConfig.instagramUrl },
  { label: 'Facebook', href: siteConfig.facebookUrl },
  { label: 'YouTube', href: siteConfig.youtubeUrl },
].filter((social) => Boolean(social.href))

export function Footer() {
  return (
    <footer className="safe-bottom-bar border-t border-line bg-canvas">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 pt-8 min-[400px]:grid-cols-2 sm:gap-10 sm:pt-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 lg:col-span-1 lg:pr-6">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-ink-900">
                <span className="text-[0.95rem] leading-none font-bold tracking-tight text-white">
                  KA
                </span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.95rem] font-semibold tracking-tight text-ink-900">
                  {siteConfig.instituteName}
                </span>
                <span className="text-[0.75rem] font-medium tracking-wide text-ink-500">
                  {siteConfig.location}
                </span>
              </span>
            </div>
            <p className="mt-3.5 max-w-md text-[0.85rem] leading-[1.6] text-ink-600 sm:mt-5 sm:text-sm sm:leading-relaxed">
              <span className="sm:hidden">
                1-to-1 spoken English coaching in {siteConfig.location}. Speak with confidence.
              </span>
              <span className="hidden sm:inline">{siteConfig.summary}</span>
            </p>
            {socials.length > 0 ? (
              <ul className="mt-5 flex flex-wrap items-center gap-2">
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-[0.72rem] font-semibold tracking-[0.16em] text-ink-400 uppercase sm:text-[0.78rem]">
              Explore
            </h2>
            <ul className="mt-2.5 space-y-0.5 sm:mt-4">
              {quickLinks.map((link) => (
                <li key={link.label} className={link.hideOnMobile ? 'hidden sm:block' : ''}>
                  <a
                    href={link.href}
                    className="-mx-2 inline-block min-h-10 min-w-[2.75rem] px-2 py-1.5 text-[0.85rem] text-ink-600 transition-colors hover:text-ink-900 sm:min-h-11 sm:text-[0.9rem] lg:min-h-0 lg:min-w-0 lg:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Course names already live in the courses section and its own
              footer links, so this column is desktop-only. */}
          <nav aria-label="Courses" className="hidden sm:block">
            <h2 className="text-[0.78rem] font-semibold tracking-[0.16em] text-ink-400 uppercase">
              Courses
            </h2>
            <ul className="mt-4 space-y-0.5">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="-mx-2 inline-block min-h-11 min-w-[2.75rem] px-2 py-1.5 text-[0.9rem] text-ink-600 transition-colors hover:text-ink-900 lg:min-h-0 lg:min-w-0 lg:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 min-[400px]:col-span-1 lg:col-span-1">
            <h2 className="text-[0.72rem] font-semibold tracking-[0.16em] text-ink-400 uppercase sm:text-[0.78rem]">
              Contact
            </h2>
            <ul className="mt-2.5 space-y-2.5 text-[0.85rem] text-ink-600 sm:mt-4 sm:space-y-3.5 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden="true" />
                <a
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block min-h-10 py-1 hover:text-ink-900 sm:min-h-11 lg:min-h-0"
                >
                  {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}{' '}
                  {siteConfig.address.pincode}
                </a>
              </li>
              {siteConfig.phoneNumber ? (
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-ink-400" aria-hidden="true" />
                  <a
                    href={telUrl() ?? '#contact'}
                    className="inline-block min-h-10 py-1 hover:text-ink-900 sm:min-h-11 lg:min-h-0"
                  >
                    {siteConfig.phoneNumber}
                  </a>
                </li>
              ) : null}
              {siteConfig.email ? (
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 shrink-0 text-ink-400" aria-hidden="true" />
                  <a href={mailUrl() ?? '#contact'} className="break-all hover:text-ink-900">
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
              <li className="text-ink-500">{siteConfig.classTimings}</li>
            </ul>

            {/* Phones already have the sticky WhatsApp bar and the closing CTA
                section, so this is a desktop-only convenience. The wrapper owns
                the visibility, because ActionButton's base `inline-flex` would
                otherwise win over a `hidden` utility on the button itself. */}
            <div className="mt-5 hidden sm:block sm:mt-6">
              <ActionButton
                message={waMessages.floating}
                variant="whatsapp"
                size="md"
                className="sm:w-auto"
                icon={<MessageCircle className="size-4" aria-hidden="true" />}
              >
                Chat on WhatsApp
              </ActionButton>
            </div>
          </div>
        </div>

        <Reveal delay={80}>
          <div className="mt-8 border-t border-line pt-5 sm:mt-14 sm:pt-6">
            <p className="text-center text-[0.8rem] text-ink-500 sm:text-sm">
              &copy; {CURRENT_YEAR} {siteConfig.instituteName}. All rights reserved.
            </p>
            <p className="mt-1.5 text-center text-[0.72rem] leading-relaxed text-ink-400 sm:mt-2 sm:text-xs">
              Spoken English Classes in Avadi &middot; English Speaking Course in Thirunindravur
              &middot; 1-to-1 English Coaching in Chennai
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { siteConfig } from '../config/site'
import { telUrl, waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <a
      href="#top"
      className="-ml-1 flex min-w-0 items-center gap-2.5 rounded-lg p-1"
      aria-label={`${siteConfig.instituteName} - Home`}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-900">
        <span className="text-[0.95rem] leading-none font-bold tracking-tight text-white">KA</span>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate text-[0.95rem] font-semibold tracking-tight text-ink-900">
          {siteConfig.instituteName}
        </span>
        <span className="truncate text-[0.75rem] font-medium tracking-wide text-ink-500">
          {siteConfig.location}
        </span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the open menu and close it on Escape.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // Lets the sticky mobile CTA bar know to get out of the way.
  useEffect(() => {
    document.documentElement.dataset.menuOpen = open ? 'true' : 'false'
    return () => {
      document.documentElement.dataset.menuOpen = 'false'
    }
  }, [open])

  // Collapse the menu automatically once the layout reaches the desktop nav.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-lg transition-colors duration-300 ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[0.9rem] font-medium text-ink-600 transition-colors hover:text-ink-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={telUrl() ?? '#contact'}
            className="hidden h-11 items-center gap-2 rounded-full border border-ink-200 px-4 text-sm font-medium text-ink-800 transition-colors hover:border-ink-900 md:inline-flex lg:h-9"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {siteConfig.phoneNumber}
          </a>
          {/* The wrapper owns the responsive visibility: a `hidden` utility on
              the button itself would lose to ActionButton's base
              `inline-flex` and stay visible on phones. */}
          <div className="hidden sm:block">
            <ActionButton message={waMessages.hero} variant="primary" size="sm">
              Book a Slot
            </ActionButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-1 inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-ink-200 text-ink-800 transition-colors hover:bg-ink-50 lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="mobile-panel max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page py-3 pb-5">
            <ul>
              {navLinks.map((link, index) => (
                <li key={link.href} className="mobile-panel-item" style={{ animationDelay: `${index * 25}ms` }}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-13 items-center border-b border-line py-2.5 text-[1.05rem] font-medium text-ink-800 transition-colors active:bg-ink-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="mobile-panel-item mt-4 flex flex-col gap-2.5"
              style={{ animationDelay: `${navLinks.length * 25}ms` }}
            >
              <ActionButton
                message={waMessages.hero}
                variant="whatsapp"
                size="lg"
                className="w-full"
              >
                Chat on WhatsApp
              </ActionButton>
              <a
                href={telUrl() ?? '#contact'}
                className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full border border-ink-200 px-6 text-base font-semibold text-ink-800 transition-colors active:bg-ink-50"
              >
                <Phone className="size-5" aria-hidden="true" />
                {siteConfig.phoneNumber}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

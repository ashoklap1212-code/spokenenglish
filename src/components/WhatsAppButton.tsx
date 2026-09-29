import { useEffect, useState } from 'react'
import { waMessages, whatsappUrl } from '../lib/whatsapp'

/**
 * Floating WhatsApp button - desktop only.
 *
 * On mobile the sticky `MobileCtaBar` takes over, so the two never compete
 * for the same corner of the screen.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = whatsappUrl(waMessages.floating)
  const url = link ?? '#contact'

  return (
    <div
      className={`fixed right-6 bottom-6 z-40 hidden transition-all duration-300 lg:block ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={url}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label="Chat with us on WhatsApp"
        className="flex items-center gap-2.5 rounded-full bg-wa py-3 pr-4 pl-3.5 text-white shadow-[0_8px_24px_-8px_rgb(18_140_95/0.6)] transition-transform duration-200 hover:scale-[1.02] hover:bg-wa-dark active:scale-[0.99]"
      >
        <MessageCircleIcon />
        <span
          className={`overflow-hidden text-[0.9rem] font-semibold whitespace-nowrap transition-all duration-300 ${
            expanded ? 'max-w-40 opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}

function MessageCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 shrink-0"
      aria-hidden="true"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

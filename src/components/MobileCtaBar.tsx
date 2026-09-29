import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { waMessages, whatsappUrl } from '../lib/whatsapp'

/**
 * Sticky bottom CTA for phones.
 *
 * This replaces the floating button below `lg`, so a visitor never has two
 * competing WhatsApp targets on screen. It hides as soon as the page is
 * scrolled to the contact section or the enquiry form, where the same
 * action is already available as a real in-page button.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Sections whose own buttons sit at the bottom of the screen. The bar
    // steps aside for these so it can never sit on top of a real CTA.
    const guardedSections = ['#locations', '#enquire', '#contact']
      .map((selector) => document.querySelector(selector))
      .filter((element): element is Element => Boolean(element))

    const onScroll = () => {
      if (window.scrollY < 420) {
        setVisible(false)
        return
      }

      const overGuardedSection = guardedSections.some((element) => {
        const rect = element.getBoundingClientRect()
        return rect.top < window.innerHeight * 0.9 && rect.bottom > 64
      })

      // Never sit on top of an expanded accordion the visitor is reading.
      const coversOpenPanel = [...document.querySelectorAll('[data-open="true"]')].some(
        (element) => {
          const rect = element.getBoundingClientRect()
          const isOnScreen = rect.top < window.innerHeight && rect.bottom > 0
          return isOnScreen && rect.height > 0 && rect.bottom > window.innerHeight - 80
        },
      )

      const nearFooter =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200

      setVisible(!overGuardedSection && !coversOpenPanel && !nearFooter)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    // Re-check after a smooth scroll settles, in case it skipped past a section.
    window.addEventListener('scrollend', onScroll)

    // Opening an accordion changes the layout without scrolling, so the bar
    // needs to re-measure whenever the page grows or an item is expanded.
    const resizeObserver = new ResizeObserver(onScroll)
    resizeObserver.observe(document.body)
    const mutationObserver = new MutationObserver(onScroll)
    mutationObserver.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ['data-open', 'class'],
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('scrollend', onScroll)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  const link = whatsappUrl(waMessages.finalCta)
  const href = link ?? '#contact'

  return (
    <div
      className="mobile-cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-lg lg:hidden"
      data-visible={visible}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center gap-3 px-4 py-2.5">
        <p className="hidden min-w-0 flex-1 text-[0.8rem] leading-tight font-medium text-ink-600 min-[360px]:block">
          Have questions about
          <span className="block truncate font-semibold text-ink-900">1-to-1 English classes?</span>
        </p>
        <a
          href={href}
          {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-wa px-5 text-[0.95rem] font-semibold text-white transition-colors active:bg-wa-dark min-[360px]:w-auto"
        >
          <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}

import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../config/site'
import { telUrl, waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Reveal } from './ui/Reveal'

export function FinalCta() {
  return (
    <section
      id="start"
      className="safe-bottom-bar section-pad scroll-mt-20 bg-ink-900 sm:scroll-mt-24"
    >
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-accent-300 uppercase sm:text-xs sm:tracking-[0.2em]">
            One message is enough
          </p>
          <h2 className="mt-4 text-[1.5rem] leading-[1.22] font-semibold text-white sm:mt-5 sm:text-3xl lg:text-[2.4rem]">
            Your First Class Is One WhatsApp Message Away
          </h2>
          <p className="mt-4 text-[0.95rem] leading-[1.6] text-ink-300 sm:mt-5 sm:text-[1.05rem] sm:leading-relaxed">
            <span className="sm:hidden">
              Send your level and goal. We will share a free trial slot and the fee.
            </span>
            <span className="hidden sm:inline">
              Tell {siteConfig.instituteName} your level and your goal. We will share a free trial
              slot and the fee for you. No pressure, no forms to fill.
            </span>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:mt-9 sm:w-auto sm:flex-nowrap sm:gap-3">
            <ActionButton
              message={waMessages.finalCta}
              variant="whatsapp"
              size="lg"
              className="sm:w-auto"
              icon={<MessageCircle className="size-4 sm:size-5" aria-hidden="true" />}
            >
              <span className="sm:hidden">Chat on WhatsApp</span>
              <span className="hidden sm:inline">Chat With Us</span>
            </ActionButton>
            <ActionButton
              href={telUrl() ?? '#contact'}
              variant="onDark"
              size="lg"
              className="sm:w-auto"
              icon={<Phone className="size-4 sm:size-5" aria-hidden="true" />}
            >
              {siteConfig.phoneNumber}
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

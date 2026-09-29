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
          <p className="text-[0.78rem] font-semibold tracking-[0.18em] text-accent-300 uppercase sm:text-xs sm:tracking-[0.2em]">
            One message is enough
          </p>
          <h2 className="mt-5 text-[1.6rem] leading-[1.2] font-semibold text-white sm:text-3xl lg:text-[2.4rem]">
            Your First Class Is One WhatsApp Message Away
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.65] text-ink-300 sm:text-[1.05rem] sm:leading-relaxed">
            Tell {siteConfig.instituteName} your level and your goal. We will share a free trial slot
            and the fee for you. No pressure, no forms to fill.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row">
            <ActionButton
              message={waMessages.finalCta}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              Chat With Us
            </ActionButton>
            <ActionButton
              href={telUrl() ?? '#contact'}
              variant="outline"
              size="lg"
              className="w-full border-ink-700 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink-900 sm:w-auto"
              icon={<Phone className="size-5" aria-hidden="true" />}
            >
              {siteConfig.phoneNumber}
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

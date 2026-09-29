import { MessageCircle, PenLine, Rocket } from 'lucide-react'
import { siteConfig } from '../config/site'
import { waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

/** Edit this list if your joining process is different. */
const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Send a message',
    text: 'One WhatsApp message with your level and your goal. No forms, no sign-up, no waiting.',
    short: 'One WhatsApp message with your level and goal.',
  },
  {
    number: '02',
    icon: PenLine,
    title: 'Trial and plan',
    text: 'We do a trial class, then agree the level, the focus areas and a weekly slot that suits you.',
    short: 'A trial class, then a level and weekly slot that suit you.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start speaking',
    text: 'Regular 1-to-1 sessions with your grammar corrected as you talk. Progress you can hear.',
    short: 'Regular 1-to-1 sessions. Progress you can hear.',
  },
]

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How To Start"
      title="Three Steps, Then You Are Learning"
      description="No complicated process and no long waiting list. Most students start within a few days of their first message."
      descriptionMobile="No long waiting list. Most students start within a few days."
      tone="line"
    >
      <ol className="relative grid gap-6 md:grid-cols-3 md:gap-10">
        {steps.map(({ number, icon: Icon, title, text, short }, index) => (
          <Reveal key={number} as="li" delay={index * 90} className="h-full">
            <div className="relative flex h-full gap-3.5 md:block md:border-t md:border-ink-900 md:pt-6">
              {/* Vertical connector on mobile, arrow between steps */}
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-11 bottom-[-1.5rem] left-[1.125rem] w-px bg-line md:hidden"
                  aria-hidden="true"
                />
              ) : null}

              <div className="flex shrink-0 flex-col items-center gap-2.5 md:flex-row md:items-center md:justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-ink-900 text-white">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-xl leading-none font-semibold text-ink-200 tabular-nums md:text-sm">
                  {number}
                </span>
              </div>

              <div className="min-w-0 md:mt-5">
                <h3 className="text-[1rem] leading-snug font-semibold sm:text-lg">{title}</h3>
                <p className="mt-1 text-[0.85rem] leading-[1.55] text-ink-600 md:mt-2 md:text-sm md:leading-[1.6]">
                  <span className="sm:hidden">{short}</span>
                  <span className="hidden sm:inline">{text}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* One closing CTA is enough here - the sticky bar and the final CTA
          section already cover this action on phones. */}
      <Reveal delay={200} className="hidden sm:block">
        <div className="mt-10 flex justify-center sm:mt-12">
          <ActionButton
            message={waMessages.finalCta}
            variant="whatsapp"
            size="lg"
            className="sm:w-auto"
            icon={<MessageCircle className="size-5" aria-hidden="true" />}
          >
            Start With {siteConfig.instituteName}
          </ActionButton>
        </div>
      </Reveal>
    </Section>
  )
}

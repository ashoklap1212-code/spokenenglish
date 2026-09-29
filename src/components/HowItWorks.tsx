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
  },
  {
    number: '02',
    icon: PenLine,
    title: 'Trial and plan',
    text: 'We do a trial class, then agree the level, the focus areas and a weekly slot that suits you.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start speaking',
    text: 'Regular 1-to-1 sessions with your grammar corrected as you talk. Progress you can hear.',
  },
]

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How To Start"
      title="Three Steps, Then You Are Learning"
      description="No complicated process and no long waiting list. Most students start within a few days of their first message."
      tone="line"
    >
      <ol className="relative grid gap-7 md:grid-cols-3 md:gap-10">
        {steps.map(({ number, icon: Icon, title, text }, index) => (
          <Reveal key={number} as="li" delay={index * 90} className="h-full">
            <div className="relative flex h-full gap-4 md:block md:border-t md:border-ink-900 md:pt-6">
              {/* Vertical connector on mobile, arrow between steps */}
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-12 bottom-[-1.75rem] left-[1.125rem] w-px bg-line md:hidden"
                  aria-hidden="true"
                />
              ) : null}

              <div className="flex shrink-0 flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-ink-900 text-white">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-2xl leading-none font-semibold text-ink-200 tabular-nums md:text-sm">
                  {number}
                </span>
              </div>

              <div className="min-w-0 md:mt-5">
                <h3 className="text-lg leading-snug font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-[1.6] text-ink-600 md:mt-2 md:leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={200}>
        <div className="mt-10 flex justify-center sm:mt-12">
          <ActionButton
            message={waMessages.finalCta}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
            icon={<MessageCircle className="size-5" aria-hidden="true" />}
          >
            Start With {siteConfig.instituteName}
          </ActionButton>
        </div>
      </Reveal>
    </Section>
  )
}

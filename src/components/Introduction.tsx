import { BookOpenText, MessageCircle, Mic, Sparkles } from 'lucide-react'
import { aboutText } from '../config/site'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

const pillars = [
  {
    icon: MessageCircle,
    title: 'You speak, always',
    text: 'English is something you use in the class, not something you read about afterwards.',
    short: 'English is used in class, not read about later.',
  },
  {
    icon: BookOpenText,
    title: 'Words you actually need',
    text: 'Everyday phrases for college, work, shops and interviews, not long textbook lists.',
    short: 'Everyday phrases, not textbook lists.',
  },
  {
    icon: Mic,
    title: 'Clear pronunciation',
    text: 'Sounds and word stress corrected simply, so other people can follow you easily.',
    short: 'Sounds and stress fixed so people follow you.',
  },
  {
    icon: Sparkles,
    title: 'Confidence that lasts',
    text: 'Regular practice in a safe one-to-one setting, until hesitation stops being a problem.',
    short: 'A safe room until hesitation stops mattering.',
  },
]

export function Introduction() {
  return (
    <Section
      id="introduction"
      eyebrow="About the Academy"
      title="Built Around One Thing: You Speaking English"
      description={aboutText.intro}
      descriptionMobile="A spoken English academy built on one promise: you speak in every class."
    >
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text, short }, index) => (
            <Reveal key={title} delay={index * 70}>
              <div className="flex gap-3.5 border-t border-line pt-4 sm:block sm:gap-0 sm:pt-6">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-white sm:size-9">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 sm:mt-5">
                  <h3 className="text-[0.95rem] leading-snug font-semibold sm:text-[1.05rem]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[0.85rem] leading-[1.55] text-ink-600 sm:mt-2 sm:text-sm sm:leading-[1.6]">
                    <span className="sm:hidden">{short}</span>
                    <span className="hidden sm:inline">{text}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
    </Section>
  )
}

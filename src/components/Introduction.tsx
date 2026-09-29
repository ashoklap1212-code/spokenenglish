import { BookOpenText, MessageCircle, Mic, Sparkles } from 'lucide-react'
import { aboutText } from '../config/site'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

const pillars = [
  {
    icon: MessageCircle,
    title: 'You speak, always',
    text: 'English is something you use in the class, not something you read about afterwards.',
  },
  {
    icon: BookOpenText,
    title: 'Words you actually need',
    text: 'Everyday phrases for college, work, shops and interviews, not long textbook lists.',
  },
  {
    icon: Mic,
    title: 'Clear pronunciation',
    text: 'Sounds and word stress corrected simply, so other people can follow you easily.',
  },
  {
    icon: Sparkles,
    title: 'Confidence that lasts',
    text: 'Regular practice in a safe one-to-one setting, until hesitation stops being a problem.',
  },
]

export function Introduction() {
  return (
    <Section
      id="introduction"
      eyebrow="About the Academy"
      title="Built Around One Thing: You Speaking English"
      description={aboutText.intro}
    >
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 70}>
              <div className="flex gap-4 border-t border-line pt-5 sm:block sm:pt-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-white sm:size-9">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 sm:mt-5">
                  <h3 className="text-[1.05rem] leading-snug font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.6] text-ink-600 sm:mt-2 sm:leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
    </Section>
  )
}

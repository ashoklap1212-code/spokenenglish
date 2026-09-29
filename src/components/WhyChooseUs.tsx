import { Handshake, MessagesSquare, Repeat, ShieldCheck, Sparkles, Timer } from 'lucide-react'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

/** Edit this list to change the reasons you want to highlight. */
const reasons = [
  {
    icon: Handshake,
    title: 'Truly 1-to-1',
    text: 'One teacher, one student, the whole hour. No batch, no queue, nobody waiting for their turn.',
  },
  {
    icon: Repeat,
    title: 'Corrected as you speak',
    text: 'Your grammar mistakes are fixed in the moment, while you are still saying the sentence.',
  },
  {
    icon: ShieldCheck,
    title: 'Stage fear is normal here',
    text: 'A one-to-one room is the easiest place to make mistakes. Once mistakes stop feeling bad, speaking gets easy too.',
  },
  {
    icon: MessagesSquare,
    title: 'Real situations, not chapters',
    text: 'Interviews, calls, shops, campus and office conversations, practised until they feel normal.',
  },
  {
    icon: Sparkles,
    title: 'Built around your goal',
    text: 'You tell us what you need to fix. The lesson plan follows your goal, not a fixed textbook order.',
  },
  {
    icon: Timer,
    title: 'Timings that fit your day',
    text: 'Open from 9:30 AM to 9:30 PM on weekdays, so college and work schedules are not a problem.',
  },
]

export function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      eyebrow="Why Krishna Academy"
      title="What You Will Notice In The First Few Classes"
      description="No promises we cannot keep. This is simply how the training works here."
    >
      {/* Two columns from 360px up, three on desktop. One column on 320px. */}
      <ul className="grid grid-cols-1 gap-x-7 gap-y-8 min-[360px]:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} as="li" delay={index * 60} className="h-full">
            <div className="flex h-full gap-3.5 border-t border-line pt-5 sm:block sm:pt-6">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-ink-800">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 sm:mt-5">
                <h3 className="text-[1rem] leading-snug font-semibold sm:text-[1.05rem]">{title}</h3>
                <p className="mt-1.5 text-sm leading-[1.6] text-ink-600 sm:mt-2 sm:leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

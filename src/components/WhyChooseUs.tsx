import { Handshake, MessagesSquare, Repeat, ShieldCheck, Sparkles, Timer } from 'lucide-react'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

/**
 * Edit this list to change the reasons you want to highlight.
 *
 * `short` is the phone version of `text`: one scannable sentence, same claim.
 * `title` and `short` stay paired so the two never drift apart.
 */
const reasons = [
  {
    icon: Handshake,
    title: 'Truly 1-to-1',
    text: 'One teacher, one student, the whole hour. No batch, no queue, nobody waiting for their turn.',
    short: 'One teacher, one student, the whole hour.',
  },
  {
    icon: Repeat,
    title: 'Corrected as you speak',
    text: 'Your grammar mistakes are fixed in the moment, while you are still saying the sentence.',
    short: 'Your grammar is fixed as you talk.',
  },
  {
    icon: ShieldCheck,
    title: 'Stage fear is normal here',
    text: 'A one-to-one room is the easiest place to make mistakes. Once mistakes stop feeling bad, speaking gets easy too.',
    short: 'A safe room to make mistakes in.',
  },
  {
    icon: MessagesSquare,
    title: 'Real situations, not chapters',
    text: 'Interviews, calls, shops, campus and office conversations, practised until they feel normal.',
    short: 'Interviews, calls and office talk, practised.',
  },
  {
    icon: Sparkles,
    title: 'Built around your goal',
    text: 'You tell us what you need to fix. The lesson plan follows your goal, not a fixed textbook order.',
    short: 'The plan follows your goal, not a textbook.',
  },
  {
    icon: Timer,
    title: 'Timings that fit your day',
    text: 'Open from 9:30 AM to 9:30 PM on weekdays, so college and work schedules are not a problem.',
    short: 'Open 9:30 AM to 9:30 PM on weekdays.',
  },
]

export function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      eyebrow="Why Krishna Academy"
      title="What You Will Notice In The First Few Classes"
      titleMobile="What You Will Notice"
      description="No promises we cannot keep. This is simply how the training works here."
      descriptionMobile="No promises we cannot keep."
    >
      {/* Two columns from 360px up, three on desktop. One column on 320px. */}
      <ul className="grid grid-cols-1 gap-x-5 gap-y-5 min-[360px]:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, text, short }, index) => (
          <Reveal key={title} as="li" delay={index * 60} className="h-full">
            <div className="flex h-full gap-3 border-t border-line pt-3.5 sm:block sm:pt-6">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-ink-800 sm:size-9">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 sm:mt-5">
                <h3 className="text-[0.92rem] leading-snug font-semibold sm:text-[1.05rem]">
                  {title}
                </h3>
                <p className="mt-1 text-[0.82rem] leading-[1.5] text-ink-600 sm:mt-2 sm:text-sm sm:leading-[1.6]">
                  <span className="sm:hidden">{short}</span>
                  <span className="hidden sm:inline">{text}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

import { Clock, MessageCircle } from 'lucide-react'
import { classSchedule, siteConfig } from '../config/site'
import { waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

/** Edit this table to change your availability. */
export function ClassTimings() {
  return (
    <Section
      id="timings"
      eyebrow="Class Timings"
      title="Long Hours, So You Can Learn Around Your Day"
      description="Classes run through the day and into the evening, which means a slot can almost always be matched to your work, college or school hours."
      descriptionMobile="Day and evening slots, so a class fits around work or college."
      tone="line"
    >
      <Reveal className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-xl border border-line bg-white sm:rounded-2xl">
          <ul>
            {classSchedule.map(({ day, time }, index) => {
              const isClosed = time === 'Closed'
              return (
                <li
                  key={day}
                  className={`flex items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-8 sm:py-6 ${
                    index > 0 ? 'border-t border-line' : ''
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2.5 text-[0.9rem] font-medium text-ink-900 sm:gap-3 sm:text-[0.95rem]">
                    <Clock
                      className={`size-4 shrink-0 ${isClosed ? 'text-ink-300' : 'text-accent-600'}`}
                      aria-hidden="true"
                    />
                    {day}
                  </span>
                  <span
                    className={`shrink-0 text-[0.85rem] font-semibold tabular-nums sm:text-[0.95rem] ${
                      isClosed ? 'text-ink-400' : 'text-ink-900'
                    }`}
                  >
                    {time}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-4 text-center text-[0.85rem] leading-relaxed text-ink-500 sm:mt-6 sm:text-sm">
          Available at {siteConfig.locationLong}. Each slot is 1-to-1, so early-morning and late-night
          requests can often be arranged.
        </p>

        {/* Phones get a plain text link here, so the WhatsApp CTA stays
            meaningful at the hero, the trainer, the contact card and the end
            of the page instead of repeating in every section. */}
        <p className="mt-4 flex justify-center sm:hidden">
          <a
            href="#contact"
            className="-m-2 inline-flex min-h-11 items-center gap-1.5 px-2 py-2 text-[0.9rem] font-semibold text-ink-900 underline underline-offset-4"
          >
            Ask for a timetable
            <MessageCircle className="size-3.5" aria-hidden="true" />
          </a>
        </p>

        <div className="mt-6 hidden justify-center sm:mt-7 sm:flex">
          <ActionButton
            message={waMessages.timings}
            variant="whatsapp"
            size="lg"
            className="sm:w-auto"
            icon={<MessageCircle className="size-5" aria-hidden="true" />}
          >
            Ask for a Timetable
          </ActionButton>
        </div>
      </Reveal>
    </Section>
  )
}

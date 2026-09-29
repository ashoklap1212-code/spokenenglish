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
      tone="line"
    >
      <Reveal className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <ul>
            {classSchedule.map(({ day, time }, index) => {
              const isClosed = time === 'Closed'
              return (
                <li
                  key={day}
                  className={`flex items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-8 sm:py-6 ${
                    index > 0 ? 'border-t border-line' : ''
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2.5 text-[0.95rem] font-medium text-ink-900 sm:gap-3">
                    <Clock
                      className={`size-4 shrink-0 ${isClosed ? 'text-ink-300' : 'text-accent-600'}`}
                      aria-hidden="true"
                    />
                    {day}
                  </span>
                  <span
                    className={`shrink-0 text-[0.9rem] font-semibold tabular-nums sm:text-[0.95rem] ${
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

        <p className="mt-5 text-center text-[0.9rem] leading-relaxed text-ink-500 sm:mt-6 sm:text-sm">
          Available at {siteConfig.locationLong}. Each slot is 1-to-1, so early-morning and late-night
          requests can often be arranged.
        </p>

        <div className="mt-6 flex justify-center sm:mt-7">
          <ActionButton
            message={waMessages.timings}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
            icon={<MessageCircle className="size-5" aria-hidden="true" />}
          >
            Ask for a Timetable
          </ActionButton>
        </div>
      </Reveal>
    </Section>
  )
}

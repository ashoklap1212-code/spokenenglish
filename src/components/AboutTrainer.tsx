import { MessageCircle, UserRound } from 'lucide-react'
import { aboutText, siteConfig, trainerConfig } from '../config/site'
import { waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

const expertise = [
  'Spoken English',
  'Pronunciation',
  'Grammar Correction',
  'Stage Fear',
  'Interview Preparation',
  'Public Speaking',
  'Vocabulary Building',
  '1-to-1 Training',
]

const details = [
  { label: 'Name', value: trainerConfig.name },
  { label: 'Qualification', value: trainerConfig.qualification },
  { label: 'Experience', value: trainerConfig.experience },
]

export function AboutTrainer() {
  return (
    <Section
      id="about"
      eyebrow="Your Trainer"
      title="One Teacher, Focused Entirely On You"
      align="left"
      tone="line"
    >
      {/* Image first, then the details - on mobile the photo leads. */}
      <div className="grid items-start gap-9 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          {trainerConfig.photo ? (
            <img
              src={trainerConfig.photo}
              alt={`${trainerConfig.name}, spoken English trainer at ${siteConfig.instituteName}`}
              loading="lazy"
              decoding="async"
              width={640}
              height={800}
              // object-top keeps the face in frame instead of cropping to the centre
              className="aspect-[4/5] w-full rounded-2xl border border-line object-cover object-top shadow-card"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full max-w-xs flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink-200 bg-mist p-6 text-center sm:max-w-none sm:p-8">
              <span className="flex size-14 items-center justify-center rounded-xl bg-white text-ink-400">
                <UserRound className="size-7" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-ink-700">Trainer photo</p>
              <p className="max-w-[15rem] text-[0.8rem] leading-relaxed text-ink-500">
                Add your photo path in{' '}
                <code className="rounded bg-white px-1.5 py-0.5 text-[0.75rem] text-ink-700">
                  src/config/site.ts
                </code>{' '}
                to show it here.
              </p>
            </div>
          )}
        </Reveal>

        <div className="min-w-0">
          <Reveal delay={80}>
            <h3 className="text-xl font-semibold sm:text-2xl">{trainerConfig.name}</h3>
            <p className="mt-1.5 text-sm font-medium text-ink-500">
              Spoken English Trainer, {siteConfig.instituteName}
            </p>
          </Reveal>

          <Reveal delay={130}>
            {/* Stacked on mobile so long placeholders never squeeze. */}
            <dl className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line min-[400px]:grid-cols-3 sm:mt-8">
              {details.map((item) => (
                <div key={item.label} className="bg-white px-4 py-3.5">
                  <dt className="text-[0.78rem] font-semibold tracking-wide text-ink-400 uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold break-words text-ink-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-7 space-y-4 text-[1rem] leading-[1.65] text-ink-600 sm:mt-8 sm:text-base sm:leading-relaxed">
              <p>{aboutText.approach}</p>
              <p>
                Because each class is 1-to-1, the pace is set by you. A student who is nervous in
                front of others gets the same full attention as one preparing for a job interview.
              </p>
            </div>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-8 text-[0.78rem] font-semibold tracking-[0.16em] text-ink-400 uppercase sm:mt-9 sm:text-xs sm:tracking-[0.18em]">
              Areas of expertise
            </p>
            <ul className="mt-3.5 flex flex-wrap gap-2 sm:mt-4">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-mist px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-700 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <ActionButton
              message={waMessages.askAboutClasses}
              variant="whatsapp"
              size="lg"
              className="mt-8 w-full sm:mt-9 sm:w-auto"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              Talk to the Trainer
            </ActionButton>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

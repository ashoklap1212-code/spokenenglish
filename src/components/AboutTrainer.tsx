import { ChevronDown, MessageCircle, UserRound } from 'lucide-react'
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
      <div className="grid items-start gap-6 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          {trainerConfig.photo ? (
            <img
              src={trainerConfig.photo}
              alt={`${trainerConfig.name}, spoken English trainer at ${siteConfig.instituteName}`}
              loading="lazy"
              decoding="async"
              width={550}
              height={557}
              // The photo is near-square, so the 4:5 frame crops the sides
              // only. object-top is kept so a taller replacement photo would
              // still favour the face. Capped in width on phones so the frame
              // stays a portrait, not a full-screen panel.
              className="mx-auto aspect-[4/5] w-full max-w-[15rem] rounded-xl border border-line object-cover object-top shadow-soft sm:max-w-none sm:rounded-2xl sm:shadow-card"
            />
          ) : (
            <div className="mx-auto flex aspect-[4/5] w-full max-w-[15rem] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-ink-200 bg-mist p-6 text-center sm:max-w-none sm:rounded-2xl sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white text-ink-400 sm:size-14">
                <UserRound className="size-6 sm:size-7" aria-hidden="true" />
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
            <p className="mt-1 text-[0.9rem] font-medium text-ink-500 sm:text-sm">
              Spoken English Trainer, {siteConfig.instituteName}
            </p>
          </Reveal>

          {/* Phones get one compact credential line instead of a three-cell
              grid, which used up a large part of the first screen of cards. */}
          <Reveal delay={120} className="sm:hidden">
            <p className="mt-3 text-[0.85rem] font-medium text-ink-700">
              {trainerConfig.experience} &middot; {trainerConfig.qualification}
            </p>
          </Reveal>

          <Reveal delay={130} className="hidden sm:block">
            {/* Stacked on mobile so long placeholders never squeeze. */}
            <dl className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line min-[400px]:grid-cols-3 sm:mt-8">
              {details.map((item) => (
                <div key={item.label} className="bg-white px-4 py-3.5">
                  <dt className="text-[0.7rem] font-semibold tracking-wide text-ink-400 uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold break-words text-ink-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={180} className="sm:hidden">
            <p className="mt-4 text-[0.92rem] leading-[1.6] text-ink-600">
              {trainerConfig.experience} of teaching spoken English. Every class is 1-to-1, so the
              pace is set by you and your grammar is corrected as you talk.
            </p>
          </Reveal>

          <Reveal delay={180} className="hidden sm:block">
            <div className="mt-7 space-y-4 text-[1rem] leading-[1.65] text-ink-600 sm:mt-8 sm:text-base sm:leading-relaxed">
              <p>{aboutText.approach}</p>
              <p>
                Because each class is 1-to-1, the pace is set by you. A student who is nervous in
                front of others gets the same full attention as one preparing for a job interview.
              </p>
            </div>
          </Reveal>

          {/* The full background stays one tap away on phones instead of
              filling the section. */}
          <details className="group mt-4 sm:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-[0.85rem] font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
              Read more
              <ChevronDown
                className="size-3.5 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="mt-3 border-t border-line pt-3">
              <p className="text-[0.9rem] leading-[1.6] text-ink-600">{aboutText.approach}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-mist px-2.5 py-1 text-[0.75rem] font-medium text-ink-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <Reveal delay={230} className="hidden sm:block">
            <p className="mt-8 text-[0.7rem] font-semibold tracking-[0.16em] text-ink-400 uppercase sm:mt-9 sm:text-xs sm:tracking-[0.18em]">
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
              className="mt-6 sm:mt-9 sm:w-auto"
              icon={<MessageCircle className="size-4 sm:size-5" aria-hidden="true" />}
            >
              <span className="sm:hidden">Chat on WhatsApp</span>
              <span className="hidden sm:inline">Talk to the Trainer</span>
            </ActionButton>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

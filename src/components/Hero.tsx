import { ArrowRight, Check, MessageCircle, Phone, UserRound, Target, BookOpenCheck } from 'lucide-react'
import { keyFeatures, siteConfig } from '../config/site'
import { telUrl, waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Reveal } from './ui/Reveal'

const assurancePoints = [
  '1 teacher to 1 student',
  'Live, in-person classes',
  'No prior English needed',
]

const featureIcons = [UserRound, Target, BookOpenCheck]

function HeroVisual() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8">
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4 sm:pb-5">
        <p className="text-sm font-semibold text-ink-900">Inside every class</p>
        <span className="text-xs font-medium text-ink-400">1 : 1</span>
      </div>

      <ul className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
        {keyFeatures.map((feature, index) => {
          const Icon = featureIcons[index]
          return (
            <li key={feature.id} className="flex gap-3.5 sm:gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-ink-800">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="text-[0.95rem] font-semibold text-ink-900">{feature.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{feature.text}</p>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mt-6 border-t border-line pt-4 sm:mt-7 sm:pt-5">
        <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-ink-400 uppercase">
          Class timings
        </p>
        <p className="mt-2 text-sm font-medium text-ink-800">{siteConfig.classTimings}</p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-canvas pt-8 pb-12 sm:pt-24 lg:pt-28 lg:pb-32"
    >
      <div className="container-page">
        <div className="grid items-start gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-600">
                <span className="size-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                {/* Phones get the short label, desktop keeps the SEO phrase. */}
                <span className="truncate sm:hidden">Spoken English Training</span>
                <span className="hidden truncate sm:inline">{siteConfig.localSeoPhrase}</span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-[2rem] leading-[1.12] font-semibold sm:mt-7 sm:text-[3.2rem] sm:leading-[1.08] lg:text-[3.75rem]">
                <span className="sm:hidden">Speak English With Confidence.</span>
                <span className="hidden sm:inline">
                  Speak English Without
                  <span className="block text-ink-400">Stage Fear.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 max-w-xl text-[0.98rem] leading-[1.6] text-ink-600 sm:mt-7 sm:text-lg sm:leading-relaxed">
                <span className="sm:hidden">
                  1-to-1 English coaching in {siteConfig.location}. Build confidence for everyday
                  life, studies and work.
                </span>
                <span className="hidden sm:inline">
                  {siteConfig.instituteName} runs 1-to-1 spoken English classes across{' '}
                  {siteConfig.locationLong}. Your grammar gets corrected as you speak, and you
                  leave every session having actually spoken.
                </span>
              </p>
            </Reveal>

            <Reveal delay={200}>
              {/* Phones get one auto-width button plus a text link. From `sm`
                  upwards the approved two-button row is unchanged. */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-9 sm:flex-nowrap sm:gap-3">
                <ActionButton
                  message={waMessages.hero}
                  variant="whatsapp"
                  size="lg"
                  className="sm:w-auto"
                  icon={<MessageCircle className="size-4 sm:size-5" aria-hidden="true" />}
                >
                  <span className="sm:hidden">Chat on WhatsApp</span>
                  <span className="hidden sm:inline">Book a Free Trial</span>
                </ActionButton>

                {/* Mobile sends people to the course list, which is the more
                    useful next step on a small screen. */}
                <a
                  href="#courses"
                  className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-ink-800 transition-colors hover:text-ink-500 sm:hidden"
                >
                  Explore Courses
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                {/* Wrapper owns the visibility: a `hidden` utility on the
                    button itself would lose to ActionButton's base
                    `inline-flex`. */}
                <div className="hidden sm:block">
                  <ActionButton
                    href="#timings"
                    variant="outline"
                    size="lg"
                    className="sm:w-auto"
                    icon={<ArrowRight className="size-5" aria-hidden="true" />}
                  >
                    See Timings
                  </ActionButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5 sm:mt-9 sm:gap-x-7 sm:gap-y-3 sm:pt-7">
                {assurancePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-1.5 text-[0.8rem] font-medium text-ink-600 sm:text-sm sm:gap-2"
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white">
                      <Check className="size-2.5" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* The call link is duplicated by the mobile menu, the contact
                section and the footer, so it is desktop-only. */}
            <Reveal delay={320} className="hidden sm:block">
              <a
                href={telUrl() ?? '#contact'}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900 sm:mt-7"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                or call {siteConfig.phoneNumber}
              </a>
            </Reveal>
          </div>

          <Reveal delay={160} className="hidden lg:block lg:pt-4">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

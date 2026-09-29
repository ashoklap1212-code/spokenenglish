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
      className="relative overflow-hidden bg-canvas pt-10 pb-14 sm:pt-24 lg:pt-28 lg:pb-32"
    >
      <div className="container-page">
        <div className="grid items-start gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-600">
                <span className="size-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                <span className="truncate">{siteConfig.localSeoPhrase}</span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.125rem] leading-[1.1] font-semibold sm:mt-7 sm:text-[3.2rem] sm:leading-[1.08] lg:text-[3.75rem]">
                <span className="sm:hidden">Speak English With Confidence.</span>
                <span className="hidden sm:inline">
                  Speak English Without
                  <span className="block text-ink-400">Stage Fear.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.65] text-ink-600 sm:mt-7 sm:text-lg sm:leading-relaxed">
                {siteConfig.instituteName} runs 1-to-1 spoken English classes across{' '}
                {siteConfig.locationLong}. Your grammar gets corrected as you speak, and you
                leave every session having actually spoken.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
                <ActionButton
                  message={waMessages.hero}
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<MessageCircle className="size-5" aria-hidden="true" />}
                >
                  <span className="sm:hidden">Chat on WhatsApp</span>
                  <span className="hidden sm:inline">Book a Free Trial</span>
                </ActionButton>

                {/* Mobile sends people to the course list, which is the more
                    useful next step on a small screen. Desktop keeps the
                    original timings link and label. */}
                <ActionButton
                  href="#courses"
                  variant="outline"
                  size="lg"
                  className="w-full sm:hidden"
                  icon={<ArrowRight className="size-5" aria-hidden="true" />}
                >
                  Explore Courses
                </ActionButton>
                <div className="hidden w-full sm:block sm:w-auto">
                  <ActionButton
                    href="#timings"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    icon={<ArrowRight className="size-5" aria-hidden="true" />}
                  >
                    See Timings
                  </ActionButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-7 flex flex-col gap-2.5 border-t border-line pt-6 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3 sm:pt-7">
                {assurancePoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink-600">
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white">
                      <Check className="size-2.5" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={320}>
              <a
                href={telUrl() ?? '#contact'}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900 sm:mt-7"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                or call {siteConfig.phoneNumber}
              </a>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:pt-4">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

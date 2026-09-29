import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Quote } from 'lucide-react'
import { waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

/**
 * Testimonials are NOT written here on purpose.
 * Only real student feedback should be published, with the student's permission.
 *
 * To publish a real testimonial, add one object like this to the array below and
 * delete the remaining placeholders:
 *
 * {
 *   name: 'Student First Name',
 *   course: 'Beginner English',
 *   feedback: 'The real words this student shared about the class.',
 *   isPlaceholder: false,
 * }
 */
const testimonials = [
  {
    name: '[Student Name]',
    course: '[Course]',
    feedback: '[Real student feedback will be added here]',
    isPlaceholder: true,
  },
  {
    name: '[Student Name]',
    course: '[Course]',
    feedback: '[Real student feedback will be added here]',
    isPlaceholder: true,
  },
  {
    name: '[Student Name]',
    course: '[Course]',
    feedback: '[Real student feedback will be added here]',
    isPlaceholder: true,
  },
]

type Testimonial = (typeof testimonials)[number]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-7 ${
        testimonial.isPlaceholder ? 'border-dashed border-ink-200' : 'border-line shadow-soft'
      }`}
    >
      <Quote
        className={`size-5 shrink-0 ${testimonial.isPlaceholder ? 'text-ink-200' : 'text-accent-400'}`}
        aria-hidden="true"
      />
      <blockquote
        className={`mt-5 flex-1 text-[0.98rem] leading-[1.65] ${
          testimonial.isPlaceholder ? 'italic text-ink-400' : 'text-ink-700'
        }`}
      >
        {testimonial.feedback}
      </blockquote>
      <figcaption
        className={`mt-6 flex items-center gap-3 pt-5 ${
          testimonial.isPlaceholder ? 'border-t border-dashed border-ink-200' : 'border-t border-line'
        }`}
      >
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
            testimonial.isPlaceholder ? 'bg-ink-50 text-ink-400' : 'bg-ink-900 text-white'
          }`}
          aria-hidden="true"
        >
          {testimonial.isPlaceholder ? '?' : testimonial.name.charAt(0).toUpperCase()}
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-sm font-semibold text-ink-900">{testimonial.name}</span>
          <span className="truncate text-[0.8rem] text-ink-400">{testimonial.course}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  // Pagination dots reflect the real scroll position, so a swipe updates them.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const card = track.firstElementChild as HTMLElement | null
      if (!card) return
      const width = card.offsetWidth + 16
      if (width <= 0) return
      setActiveIndex(Math.round(track.scrollLeft / width))
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  function goTo(index: number) {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    if (!card) return
    track.scrollTo({ left: index * (card.offsetWidth + 16), behavior: 'smooth' })
  }

  return (
    <Section
      id="testimonials"
      eyebrow="Student Voices"
      title="What Our Students Say"
      description="We publish real words from real students only, and only with their permission."
      tone="mist"
    >
      {/* Mobile: one swipeable card at a time. Desktop: the approved 3-up grid. */}
      <div className="md:hidden">
        <Reveal>
          <div
            ref={trackRef}
            className="snap-x-track"
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Student testimonials"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 first:pl-0 last:pr-0" role="group" aria-roledescription="slide">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {testimonials.length > 1 ? (
            <div className="mt-4 flex items-center justify-center gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                  aria-current={activeIndex === index}
                  // 44px hit area around a small visual dot
                  className="flex h-11 w-11 items-center justify-center"
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      activeIndex === index ? 'w-6 bg-ink-900' : 'w-2.5 bg-ink-200'
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={index} delay={index * 80} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <p className="mt-10 text-center text-sm text-ink-500 sm:mt-12">
          Been a student?{' '}
          <ActionButton
            message={waMessages.general}
            variant="quiet"
            size="sm"
            className="px-0"
            icon={<MessageCircle className="size-3.5" aria-hidden="true" />}
          >
            Send us your feedback
          </ActionButton>
        </p>
      </Reveal>
    </Section>
  )
}

import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  titleId?: string
  description?: string
  children: ReactNode
  align?: 'left' | 'center'
  tone?: 'white' | 'mist' | 'line'
  className?: string
}

const tones = {
  white: 'bg-canvas',
  mist: 'bg-mist',
  line: 'border-y border-line bg-canvas',
}

/** Consistent section wrapper: spacing, heading hierarchy and background tone. */
export function Section({
  id,
  eyebrow,
  title,
  titleId,
  description,
  children,
  align = 'center',
  tone = 'white',
  className = '',
}: SectionProps) {
  const headingId = titleId ?? `${id}-heading`

  return (
    <section
      id={id}
      className={`${tones[tone]} section-pad scroll-mt-20 sm:scroll-mt-24 ${className}`}
    >
      <div className="container-page">
        <Reveal
          className={
            align === 'center'
              ? 'mx-auto flex max-w-2xl flex-col items-center text-center'
              : 'flex max-w-2xl flex-col items-start'
          }
        >
          {eyebrow ? (
            <p className="mb-3.5 text-[0.8rem] font-semibold tracking-[0.18em] text-accent-600 uppercase sm:mb-4 sm:text-xs sm:tracking-[0.2em]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="text-[1.6rem] leading-[1.2] font-semibold sm:text-3xl lg:text-[2.4rem] lg:leading-[1.18]"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-[1.0rem] leading-[1.65] text-ink-600 sm:mt-5 sm:text-[1.05rem] sm:leading-relaxed">
              {description}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-10 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}

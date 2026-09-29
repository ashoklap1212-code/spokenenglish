import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  /**
   * Optional trimmed heading shown on phones only. The full `title` still
   * renders from the `sm` breakpoint upwards.
   */
  titleMobile?: string
  titleId?: string
  description?: string
  /**
   * Optional trimmed copy shown on phones only. Same message, fewer words -
   * the full `description` still renders from the `sm` breakpoint upwards.
   */
  descriptionMobile?: string
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
  titleMobile,
  titleId,
  description,
  descriptionMobile,
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
            <p className="mb-3 text-[0.72rem] font-semibold tracking-[0.18em] text-accent-600 uppercase sm:mb-4 sm:text-xs sm:tracking-[0.2em]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="text-[1.375rem] leading-[1.25] font-semibold sm:text-3xl lg:text-[2.4rem] lg:leading-[1.18]"
          >
            {titleMobile ? (
              <>
                <span className="sm:hidden">{titleMobile}</span>
                <span className="hidden sm:inline">{title}</span>
              </>
            ) : (
              title
            )}
          </h2>
          {description ? (
            <p className="mt-3 text-[0.95rem] leading-[1.6] text-ink-600 sm:mt-5 sm:text-[1.05rem] sm:leading-relaxed">
              {descriptionMobile ? (
                <>
                  <span className="sm:hidden">{descriptionMobile}</span>
                  <span className="hidden sm:inline">{description}</span>
                </>
              ) : (
                description
              )}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-7 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}

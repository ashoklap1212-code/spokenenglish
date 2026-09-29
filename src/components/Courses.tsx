import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/site'
import { waMessages } from '../lib/whatsapp'
import { ActionButton } from './ui/ActionButton'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

/** Edit this list to add, remove or rename courses. Every session is 1-to-1. */
const courses = [
  {
    id: 'beginner',
    title: 'Beginner English',
    tagline: 'Starting from zero',
    description:
      'For students who can barely form a sentence in English. We build the base slowly, with simple grammar and everyday words.',
    outcomes: [
      'Form simple sentences correctly',
      'Greet, introduce and ask basic questions',
      'Understand and use everyday vocabulary',
      'Stop translating in your head',
    ],
    message: waMessages.course.beginner,
  },
  {
    id: 'intermediate',
    title: 'Everyday Fluency',
    tagline: 'For those who know the basics',
    description:
      'You know some English but freeze when you have to use it. This level is about speed, clarity and stopping mid-sentence.',
    outcomes: [
      'Speak in longer sentences without pausing',
      'Use tenses in real conversation',
      'Sound clearer and more natural',
      'Hold a conversation with strangers',
    ],
    message: waMessages.course.intermediate,
  },
  {
    id: 'interview',
    title: 'English for Interviews',
    tagline: 'Job-ready confidence',
    description:
      'Focused practice for the questions you actually get asked, plus the grammar slips that cost people interviews.',
    outcomes: [
      'Write and deliver a strong self-introduction',
      'Answer common interview questions',
      'Handle technical and HR questions',
      'Correct grammar in high-pressure answers',
    ],
    message: waMessages.course.interview,
  },
  {
    id: 'students',
    title: 'Students & College',
    tagline: 'Campus, presentations, GDs',
    description:
      'English for college life - presenting in class, participating in group discussions and presenting your project.',
    outcomes: [
      'Present in front of the class',
      'Take part in group discussions',
      'Write emails and reports properly',
      'Handle viva and placement rounds',
    ],
    message: waMessages.course.students,
  },
]

export function Courses() {
  return (
    <Section
      id="courses"
      eyebrow="What We Teach"
      title="Pick the Level That Matches You Today"
      description={`Every course at ${siteConfig.instituteName} is taught 1-to-1. Your plan is built from your level and your goal, never from a fixed syllabus for everybody.`}
      tone="mist"
    >
      {/* One card per row on mobile, two from tablet upwards. */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        {courses.map((course, index) => (
          <Reveal key={course.id} delay={index * 70} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition duration-300 hover:border-ink-300 hover:shadow-card sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.78rem] font-semibold tracking-[0.14em] text-ink-400 uppercase sm:text-xs sm:tracking-[0.16em]">
                  {course.tagline}
                </span>
                <span className="shrink-0 text-sm font-semibold text-ink-300 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-4 text-[1.2rem] font-semibold sm:mt-5 sm:text-xl">{course.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-ink-600 sm:mt-3 sm:leading-relaxed">
                {course.description}
              </p>

              <p className="mt-6 text-[0.78rem] font-semibold tracking-[0.14em] text-ink-400 uppercase sm:mt-7 sm:tracking-[0.16em]">
                What you will be able to do
              </p>
              <ul className="mt-3.5 flex-1 space-y-2.5 sm:mt-4">
                {course.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 text-[0.95rem] leading-[1.55] text-ink-700"
                  >
                    <span
                      className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-accent-500"
                      aria-hidden="true"
                    />
                    <span className="min-w-0">{outcome}</span>
                  </li>
                ))}
              </ul>

              <ActionButton
                message={course.message}
                variant="outline"
                size="lg"
                className="mt-7 w-full sm:mt-8"
                icon={<MessageCircle className="size-4" aria-hidden="true" />}
              >
                Enquire About This
              </ActionButton>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-10 text-center text-[0.95rem] leading-relaxed text-ink-500 sm:mt-12">
          Not sure which course fits you?{' '}
          {/* Inline link inside a sentence: negative margin keeps the visual
              line spacing identical while giving the tap area a real size. */}
          <a
            href="#enquire"
            className="-m-2 inline-flex min-h-11 items-center px-2 py-2 font-semibold text-ink-900 underline underline-offset-4"
          >
            Send an enquiry
          </a>{' '}
          and we will suggest the right level.
        </p>
      </Reveal>
    </Section>
  )
}

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

/** Edit this list to add or change any question. */
const faqs = [
  {
    question: 'Do you really teach 1-to-1, or is it a group batch?',
    answer:
      'It is genuinely 1-to-1. One teacher, one student, for the full session. That is the core reason we are able to correct your grammar and your hesitation in the same breath, because nothing gets lost in a group.',
  },
  {
    question: 'My English is very weak. Can I still join?',
    answer:
      'Yes. Many of our students start with almost no English. If you can read simple English, you can start. We begin from the very basics and move at a pace you can follow.',
  },
  {
    question: 'How do you help with stage fear?',
    answer:
      'You speak from the first session, and you make mistakes in a room where only one person is listening. We repeat, rephrase and correct without making you feel small, and the hesitation reduces week by week until it is simply gone.',
  },
  {
    question: 'How is grammar corrected?',
    answer:
      'Live, while you are speaking. We stop the sentence, fix the error, and you say it again correctly. This is far more effective than memorising rules, because the correction is attached to the moment you actually needed it.',
  },
  {
    question: 'Which course should I choose?',
    answer:
      `Send us a message about your current level and what you want to improve. We will tell you honestly which level fits, and we can start with a trial class before you commit. You can also visit us at ${siteConfig.locationLong}.`,
  },
  {
    question: 'Do you take evening and weekend slots?',
    answer:
      'Yes. Weekday classes run from 9:30 AM to 9:30 PM and Saturday from 4:30 PM to 9:30 PM, which covers almost every work, college and school schedule. Ask on WhatsApp for the current availability.',
  },
  {
    question: 'What are the fees?',
    answer:
      'Fees depend on the level and the number of sessions per week. Message or call us with your requirement and we will share the exact fee along with the available slots.',
  },
  {
    question: 'Can adults join, or is it only for students?',
    answer:
      'Anyone can join. Our students include school and college students, job seekers, working professionals, housewives and complete beginners. The level and the plan are decided per person.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions Students Ask Us Most"
      description="If your question is not here, message us and we will answer it directly."
    >
      <Reveal className="mx-auto max-w-3xl">
        <ul className="overflow-hidden rounded-2xl border border-line bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <li key={faq.question} className={index > 0 ? 'border-t border-line' : ''}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors active:bg-ink-50 sm:min-h-16 sm:gap-5 sm:px-8 sm:py-6"
                  >
                    <span
                      className={`text-[1rem] leading-snug font-semibold transition-colors sm:text-[1.05rem] ${
                        isOpen ? 'text-ink-900' : 'text-ink-700'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-45 border-ink-900 bg-ink-900 text-white'
                          : 'border-ink-200 text-ink-500'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                </h3>
                {/* Height is animated on the wrapper so the layout moves
                    smoothly instead of snapping open. */}
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  data-open={isOpen}
                  className="faq-panel"
                >
                  <div>
                    <p className="max-w-2xl px-5 pb-5 text-[0.95rem] leading-[1.7] text-ink-600 sm:px-8 sm:pb-7 sm:leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}

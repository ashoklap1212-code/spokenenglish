import { useState } from 'react'
import type { FormEvent } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { siteConfig } from '../config/site'
import { enquiryMessage, whatsappUrl } from '../lib/whatsapp'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

const levels = ['Complete beginner', 'Basics', 'Intermediate', 'Advanced / fluent']
const goals = [
  'Speak without stage fear',
  'Improve grammar',
  'Prepare for interviews',
  'College / group discussions',
  'Workplace communication',
]

// 16px font-size on mobile stops iOS Safari zooming the viewport on focus.
const inputClass =
  'h-12 w-full rounded-lg border border-ink-200 bg-white px-3.5 text-base text-ink-900 transition-colors placeholder:text-ink-400 hover:border-ink-300 focus:border-ink-900 focus:outline-none sm:h-11 sm:text-[0.95rem]'

const labelClass = 'mb-2 block text-[0.85rem] font-semibold text-ink-700'

/**
 * Short enquiry form. It builds the visitor's message and opens WhatsApp with
 * it prefilled - no backend, no stored data, nothing to maintain.
 */
export function EnquiryForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [level, setLevel] = useState(levels[0])
  const [goal, setGoal] = useState(goals[0])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()

    if (!trimmedName || !trimmedPhone) return

    const link = whatsappUrl(
      enquiryMessage({ name: trimmedName, phone: trimmedPhone, level, goal }),
    )
    window.open(link ?? '#contact', link ? '_blank' : '_self', 'noopener,noreferrer')
  }

  return (
    <Section
      id="enquire"
      eyebrow="Free Trial Class"
      title="Book Your First Session In Two Minutes"
      description="Fill this in and we open WhatsApp with your details already written. You will get a reply with the available slots and the fee for your level."
      descriptionMobile="Fill this in and we open WhatsApp with the slots and fee for your level."
      tone="mist"
    >
      <Reveal className="mx-auto max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-line bg-white p-4 shadow-soft sm:rounded-2xl sm:p-9"
        >
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5">
            <div>
              <label htmlFor="enq-name" className={labelClass}>
                Your name
              </label>
              <input
                id="enq-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. Ram Kumar"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="enq-phone" className={labelClass}>
                Phone number
              </label>
              <input
                id="enq-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="e.g. 98765 43210"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="enq-level" className={labelClass}>
                Current level
              </label>
              <select
                id="enq-level"
                name="level"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                className={inputClass}
              >
                {levels.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="enq-goal" className={labelClass}>
                What do you want to fix?
              </label>
              <select
                id="enq-goal"
                name="goal"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className={inputClass}
              >
                {goals.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* A form submit genuinely benefits from the wider target, so this
              one control stays full width on phones. */}
          <button
            type="submit"
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-wa px-5 text-[0.95rem] font-semibold text-white transition duration-200 hover:bg-wa-dark active:bg-wa-dark sm:mt-7 sm:h-12 sm:w-auto sm:rounded-full sm:px-7 sm:text-base"
          >
            <Send className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
            Send Enquiry on WhatsApp
          </button>

          <p className="mt-3.5 flex items-start gap-2 text-[0.75rem] leading-relaxed text-ink-400 sm:mt-5 sm:text-xs">
            <MessageCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
            Nothing is stored on this website. The details are only used to open your WhatsApp chat
            with {siteConfig.instituteName}.
          </p>
        </form>
      </Reveal>
    </Section>
  )
}

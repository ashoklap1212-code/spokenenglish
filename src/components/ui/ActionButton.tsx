import type { ReactNode } from 'react'
import { whatsappUrl } from '../../lib/whatsapp'

type ActionButtonProps = {
  children: ReactNode
  /** Pre-filled WhatsApp message. Enables the WhatsApp behaviour. */
  message?: string
  /** Normal link, used for anchors such as #courses */
  href?: string
  variant?: 'primary' | 'whatsapp' | 'outline' | 'quiet'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: ReactNode
}

const variants = {
  primary: 'bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-900',
  whatsapp: 'bg-wa text-white hover:bg-wa-dark active:bg-wa-dark',
  outline: 'border border-ink-200 bg-white text-ink-800 hover:border-ink-900 hover:bg-ink-900 hover:text-white',
  quiet: 'text-ink-700 hover:bg-ink-50 hover:text-ink-900',
}

/**
 * Mobile keeps a 48px minimum height for comfortable tapping, then drops to
 * the tighter desktop heights from `sm` upwards so the approved desktop layout
 * is unchanged.
 */
const sizes = {
  sm: 'h-12 px-4 text-[0.95rem] gap-1.5 sm:h-11 sm:text-sm sm:px-4 lg:h-9',
  md: 'h-12 px-5 text-[0.95rem] gap-2 sm:h-11 sm:px-5 sm:text-[0.95rem] lg:h-11',
  lg: 'h-14 px-6 text-base gap-2.5 sm:h-13 sm:px-7 sm:text-base sm:[1.05rem]',
}

/**
 * One button for the whole site.
 * Give it a `message` for a WhatsApp button - if the WhatsApp number has not
 * been added yet, the button safely points to the Contact section instead.
 */
export function ActionButton({
  children,
  message,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}: ActionButtonProps) {
  const waLink = message ? whatsappUrl(message) : null
  // While the WhatsApp number is not configured, message buttons safely point
  // to the contact section instead of opening an unknown number.
  const target = waLink ?? href ?? (message ? '#contact' : '#top')
  const external = waLink !== null || target.startsWith('http')

  return (
    <a
      href={target}
      className={`inline-flex max-w-full items-center justify-center rounded-full font-semibold whitespace-nowrap transition duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon}
      <span className="truncate">{children}</span>
    </a>
  )
}

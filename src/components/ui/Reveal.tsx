import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../../lib/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

/** Wraps a block in the gentle fade-up animation used across the site. */
export function Reveal({ children, className = '', delay = 0, as }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

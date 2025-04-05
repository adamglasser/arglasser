import Link from 'next/link'
import clsx from 'clsx'
import { COLOR_SCHEMES } from '@/lib/theme'

export function Button({ 
  invert = false, 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}) {
  // Get the appropriate color scheme based on variant and invert props
  const colorScheme = invert 
    ? COLOR_SCHEMES.button.secondary 
    : variant === 'accent' 
      ? COLOR_SCHEMES.button.accent 
      : COLOR_SCHEMES.button.primary

  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    `bg-[${colorScheme.background}] text-[${colorScheme.text}] hover:bg-[${colorScheme.hoverBackground}] hover:text-[${colorScheme.hoverText}]`
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}

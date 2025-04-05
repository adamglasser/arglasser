import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function SectionIntro({
  title,
  eyebrow,
  children,
  smaller = false,
  invert = false,
  ...props
}) {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  'mb-6 block font-display text-base font-semibold',
                  invert ? 'text-[var(--text-on-black)]' : 'text-[var(--coniferous-green)]',
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'block font-display tracking-tight [text-wrap:balance]',
              smaller
                ? 'text-2xl font-semibold'
                : 'text-4xl font-medium sm:text-5xl',
              invert ? 'text-[var(--text-on-black)]' : 'text-[var(--volcanic-black)]',
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              'mt-6 text-xl',
              invert ? 'text-[var(--synthetic-quartz)]' : 'text-[var(--mushroom-grey-dark)]',
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}

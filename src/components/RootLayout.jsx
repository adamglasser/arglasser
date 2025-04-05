'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

const RootLayoutContext = createContext({
  logoHovered: false,
  setLogoHovered: () => {},
})

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-8 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-8 sm:block"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href="/contact" invert={invert} className="bg-[var(--coniferous-green)] text-[var(--text-on-black)]">
            Contact me
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-[rgba(var(--text-on-black-rgb),0.1)]' : 'hover:bg-[rgba(var(--volcanic-black-rgb),0.1)]',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-[var(--text-on-black)] group-hover:fill-[var(--synthetic-quartz)]'
                  : 'fill-[var(--volcanic-black)] group-hover:fill-[var(--mushroom-grey)]',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="even:mt-px sm:bg-[var(--volcanic-black)]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-[var(--volcanic-black)] px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-[var(--mushroom-grey)] sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-[var(--coniferous-green)] opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-[var(--text-on-black)]">
      <NavigationRow>
        <NavigationItem href="/work">Projects</NavigationItem>
        <NavigationItem href="/about">About Me</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/contact">Contact</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let [logoHovered, setLogoHovered] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let navRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
        <header>
          <div
            className="absolute top-2 right-0 left-0 z-40 pt-14"
            aria-hidden={expanded ? 'true' : undefined}
            inert={expanded ? '' : undefined}
          >
            <Header
              panelId={panelId}
              icon={MenuIcon}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded)
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true }),
                )
              }}
            />
          </div>

          <motion.div
            layout
            id={panelId}
            style={{ height: expanded ? 'auto' : '0.5rem' }}
            className="relative z-50 overflow-hidden bg-[var(--volcanic-black)] pt-2"
            aria-hidden={expanded ? undefined : 'true'}
            inert={expanded ? undefined : ''}
          >
            <motion.div layout className="bg-[var(--coniferous-green)]">
              <div ref={navRef} className="bg-[var(--volcanic-black)] pt-14 pb-16">
                <Header
                  invert
                  panelId={panelId}
                  icon={XIcon}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((expanded) => !expanded)
                    window.setTimeout(() =>
                      openRef.current?.focus({ preventScroll: true }),
                    )
                  }}
                />
              </div>
              <Navigation />
              <div className="relative bg-[var(--volcanic-black)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[var(--coniferous-green)]">
                <Container>
                  <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
                    <div>
                      <h2 className="font-display text-base font-semibold text-[var(--text-on-black)]">
                        Location
                      </h2>
                      <Offices
                        invert
                        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                      />
                    </div>
                    <div className="sm:border-l sm:border-transparent sm:pl-16">
                      <h2 className="font-display text-base font-semibold text-[var(--text-on-black)]">
                        Let's connect
                      </h2>
                      <SocialMedia className="mt-6" invert />
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>

        <motion.div
          layout
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="relative flex flex-auto overflow-hidden bg-[var(--synthetic-quartz)] pt-14"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9"
          >
            <GridPattern
              className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-[var(--synthetic-quartz)] stroke-[rgba(var(--volcanic-black-rgb),0.05)] [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />

            <main className="w-full flex-auto">{children}</main>

            <Footer />
          </motion.div>
        </motion.div>
      </MotionConfig>
    </RootLayoutContext.Provider>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()

  return (
    <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
  )
}

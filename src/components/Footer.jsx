import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Experience',
    links: [
      { title: 'Benepass', href: '/about#benepass' },
      { title: 'PFL', href: '/about#pfl' },
      { title: 'Marketo', href: '/about#marketo' },
      {
        title: (
          <>
            View all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/about',
      },
    ],
  },
  {
    title: 'Site',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Projects', href: '/work' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-[var(--volcanic-black)]">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-[var(--mushroom-grey-dark)]">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--coniferous-green)]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-[var(--volcanic-black)]">
        Get in touch
      </h2>
      <p className="mt-4 text-sm text-[var(--mushroom-grey-dark)]">
        Contact me to discuss how I can help solve your technical challenges.
      </p>
      <div className="mt-6">
        <Link
          href="mailto:adam@arglasser.com"
          className="font-display text-2xl font-bold text-[var(--coniferous-green)] hover:text-[var(--simulated-coral)] transition"
        >
          adam@arglasser.com
        </Link>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-[rgba(var(--volcanic-black-rgb),0.1)] pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-[var(--mushroom-grey-dark)]">
            © Adam Glasser {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

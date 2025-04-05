import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-[var(--volcanic-black)] px-8 py-20 sm:mx-0 sm:py-32 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-start">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium text-[var(--text-on-black)] mb-8">
                Let's discuss your project
              </h2>
              <p className="text-xl text-[var(--synthetic-quartz)] leading-relaxed max-w-lg">
                I'm currently available for freelance work and new opportunities. 
                If you have a project that needs some creative input, I'd love to hear about it.
              </p>
              
              <div className="mt-10">
                <Button href="/contact" invert>
                  Get in touch
                </Button>
              </div>
            </div>
            
            <div className="lg:justify-self-end lg:text-right">
              <Link 
                href="mailto:adam@arglasser.com" 
                className="inline-block group transition-all duration-300"
              >
                <span className="block font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--acrylic-blue)]">
                  adam@arglasser.com
                </span>
                <div className="mt-2 text-sm text-[var(--mushroom-grey)] group-hover:text-[var(--synthetic-quartz)]">
                  Click to send an email
                </div>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

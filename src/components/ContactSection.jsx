import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
                Let's discuss your project
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                I'm currently available for freelance work and new opportunities.
                If you have a project that needs some creative input, I'd love to hear about it.
              </p>
              <div className="mt-6">
                <Button href="/contact" invert>
                  Get in touch
                </Button>
              </div>
            </div>
            
            <Link 
              href="mailto:adam@arglasser.com" 
              className="mt-8 lg:mt-0 text-center lg:text-right group transition-all duration-300"
            >
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-white hover:text-neutral-200 transition-colors">
                adam@arglasser.com
              </span>
              <div className="mt-2 text-sm text-neutral-300 group-hover:text-neutral-200">
                Click to send an email
              </div>
            </Link>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

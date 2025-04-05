import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { Border } from '@/components/Border'

function ContactContent() {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-display text-4xl font-bold text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          adam@arglasser.com
        </h2>
        <Link
          href="mailto:adam@arglasser.com"
          className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-base font-semibold text-white transition hover:bg-neutral-800 mb-16"
        >
          Send me an email
        </Link>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Connect with me
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact',
  description: "Let's discuss your technical challenges. Get in touch to start a conversation.",
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's get in touch">
        <p>I'd love to hear about your project and how I can help.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ContactContent />
      </Container>
    </>
  )
}

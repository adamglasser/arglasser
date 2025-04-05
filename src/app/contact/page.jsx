import Link from 'next/link'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function ContactContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left column - Email */}
      <div className="flex flex-col justify-center">
        <Link
          href="mailto:adam@arglasser.com"
          className="font-display text-2xl font-bold text-neutral-950 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hover:text-neutral-800 transition-colors break-all sm:break-normal"
        >
          adam@arglasser.com
        </Link>
      </div>

      {/* Right column - Connect */}
      <div className="lg:border-l lg:border-neutral-200 lg:pl-16 flex flex-col justify-center">
        <h2 className="font-display text-3xl font-semibold text-neutral-950 mb-6">
          Connect with me
        </h2>
        <SocialMedia className="mb-8" />
        <p className="text-neutral-700">
          I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Contact',
  description: "Let's discuss your technical challenges. Get in touch to start a conversation.",
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's work together">
        <p>I'm available for new opportunities and would love to hear about your project.</p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <ContactContent />
      </Container>
    </>
  )
}

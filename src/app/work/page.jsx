import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import { loadCaseStudies } from '@/lib/mdx'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <div className="text-5xl mb-4 sm:mb-0 sm:mr-4">
                      {caseStudy.emoji || ''}
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-950">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      {caseStudy.category || caseStudy.date}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'My Work',
  description:
    'Showcasing my expertise in system architecture, API development, and enterprise integrations across cloud technologies.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="My Work"
        title="Technical solutions for complex business challenges."
      >
        <p>
          I specialize in architecting and implementing scalable systems that bridge modern and legacy technologies.
          My expertise spans from microservices and API development to cloud architecture and data integrations,
          with a focus on delivering solutions that drive measurable business outcomes.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Enterprise Client' }}
      >
        Adam's technical vision combined with his business acumen allows him to consistently deliver solutions that align perfectly with our strategic objectives.
      </Testimonial>

      <TechnicalSkills />

      <ContactSection />
    </>
  )
}

function TechnicalSkills() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Technical Skills & Technologies
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 pt-10">
          <div>
            <h3 className="font-semibold text-neutral-950">System Architecture</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>Microservices Architecture</li>
              <li>Serverless/Event-driven Design</li>
              <li>System Integration Patterns</li>
              <li>Scalable Cloud Architecture</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-950">Cloud & Infrastructure</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>AWS (Lambda, S3, DynamoDB, Step Functions)</li>
              <li>Azure Cloud Services</li>
              <li>CI/CD Pipeline Implementation</li>
              <li>Infrastructure as Code</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-950">Development & APIs</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>Python, TypeScript/JavaScript</li>
              <li>GraphQL & RESTful API Design</li>
              <li>SQL/NoSQL Database Design</li>
              <li>React, Node.js, NextJS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-950">Data & Integration</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>ETL Pipeline Development</li>
              <li>Data Validation & Transformation</li>
              <li>OAuth & API Security Implementation</li>
              <li>HRIS & CRM System Integration</li>
            </ul>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

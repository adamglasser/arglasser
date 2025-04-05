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

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Enterprise Client' }}
      >
        Adam's technical vision combined with his business acumen allows him to consistently deliver solutions that align perfectly with our strategic objectives.
      </Testimonial> */}

      <TechnicalSkills />

      <ContactSection />
    </>
  )
}

function TechnicalSkills() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-3xl font-semibold text-neutral-950 text-center mb-12">
          Technical Skills & Technologies
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-neutral-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-sm text-neutral-500">Expertise Areas</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 pt-10">
          <div className="group relative bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
            <h3 className="font-display text-xl font-medium text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">
              System Architecture
            </h3>
            <ul className="space-y-3 text-base text-neutral-600">
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors duration-300" />
                <span>Microservices Architecture</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors duration-300" />
                <span>Serverless/Event-driven Design</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors duration-300" />
                <span>System Integration Patterns</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors duration-300" />
                <span>Scalable Cloud Architecture</span>
              </li>
            </ul>
          </div>
          <div className="group relative bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
            <h3 className="font-display text-xl font-medium text-neutral-900 group-hover:text-green-600 transition-colors duration-300 mb-4">
              Cloud & Infrastructure
            </h3>
            <ul className="space-y-3 text-base text-neutral-600">
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-green-500 transition-colors duration-300" />
                <span>AWS (Lambda, S3, Glue)</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-green-500 transition-colors duration-300" />
                <span>Azure Cloud Services</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-green-500 transition-colors duration-300" />
                <span>CI/CD Pipeline Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-green-500 transition-colors duration-300" />
                <span>Infrastructure as Code</span>
              </li>
            </ul>
          </div>
          <div className="group relative bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
            <h3 className="font-display text-xl font-medium text-neutral-900 group-hover:text-purple-600 transition-colors duration-300 mb-4">
              Development & APIs
            </h3>
            <ul className="space-y-3 text-base text-neutral-600">
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-purple-500 transition-colors duration-300" />
                <span>Python, TypeScript/JavaScript</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-purple-500 transition-colors duration-300" />
                <span>GraphQL & RESTful API Design</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-purple-500 transition-colors duration-300" />
                <span>SQL/NoSQL Database Design</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-purple-500 transition-colors duration-300" />
                <span>React, Node.js, NextJS</span>
              </li>
            </ul>
          </div>
          <div className="group relative bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors duration-300">
            <h3 className="font-display text-xl font-medium text-neutral-900 group-hover:text-pink-600 transition-colors duration-300 mb-4">
              Data & Integration
            </h3>
            <ul className="space-y-3 text-base text-neutral-600">
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-pink-500 transition-colors duration-300" />
                <span>ETL Pipeline Development</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-pink-500 transition-colors duration-300" />
                <span>Data Validation & Transformation</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-pink-500 transition-colors duration-300" />
                <span>OAuth & API Security Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 group-hover:bg-pink-500 transition-colors duration-300" />
                <span>HRIS & CRM System Integration</span>
              </li>
            </ul>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

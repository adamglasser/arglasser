import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My approach"
        title="Solving complex challenges with technical excellence"
        invert
      >
        <p>
          My work is guided by a commitment to quality, innovation, and client success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Strategic Thinking" invert>
            I approach each challenge by understanding the bigger picture and designing solutions
            that align with long-term business goals and technical roadmaps.
          </GridListItem>
          <GridListItem title="Customer Focus" invert>
            I prioritize understanding client needs deeply, ensuring that technical solutions
            deliver real business value and address core problems effectively.
          </GridListItem>
          <GridListItem title="Technical Excellence" invert>
            I maintain high standards for code quality, system architecture, and performance,
            creating solutions that are robust, scalable, and maintainable.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Experience() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        <FadeInStagger>
          <Border as={FadeIn} />
          <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Professional Experience
              </h2>
            </FadeIn>
            <div className="lg:col-span-3">
              <div className="space-y-12">
                <FadeIn>
                  <div id="benepass" className="relative overflow-hidden rounded-3xl">
                    <div className="px-6 py-8">
                      <h3 className="font-display text-xl font-semibold text-neutral-950">
                        Benepass | Customer Engineer
                      </h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        October 2022 - Present
                      </p>
                      <div className="mt-6 text-base text-neutral-600">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Architected and led development of ETL framework using AWS microservices, Python, and PostgreSQL, reducing technical onboarding time by 50%</li>
                          <li>Designed and implemented strategic integrations with major HR platforms, enabling high-profile client onboarding</li>
                          <li>Manage complex data pipelines and custom integrations for enterprise clients</li>
                          <li>Serve as technical liaison between Business Development, Product Management, and Engineering teams</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div id="pfl" className="relative overflow-hidden rounded-3xl">
                    <div className="px-6 py-8">
                      <h3 className="font-display text-xl font-semibold text-neutral-950">
                        PFL | Senior Solutions Architect
                      </h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        August 2018 - October 2022
                      </p>
                      <div className="mt-6 text-base text-neutral-600">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Led development of a comprehensive TypeScript/Node.js product with GraphQL API</li>
                          <li>Architected automated integration solutions across various platforms</li>
                          <li>Developed automated processes for matching customer prospects using NoSQL databases</li>
                          <li>Created React/Node.js solutions deployed on Azure serverless infrastructure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div id="marketo" className="relative overflow-hidden rounded-3xl">
                    <div className="px-6 py-8">
                      <h3 className="font-display text-xl font-semibold text-neutral-950">
                        Marketo | Customer Care Specialist
                      </h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        August 2017 - July 2018
                      </p>
                      <div className="mt-6 text-base text-neutral-600">
                        <p>Increased customer satisfaction and retention across the largest customer segment, gaining foundational experience in marketing automation and customer support.</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Me',
  description:
    'Customer Engineer and Solutions Architect with expertise in data pipelines, API integrations, and technical solution design.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About me" title="Experience that delivers results">
        <p>
          Innovative Customer Engineer and Solutions Architect with a track record of designing
          and implementing impactful technology solutions across diverse industries.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I specialize in data pipelines, custom API integrations, and product development, from
            rapid prototyping to production-ready systems. My approach combines deep technical expertise
            with a strong business focus.
          </p>
          <p>
            Throughout my career at Benepass and PFL, I've developed a reputation for translating complex
            business needs into effective technical solutions and communicating value to stakeholders
            at all levels.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="7+" label="Years of engineering experience" />
          <StatListItem value="Full-Stack" label="Front-end, back-end & data expertise" />
          <StatListItem value="Data" label="ETL, pipelines & analytics expertise" />
        </StatList>
      </Container>

      <Values />

      <Experience />

      <ContactSection />
    </>
  )
}

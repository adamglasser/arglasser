import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { TechScroller } from '@/components/TechScroller'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

// Replace clients with skills/technologies
const technologies = [
  { name: 'Python', icon: '/tech-icons/Python.svg' },
  { name: 'TypeScript', icon: '/tech-icons/TypeScript.svg' },
  { name: 'React', icon: '/tech-icons/React.svg' },
  { name: 'Node.js', icon: '/tech-icons/Node.js.svg' },
  { name: 'Next.js', icon: '/tech-icons/Next.js.svg', darkIcon: true },
  { name: 'GraphQL', icon: '/tech-icons/GraphQL.svg' },
  { name: 'AWS', icon: '/tech-icons/AWS.svg' },
  { name: 'PostgreSQL', icon: '/tech-icons/PostgresSQL.svg' }
]

function Technologies() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Technologies I work with
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <div className="mt-12">
          <TechScroller technologies={technologies} />
        </div>
      </Container>
    </div>
  )
}

function Projects({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Featured Projects"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Here's a selection of my recent projects that showcase my engineering and
          technical solution design abilities.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Project</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Skills() {
  return (
    <>
      <SectionIntro
        eyebrow="Skills"
        title="Technical expertise to solve complex challenges"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          I specialize in developing data integrations, custom API solutions, and 
          designing scalable technical systems that solve real business problems.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Data Integration & ETL">
              Experienced in designing and implementing data pipelines and ETL processes 
              using AWS microservices, Python, and PostgreSQL.
            </ListItem>
            <ListItem title="API Development">
              Skilled at creating custom API integrations and solutions that connect 
              diverse systems and enhance interoperability.
            </ListItem>
            <ListItem title="Solution Architecture">
              Proven ability to architect technical solutions that address complex business 
              needs and scale effectively.
            </ListItem>
            <ListItem title="Technical Consultation">
              Expert at translating business requirements into effective technical solutions
              and communicating value to stakeholders.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Adam Glasser - Customer Engineer, Solutions Architect, and technology expert.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Customer Engineer & Solutions Architect
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I'm Adam Glasser, a technical professional specializing in creating impactful 
            data integrations, custom API solutions, and scalable technical systems that drive business results.
          </p>
        </FadeIn>
      </Container>

      <Technologies />

      <Projects caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Client', logo: logoPhobiaDark }}
      >
        Adam has an exceptional talent for understanding complex technical challenges and delivering 
        elegant solutions that exceed expectations.
      </Testimonial>

      <Skills />

      <ContactSection />
    </>
  )
}

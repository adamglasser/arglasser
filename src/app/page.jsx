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
import { GridPattern } from '@/components/GridPattern'
import clsx from 'clsx'
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
    <div className="mt-24 rounded-4xl bg-[var(--volcanic-black)] py-20">
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
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-[var(--volcanic-black)]/5 transition hover:bg-[var(--synthetic-quartz)] sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-[var(--volcanic-black)]">
                  <span
                    className="font-semibold"
                  >
                    {caseStudy.category || caseStudy.date}
                  </span>
                  <span className="text-[var(--mushroom-grey)]" aria-hidden="true">
                    /
                  </span>
                  <span>Project</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-[var(--coniferous-green)]">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-[var(--mushroom-grey-dark)]">
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

function PersonalStatement({ children, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-[var(--volcanic-black)] py-16 sm:py-28 md:py-32 overflow-hidden rounded-2xl border border-[var(--synthetic-quartz)]/10',
        className,
      )}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--volcanic-black)] to-[var(--coniferous-green)]/20 opacity-80" />
      
      {/* Updated grid pattern with reduced opacity */}
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-[rgba(var(--coniferous-green-rgb),0.05)] stroke-[rgba(var(--simulated-coral-rgb),0.1)] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"
        yOffset={-256}
      />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl relative">
            {/* Moved label to top with proper Simulated Coral color */}
            <figcaption className="mb-6 text-sm uppercase tracking-wider text-[var(--acrylic-blue)] font-semibold">
              My Philosophy
            </figcaption>
            
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-[var(--text-on-black)] sm:text-4xl">
              <p className={'before:content-["\\201C"] after:content-["\\201D"] sm:before:absolute sm:before:right-full'}>
                {children}
              </p>
            </blockquote>
            
            {/* Added subtle accent line using Acrylic Blue */}
            <div className="h-px w-24 mt-10 bg-[var(--acrylic-blue)] opacity-70" />
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}

export const metadata = {
  description:
    'Adam Glasser - Customer Engineer, Solutions Architect, and technology expert.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(1, 4)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-[var(--coniferous-green)] sm:text-7xl">
            Customer Engineer & Solutions Architect
          </h1>
          <p className="mt-6 text-xl text-[var(--volcanic-black)]">
            I'm Adam Glasser, a technical professional specializing in creating impactful 
            data integrations, custom API solutions, and scalable technical systems that drive business results.
          </p>
        </FadeIn>
      </Container>

      <Technologies />

      <Projects caseStudies={caseStudies} />

      <PersonalStatement className="mt-24 sm:mt-32 lg:mt-40">
        I believe in combining technical excellence with clear communication. My goal is to understand your business challenges
        first, then craft solutions that deliver measurable value while being maintainable and scalable for the future.
      </PersonalStatement>

      <Skills />

      <ContactSection />
    </>
  )
}

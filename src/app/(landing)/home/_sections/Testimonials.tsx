import Link from "next/link"

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

const dataTestimonials = [
  {
    name: "Megan Murray",
    title: "VP of Marketing, Forcura",
    image: "megan.jpg",
    quote: "SalesPlay X has been a valuable tool for aligning our sales and marketing efforts. The platform's messaging engine, custom document designs, and assistance with customer stories have positively impacted the customer experience. With SalesPlay X, we're reaching more customers and engaging them in a meaningful way."
  },
  {
    name: "Jenny Cleary",
    title: "Global Demand Generation, Basware",
    image: "jenny.jpg",
    quote: "Salesplay X has brought scale and pace to our ABM programme. This AI driven tool has enabled us to take personalized value stories to our key accounts, at pace, which was previously not possible! Our sales team are being equipped at the click of a button with account plans, latest news stories, in depth profiles of our target individuals and polished reports and slides, allowing them to focus on account strategies and selling.SalesPlay X has transformed the way our sales and marketing organisation target prospects and customers"
  },
  {
    name: "Dermot Walsh",
    title: "Chief Revenue Officer, OCUCO",
    image: "dermot.png",
    quote: "SalesPlay X has been instrumental in revolutionizing our outbound sales strategy at Ocuco. Their expertise in building an automated outreach system has significantly enhanced our efficiency and effectiveness in prospecting. Regular sessions with the SalesPlay X team keep our sales force focused and on track, ensuring that stay focused on outbound sales prospecting."
  }
]

interface ITestimonial {
  name: string
  title: string
  image: string
  quote: string
}

function CardTestimonial({ item: { name, title, image, quote } }: { item: ITestimonial }) {
  return (
    <figure className="border border-gray-200 rounded-xs">
      <div className="p-8">
        <figcaption className="mb-4 items-center">
          <div className="overflow-hidden rounded-full w-20 h-20 lg:w-24 lg:h-24 -mt-4 -ml-4 mb-4">
            <img src={`assets/images/testimonials/${image}`} className="object-cover w-full h-full" />
          </div>
          <div>
            <h4 className="font-bold font-roboto">{name}</h4>
            <span className="italic font-roboto">{title}</span>
          </div>
        </figcaption>
        <blockquote>
          <p className="text-sm font-normal">"{quote}"</p>
        </blockquote>
      </div>
    </figure>
  )
}

function HomeSectionTestimonials() {
  return (
    <Section className="pt-10">
      <header className="text-center max-w-[580px] mx-auto">
        <h2 className="text-center text-4xl font-semibold font-roboto">
          Our <span className="text-pink-700">customers</span> have a lot to say about <span className="hand-underline">adopting</span> SalesPlayX
        </h2>
      </header>

      <Container size="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12 pb-6">
          {dataTestimonials.map((testimonial => {
            return <CardTestimonial item={testimonial} />
          }))}
        </div>
        <Link href="/stories" className="text-pink-700 text-lg justify-end font-cabinSketch flex items-center space-x-2">
          <span>Read more stories</span>
          <svg className="text-pink-700 fill-pink-700" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4 0.5L16 6L6.4 11.5V6.95263H0V5.04737H6.4V0.5Z" />
          </svg>
        </Link>

      </Container>
    </Section >
  )
}

export default HomeSectionTestimonials

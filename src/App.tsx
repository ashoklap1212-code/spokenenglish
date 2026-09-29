import { AboutTrainer } from './components/AboutTrainer'
import { ClassTimings } from './components/ClassTimings'
import { Contact } from './components/Contact'
import { Courses } from './components/Courses'
import { EnquiryForm } from './components/EnquiryForm'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Introduction } from './components/Introduction'
import { Locations } from './components/Locations'
import { MobileCtaBar } from './components/MobileCtaBar'
import { Navbar } from './components/Navbar'
import { Testimonials } from './components/Testimonials'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WhyChooseUs } from './components/WhyChooseUs'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Introduction />
        <WhyChooseUs />
        <Courses />
        <ClassTimings />
        <AboutTrainer />
        {/* Phones skip these two: the same advice is already covered by the
            trainer, contact and footer blocks, and the page reads better
            without them. The wrapper is `display: none` below 768px, so no
            space, padding or margin is left behind. */}
        <div className="hidden md:block">
          <HowItWorks />
        </div>
        <Testimonials />
        <div className="hidden md:block">
          <Faq />
        </div>
        <Locations />
        <EnquiryForm />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </div>
  )
}

import { Building2, MapPin, Navigation } from 'lucide-react'
import { locations } from '../config/site'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Locations() {
  return (
    <Section
      id="locations"
      eyebrow="Where We Teach"
      title="Two Areas, One Method"
      description="The same 1-to-1 training, delivered in the areas our students travel from."
      descriptionMobile="The same 1-to-1 training in both areas."
    >
      <div className="grid grid-cols-1 gap-3.5 sm:hidden">
        {locations.map((location, index) => (
          <Reveal key={location.id} delay={index * 80} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-line bg-white p-4 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-ink-800">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                {location.isHeadOffice ? (
                  <span className="rounded-full bg-ink-900 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-white uppercase">
                    Main Centre
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3.5 text-[1.05rem] font-semibold">{location.name}</h3>

              <p className="mt-1.5 text-[0.9rem] leading-[1.55] text-ink-600">{location.address}</p>

              <p className="mt-2.5 flex items-start gap-2 text-[0.85rem] leading-[1.5] text-ink-500">
                <Building2 className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                {location.note}
              </p>

              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center gap-1.5 self-start rounded-[10px] border border-ink-200 px-4 text-[0.9rem] font-semibold text-ink-800 transition-colors active:bg-ink-50 hover:border-ink-900 hover:bg-ink-900 hover:text-white"
              >
                <Navigation className="size-3.5 shrink-0" aria-hidden="true" />
                Directions
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="hidden gap-6 sm:grid md:grid-cols-2">
        {locations.map((location, index) => (
          <Reveal key={location.id} delay={index * 80} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition duration-300 hover:shadow-card sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-ink-800 sm:size-11">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                {location.isHeadOffice ? (
                  <span className="rounded-full bg-ink-900 px-3 py-1 text-[0.78rem] font-semibold tracking-wide text-white uppercase">
                    Main Centre
                  </span>
                ) : null}
              </div>

              <h3 className="mt-5 text-lg font-semibold sm:mt-6 sm:text-xl">{location.name}</h3>

              <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-ink-600 sm:mt-3 sm:leading-relaxed">
                {location.address}
              </p>

              <p className="mt-3.5 flex items-start gap-2 text-[0.9rem] leading-[1.6] text-ink-500 sm:mt-4 sm:text-sm">
                <Building2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {location.note}
              </p>

              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-ink-200 px-5 text-[0.95rem] font-semibold text-ink-800 transition-colors active:bg-ink-50 hover:border-ink-900 hover:bg-ink-900 hover:text-white sm:mt-7 sm:h-11 sm:text-sm"
              >
                <Navigation className="size-4 shrink-0" aria-hidden="true" />
                Get Directions
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

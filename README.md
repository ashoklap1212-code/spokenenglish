# Krishna Academy - Spoken English Institute Website

Website for **Krishna Academy**, a 1-to-1 spoken English institute in
Avadi and Thirunindravur, Chennai. Every enquiry goes to **WhatsApp** or a
phone call - no sign-up, no forms to submit, no admin panel.

Built with React + TypeScript + Tailwind CSS (Vite).

---

## 1. How to change the institute details (most important)

Open **`src/config/site.ts`**. Everything the website shows about the institute
is in that one file.

| What to change                    | Where in `src/config/site.ts`          | Currently set to              |
| --------------------------------- | -------------------------------------- | ----------------------------- |
| Institute name                    | `instituteName`                        | `"Krishna Academy"`           |
| City / area                       | `location`                             | `"Avadi"`                     |
| **WhatsApp number**               | `whatsappNumber`                       | `"919790805779"`              |
| Phone number (display)            | `phoneNumber`                          | `"+91 97908 05779"`           |
| Phone number (tap-to-call)        | `phoneDigits`                          | `"919790805779"`              |
| Address                           | `address`                              | Kannigapuram, Avadi 600054    |
| One-line timings summary          | `classTimings`                         | `"Mon-Sat, 9:30 AM - 9:30 PM"`|
| Weekly schedule table             | `classSchedule`                        | Mon-Fri + Sat rows           |
| Branch list (Avadi, Thirunindravur) | `locations`                          | 2 entries                    |
| Three key features                | `keyFeatures`                          | 1-to-1, stage fear, grammar   |
| Google Maps embed link            | `googleMapsUrl`                        | Kannigapuram embed URL        |
| Directions link                   | `directionsUrl`                        | Maps directions URL           |
| Email                             | `email`                                | `""` (hidden)                 |
| Social links                      | `instagramUrl` / `facebookUrl` / `youtubeUrl` | `""` (hidden)          |
| Trainer name, qualification, years | `trainerConfig` (same file)            | still placeholders            |
| Trainer photo                     | `trainerConfig.photo`                  | `""` (placeholder shown)      |

Notes:

- Leave a field as `""` (empty) and that part is simply hidden.
- Anything in `[square brackets]` is a placeholder waiting for real information.
- Until `whatsappNumber` is filled in, WhatsApp buttons link to the Contact
  section instead of opening WhatsApp, so no visitor ever gets an error.

## 2. Changing the content

| Content              | File                             |
| -------------------- | -------------------------------- |
| Courses              | `src/components/Courses.tsx`     |
| Why choose us        | `src/components/WhyChooseUs.tsx` |
| Steps                | `src/components/HowItWorks.tsx`  |
| Testimonials         | `src/components/Testimonials.tsx` |
| FAQ questions        | `src/components/Faq.tsx`          |
| Class timings        | `src/components/ClassTimings.tsx`|
| Branches             | `src/components/Locations.tsx`   |
| Enquiry form options | `src/components/EnquiryForm.tsx` |
| WhatsApp messages    | `src/lib/whatsapp.ts`            |
| Colours and fonts    | `src/index.css` (`@theme` block) |
| About intro text     | `src/config/site.ts` (`aboutText`)|

## 3. SEO details

`index.html` holds the page title, meta description, keywords, geo tags and the
`EducationalOrganization` structured data, including opening hours. If you change
the name, phone or address, update the same values there.

## 4. Running the website on a computer

```bash
npm install      # first time only
npm run dev      # open the local address shown in the terminal
npm run build    # creates the final files in the "dist" folder
npm run preview  # preview the final build locally
npm run lint     # check the code
```

The `dist` folder is the website that gets uploaded to any web host
(Netlify, Vercel, GitHub Pages, or shared hosting).

## 5. Guidelines used on purpose

- No fake reviews, ratings, student numbers, awards or guarantees.
- No pricing - fees are shared on WhatsApp.
- Testimonial cards are placeholders until real feedback is available.
- No login, no payment, no dashboard.

## 6. Project structure

```
src/
  config/site.ts        <-- all institute details (edit this first)
  lib/whatsapp.ts       <-- WhatsApp messages and link builder
  lib/useReveal.ts      <-- gentle fade-up animation
  components/           <-- Navbar, Hero, Courses, Timings, Locations, FAQ, ...
  components/ui/        <-- shared Section, ActionButton, Reveal
index.html              <-- SEO tags
```

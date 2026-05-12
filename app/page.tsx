import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PromiseSection } from "@/components/sections/promise";

import { CoachStory } from "@/components/sections/coach";
import { Who } from "@/components/sections/who";
import { Programs } from "@/components/sections/programs";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  founder: {
    "@type": "Person",
    name: siteConfig.coach.fullName,
    jobTitle: siteConfig.coach.role,
  },
  serviceType: "1:1 Personal Training & Coaching",
  areaServed: ["Thailand", "Online worldwide"],
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.youtube,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <PromiseSection />
        <CoachStory />
        <Programs />
        <Who />
      </main>
      <Footer />
    </>
  );
}

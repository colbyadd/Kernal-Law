import { CinematicHero } from "./components/CinematicHero";
import Link from 'next/link';

export default function Home() {
  const practices = [
    { title: "Personal Injury", desc: "Justice for victims of negligence, accidents, and oil field injuries." },
    { title: "DUI & Traffic", desc: "Protecting your license and your record." },
    { title: "Drug Charges", desc: "Challenging search and seizure violations." },
    { title: "Violent Crimes", desc: "Defense against assault, battery, and manslaughter." },
  ];

  return (
    <main className="min-h-screen bg-iron-950">
      <CinematicHero />

      {/* Intro Section - Stark & Direct */}
      <section className="py-24 md:py-32 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 border-l border-accent-gold pl-6">
              "If I don't stand up for my clients and protect their constitutional rights, then everyone loses."
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-silver-400 leading-relaxed">
              <p>
                Whether you are facing criminal charges or recovering from a serious injury, you deserve an attorney who will fight for you. I believe that every client deserves the full protection of the law and a relentless advocate in their corner.
              </p>
              <p>
                For 25+ years, I have fought in the trenches of the Oklahoma justice system. From complex felonies to catastrophic injury claims, my sole focus is securing the best possible outcome for you and your family.
              </p>
            </div>
            <div className="mt-12">
              <Link href="/attorney" className="text-white border-b border-white pb-1 hover:text-silver-400 hover:border-silver-400 transition-colors uppercase tracking-widest text-sm">
                Read Full Bio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Minimalist Grid */}
      <section className="py-24 bg-iron-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h3 className="font-serif text-4xl text-white">Practice Areas</h3>
            <Link href="/practice" className="hidden md:block text-silver-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-silver-500/20 border border-silver-500/20">
            {[
              { title: "Personal Injury", desc: "Justice for victims of negligence, accidents, and oil field injuries.", href: "/practice/personal-injury" },
              { title: "DUI & Traffic", desc: "Protecting your license and your record.", href: "/practice/criminal-defense" },
              { title: "Drug Charges", desc: "Challenging search and seizure violations.", href: "/practice/criminal-defense" },
              { title: "Violent Crimes", desc: "Defense against assault, battery, and manslaughter.", href: "/practice/criminal-defense" },
            ].map((p, i) => (
              <Link key={i} href={p.href} className="bg-iron-900 p-8 hover:bg-iron-800 transition-colors group block">
                <h4 className="font-serif text-xl text-white mb-4 group-hover:text-silver-100">{p.title}</h4>
                <p className="text-silver-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="inline-flex items-center text-accent-gold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Learn More &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

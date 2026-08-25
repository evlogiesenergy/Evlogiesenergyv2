import { useState } from "react"
import {
  Menu, X, Leaf, Flame, TreePine, TrendingUp, Globe,
  ArrowRight, Heart, Users, Award, Zap
} from "lucide-react"

// ─── Utilities ────────────────────────────────────────────────────────────────
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

function GreenLabel({ children }: { children: string }) {
  return (
    <span className="text-[#377C1F] text-xs font-bold uppercase tracking-widest">
      {children}
    </span>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 bg-[#377C1F] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
        <Leaf className="w-5 h-5 text-white" />
      </div>
      <div className="leading-none">
        <div className={`font-black text-sm leading-tight ${light ? "text-white" : "text-[#0D0D0D]"}`}>
          Evlogies
        </div>
        <div className="text-[#377C1F] font-black text-sm leading-tight">Energy</div>
      </div>
    </div>
  )
}

// ─── 1. Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ["Home", "About", "Product", "Project", "Sustainability", "Investor", "Blog"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
        <Logo />

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map(l => (
            <li key={l}>
              <a href="#" className="text-[13px] font-semibold text-[#4D4D4D] hover:text-[#377C1F] transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden lg:block bg-[#377C1F] text-white text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-[#2d6518] transition-colors">
          Contact Us
        </button>

        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden p-1 text-[#0D0D0D]"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-5 flex flex-col gap-4 shadow-lg">
          {links.map(l => (
            <a key={l} href="#" className="text-sm font-semibold text-[#4D4D4D]">{l}</a>
          ))}
          <button className="bg-[#377C1F] text-white text-sm font-bold px-5 py-2.5 rounded-full w-fit mt-1">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  )
}

// ─── 2. Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-[#071409] overflow-hidden pt-16">
      {/* Background: right-side globe image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none">
        <img
          src={img("1451187580459-43490279c0fa", 1400, 1000)}
          alt="Earth from space"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient mask so text side stays dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071409] via-[#071409]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071409]/80 via-transparent to-[#071409]/30" />
      </div>

      {/* Overlapping corner photo on globe bottom-right */}
      <div className="absolute bottom-20 right-12 hidden lg:block z-10">
        <img
          src={img("1560250097-0b93528c311a", 320, 280)}
          alt="Evlogies Energy facility"
          className="w-56 h-48 object-cover rounded-2xl shadow-2xl border-4 border-white/10"
        />
        <div className="absolute -top-3 -left-3 bg-[#377C1F] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          Est. 2019
        </div>
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-xl xl:max-w-2xl py-24">
          <GreenLabel>Clean Energy Solution for a Renewable Future</GreenLabel>
          <h1 className="mt-5 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] uppercase tracking-tight">
            POWERING<br />
            INDONESIA'S<br />
            <span className="text-white/90">CLEAN ENERGY</span><br />
            TRANSITION
          </h1>
          <p className="mt-7 text-white/65 text-base leading-relaxed max-w-md">
            We've invested in Biomass, Solar, Wind and Biodiesel renewable energies, and are working
            towards a cleaner, more reliable energy future for Indonesia and the world.
          </p>
          <button className="mt-9 bg-[#377C1F] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#2d6518] transition-all hover:shadow-lg hover:shadow-[#377C1F]/25 text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── 3. Why We Began ──────────────────────────────────────────────────────────
function WhyWeBegan() {
  const features = [
    {
      icon: <Flame className="w-5 h-5 text-[#377C1F]" />,
      title: "Energy Insecurity",
      desc: "Reliance on imported fuel exposes industries and communities to volatile pricing and supply disruptions, threatening Indonesia's economic stability."
    },
    {
      icon: <TreePine className="w-5 h-5 text-[#377C1F]" />,
      title: "Environmental Cost",
      desc: "Burning fossil fuels has led to significant air pollution and environmental damage to Indonesia's natural resources and biodiversity."
    }
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
        {/* Left: Photo */}
        <div className="relative">
          <img
            src={img("1504328345606-18bbc8c9d7d1", 800, 640)}
            alt="Offshore oil platform"
            className="w-full h-[440px] lg:h-[520px] object-cover rounded-2xl"
          />
          <div className="absolute top-5 left-5 bg-[#377C1F] text-white text-xs font-bold px-3 py-1.5 rounded-full">
            Our Story
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <GreenLabel>Why We Began</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D] leading-tight">
            Why We Began?
          </h2>
          <h3 className="mt-3 text-lg lg:text-xl font-bold text-[#0D0D0D]">
            Breaking Fossil Fuel Dependency
          </h3>
          <p className="mt-4 text-[#4D4D4D] leading-relaxed text-sm lg:text-base">
            For decades, Indonesia's growth has depended on imported fuel — and this means jobs,
            power stations, factories, and heavy industries have all been at risk when import costs
            rise or supply chains break down.
          </p>

          <div className="mt-8 space-y-7">
            {features.map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#377C1F]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <div className="font-black text-[#0D0D0D] text-sm lg:text-base">{f.title}</div>
                  <div className="text-[#4D4D4D] text-sm mt-1.5 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 4. Founder's Journey ─────────────────────────────────────────────────────
function FoundersJourney() {
  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
        {/* Left: Text content */}
        <div>
          <GreenLabel>Origin Story</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D] leading-tight">
            Our Founder's Journey
          </h2>
          <h3 className="mt-3 text-lg font-bold text-[#0D0D0D]">
            We Built This Before and We're Doing It Again
          </h3>
          <p className="mt-4 text-[#4D4D4D] text-sm lg:text-base leading-relaxed">
            In 2012, our CEO Ruben Frangky Darwin Gratimusgun built a 1,500 m² warehouse in Borneo,
            reaching a monthly capacity of 5,500 MT. He sold that company and moved across Jakarta,
            China, and Europe, building partnerships and expertise that led to today.
          </p>
          <p className="mt-3 text-[#4D4D4D] text-sm lg:text-base leading-relaxed">
            Those years abroad taught him the global demand for clean energy — and that Indonesia was
            perfectly positioned to supply it.
          </p>

          <div className="mt-6 space-y-2.5">
            {["1,600 × 3,500 MT Monthly Capacity target", "Offices in Kaltim and Jakarta"].map(item => (
              <div key={item} className="flex items-center gap-2.5 text-[#4D4D4D] text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#377C1F] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Green stats box */}
          <div className="mt-8 bg-[#377C1F] text-white rounded-2xl p-6 flex gap-8 w-fit">
            <div>
              <div className="text-4xl font-black leading-none">2019</div>
              <div className="text-white/70 text-xs mt-2 font-medium uppercase tracking-wide">Year Founded</div>
            </div>
            <div className="w-px bg-white/25" />
            <div>
              <div className="text-4xl font-black leading-none">5+</div>
              <div className="text-white/70 text-xs mt-2 font-medium uppercase tracking-wide">States, Indonesia</div>
            </div>
          </div>
        </div>

        {/* Right: Two offset photos */}
        <div className="relative h-[480px] lg:h-[520px]">
          <img
            src={img("1560250097-0b93528c311a", 480, 420)}
            alt="Ruben Frangky Darwin at facility"
            className="absolute top-0 right-0 w-[60%] h-[55%] object-cover object-top rounded-2xl shadow-xl z-10"
          />
          <img
            src={img("1507003211169-0a1dd7228f2d", 420, 420)}
            alt="Founder in Borneo"
            className="absolute bottom-0 left-0 w-[60%] h-[55%] object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-32 h-32 bg-[#377C1F]/15 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

// ─── 5. Road Ahead ────────────────────────────────────────────────────────────
function RoadAhead() {
  const features = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#377C1F]" />,
      title: "Bigger Ambition",
      desc: "Plans to expand to Brawali, East Kalimantan, and Samarinda, with a clear pathway toward global export partnerships."
    },
    {
      icon: <Globe className="w-5 h-5 text-[#377C1F]" />,
      title: "A Broader Platform",
      desc: "Wood pellets, biomass recycling, solar, and wind power — multiple clean energy verticals under one unified company."
    }
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
        {/* Left: Photo with floating badges */}
        <div className="relative order-2 lg:order-1">
          <img
            src={img("1611273426858-450d8e3c9fce", 800, 620)}
            alt="Clean energy facility with silos"
            className="w-full h-[440px] lg:h-[520px] object-cover rounded-2xl"
          />
          {/* Floating stat: top-left */}
          <div className="absolute top-6 left-6 bg-white rounded-xl px-4 py-3 shadow-xl">
            <div className="text-2xl font-black text-[#377C1F] leading-none">100K+</div>
            <div className="text-[10px] font-semibold text-[#4D4D4D] mt-1 uppercase tracking-wide">MT / Year Capacity</div>
          </div>
          {/* Floating stat: bottom-right */}
          <div className="absolute bottom-6 right-6 bg-white rounded-xl px-4 py-3 shadow-xl">
            <div className="text-2xl font-black text-[#377C1F] leading-none">5</div>
            <div className="text-[10px] font-semibold text-[#4D4D4D] mt-1 uppercase tracking-wide">Business Verticals</div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <GreenLabel>The Road Ahead</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D] leading-tight">
            A New Chapter Begins
          </h2>
          <p className="mt-4 text-[#4D4D4D] text-sm lg:text-base leading-relaxed">
            A bigger story, a stronger team, and new verticals — all built on the same foundation
            of trust and tangible results that made the first company a success across Borneo.
          </p>

          <div className="mt-9 space-y-7">
            {features.map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#377C1F]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <div className="font-black text-[#0D0D0D] text-sm lg:text-base">{f.title}</div>
                  <div className="text-[#4D4D4D] text-sm mt-1.5 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 6. About Company ─────────────────────────────────────────────────────────
function StatRing({ pct, label, sub }: { pct: number; label: string; sub: string }) {
  const r = 34
  const circ = 2 * Math.PI * r
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-20 h-20 flex-shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#E5E7EB" strokeWidth="6" />
          <circle
            cx="40" cy="40" r={r}
            fill="none"
            stroke="#377C1F"
            strokeWidth="6"
            strokeDasharray={`${circ * pct} ${circ}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[11px] font-black text-[#377C1F]">{Math.round(pct * 100)}%</span>
        </div>
      </div>
      <div>
        <div className="font-black text-[#0D0D0D] text-sm">{label}</div>
        <div className="text-[#4D4D4D] text-xs mt-1 leading-relaxed">{sub}</div>
      </div>
    </div>
  )
}

function AboutCompany() {
  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <GreenLabel>Who We Are</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D]">
            About Our Company
          </h2>
          <p className="mt-2 text-lg lg:text-xl font-bold text-[#0D0D0D]">
            Indonesia's Emerging Clean Energy Leader
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Overlapping photo collage */}
          <div className="relative h-[500px]">
            <img
              src={img("1466611653911-95081537e5b7", 600, 400)}
              alt="Wind turbines Indonesia"
              className="absolute top-0 left-0 w-[78%] h-[58%] object-cover rounded-2xl shadow-md"
            />
            <img
              src={img("1509391366360-2e959784a276", 500, 360)}
              alt="Solar panel farm"
              className="absolute bottom-0 right-0 w-[62%] h-[50%] object-cover rounded-2xl shadow-lg"
            />
            <img
              src={img("1473341304170-971dccb5ac1e", 380, 320)}
              alt="Biomass wood pellets"
              className="absolute bottom-12 left-6 w-[42%] h-[42%] object-cover rounded-2xl shadow-xl z-10 border-4 border-[#F5F5F5]"
            />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[#4D4D4D] leading-relaxed text-sm lg:text-base">
              PT Evlogies Energy Indonesia is a Jakarta-based clean energy company delivering biomass
              wood pellets, solar power, wind energy, and biodiesel. Our operations span three core
              pillars: global-scale biomass manufacturing in Sepaku, East Kalimantan; direct solar
              and wind project deployment; and a growing biodiesel distribution network.
            </p>
            <p className="mt-4 text-[#4D4D4D] leading-relaxed text-sm lg:text-base">
              We partner with governments, utilities, and industrial clients across Southeast Asia
              to accelerate the shift from fossil fuels to renewable energy.
            </p>

            <div className="mt-10 space-y-6">
              <StatRing pct={0.40} label="Carbon Reduction" sub="vs conventional fossil fuel alternatives" />
              <StatRing pct={0.75} label="Annual Capacity" sub="100,000 MT / year current production" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 7. Products ──────────────────────────────────────────────────────────────
const products = [
  {
    title: "Carbon Reduction",
    img: "1448375240586-882707db888b",
    desc: "Premium carbon reduction solutions via sustainable forest management and clean energy integration across Indonesia."
  },
  {
    title: "Solar Power",
    img: "1509391366360-2e959784a276",
    desc: "Converting solar radiation into reliable electricity for industrial and community power needs nationwide."
  },
  {
    title: "Wind Power",
    img: "1466611653911-95081537e5b7",
    desc: "Harnessing Indonesia's coastal and highland winds to deliver clean, cost-effective electric power."
  },
  {
    title: "Biomass Electricity",
    img: "1473341304170-971dccb5ac1e",
    desc: "Agricultural residue and wood pellets converted into consistent, reliable base-load electricity supply."
  },
  {
    title: "Biodiesel",
    img: "1416879595882-3373a0480b5b",
    desc: "Locally sourced palm-based biodiesel reducing transport emissions and strengthening energy independence."
  },
  {
    title: "Mining (Nickel, Coal)",
    img: "1578496479531-32e296d5b6cc",
    desc: "Responsible mineral extraction with rigorous environmental standards and community benefit programs."
  }
]

function Products() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <GreenLabel>Our Products</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D]">Our Products</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={img(p.img, 700, 420)}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-black text-[#0D0D0D] text-lg">{p.title}</h3>
                <p className="mt-2 text-[#4D4D4D] text-sm leading-relaxed line-clamp-3">{p.desc}</p>
                <button className="mt-4 text-[#377C1F] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all duration-200">
                  Read More <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 8. Team ──────────────────────────────────────────────────────────────────
const team = [
  { name: "Ruben Frangky Darwin Gratimusgun", role: "CEO & Founder", img: "1560250097-0b93528c311a" },
  { name: "Dr. M. Yusuf Firmansyah", role: "Chief Technology Officer", img: "1472099645785-5658abf4ff4e" },
  { name: "Oguttamus Anggur Gultom", role: "Head of Operations", img: "1500648767791-00dcc994a43e" },
  { name: "Dr. Joko Armando, S.T.", role: "Chief Sustainability Officer", img: "1519085360753-af0119f7cbe7" }
]

function Team() {
  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <GreenLabel>Leadership</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D]">Our Team</h2>
          <p className="mt-3 text-[#4D4D4D] text-base">
            Experienced leaders driving Indonesia's energy transition
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(m => (
            <div key={m.name} className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
              <div className="overflow-hidden h-72">
                <img
                  src={img(m.img, 480, 520)}
                  alt={m.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="font-black text-[#0D0D0D] text-sm leading-tight">{m.name}</div>
                <div className="text-[#377C1F] text-xs font-bold mt-1.5 uppercase tracking-wide">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 9. Sepaku Facility ───────────────────────────────────────────────────────
const processSteps = [
  { step: 1, title: "Raw Materials", desc: "Sourcing timber residue and agricultural biomass from certified suppliers." },
  { step: 2, title: "Drying Fuel", desc: "Industrial rotary dryers reduce moisture content to below 10% for pelletizing." },
  { step: 3, title: "Quality Control", desc: "ISO-certified lab testing ensures every batch meets international standards." },
  { step: 4, title: "Shipping", desc: "Bulk cargo loading at Sepaku port for direct export to Asia and Europe." }
]

function SepakuFacility() {
  return (
    <section className="bg-[#0A1A0E] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Top: Asymmetric grid + text */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start mb-16">
          {/* Asymmetric 4-image grid */}
          <div className="grid grid-cols-2 gap-3 h-[420px] lg:h-[500px]">
            {/* Left tall */}
            <div className="row-span-2">
              <img
                src={img("1611273426858-450d8e3c9fce", 440, 700)}
                alt="Sepaku manufacturing facility"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Right top */}
            <img
              src={img("1473341304170-971dccb5ac1e", 440, 320)}
              alt="Wood biomass materials"
              className="w-full h-[48%] object-cover rounded-2xl"
            />
            {/* Right bottom */}
            <img
              src={img("1504328345606-18bbc8c9d7d1", 440, 320)}
              alt="Industrial processing"
              className="w-full h-[48%] object-cover rounded-2xl"
            />
          </div>

          {/* Text */}
          <div className="text-white lg:pt-6">
            <GreenLabel>Our Facility</GreenLabel>
            <h2 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
              The Sepaku Manufacturing Facility
            </h2>
            <p className="mt-6 text-white/65 leading-relaxed text-sm lg:text-base">
              Our flagship facility in Sepaku, East Kalimantan, combines world-class manufacturing
              infrastructure with a rigorous environmental management system. Every process step —
              from material intake to export — is tracked for quality and sustainability compliance.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed text-sm lg:text-base">
              With over 50,000 m² of operational capacity, our pelletizing lines, rotary dryers,
              and automated quality labs ensure we meet the tightest international specifications
              for biomass fuel.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <div className="text-3xl font-black text-[#377C1F]">50K+</div>
                <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">Sq. Meters</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-black text-[#377C1F]">ISO</div>
                <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">Certified</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-black text-[#377C1F]">24/7</div>
                <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">Operations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map(s => (
            <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
              <div className="w-10 h-10 bg-[#377C1F] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-black text-sm">{s.step}</span>
              </div>
              <div className="text-white font-black text-sm mb-2">{s.title}</div>
              <div className="text-white/50 text-xs leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 10. Impact ───────────────────────────────────────────────────────────────
const impacts = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Our Impact",
    desc: "Committed to People, Planet, and Progress across every operation."
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: "Environmental Stewardship",
    desc: "Reducing biomass waste and promoting a circular economy across supply chains."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Investment",
    desc: "Creating direct and indirect employment in Kalimantan and beyond."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Contribution",
    desc: "Supplying clean fuel to millions of homes across Asia and Europe."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Operational Excellence",
    desc: "ISO-certified operations across 50,000+ m² of world-class infrastructure."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Continuous Innovation",
    desc: "Investing in R&D, process automation, and next-generation clean technology."
  }
]

function Impact() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <GreenLabel>Making a Difference</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D]">Our Impact</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impacts.map(item => (
            <div key={item.title} className="bg-[#F5F5F5] rounded-2xl p-7 hover:shadow-sm transition-shadow group">
              <div className="w-12 h-12 bg-[#377C1F]/10 rounded-full flex items-center justify-center text-[#377C1F] mb-5 group-hover:bg-[#377C1F] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-black text-[#0D0D0D] text-base">{item.title}</h3>
              <p className="mt-2 text-[#4D4D4D] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 11. Report Banner ────────────────────────────────────────────────────────
function ReportBanner() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-[#377C1F] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Free Download</span>
          <h2 className="mt-3 text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-tight">
            Explore Indonesia's Renewable Energy Landscape
          </h2>
          <p className="mt-4 text-white/75 text-sm lg:text-base leading-relaxed">
            Download our flagship report on the biomass, solar, and wind opportunities shaping
            Indonesia's clean energy independence. Available at no cost.
          </p>
          <div className="mt-7 flex gap-3 max-w-md">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/55 text-sm focus:outline-none focus:bg-white/25 min-w-0"
            />
            <button className="bg-white text-[#377C1F] font-black px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0">
              Download
            </button>
          </div>
        </div>

        {/* Right: Report mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={img("1554224155-6726b3ff858f", 600, 440)}
              alt="Evlogies Energy Annual Report"
              className="w-full max-w-sm h-64 lg:h-72 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#0A1A0E] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              Indonesia Energy Report 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 12. Testimonial ──────────────────────────────────────────────────────────
function Testimonial() {
  return (
    <section className="bg-[#0A1A0E] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <div className="text-[#377C1F] text-8xl font-black leading-none select-none mb-6">"</div>
        <p className="text-white text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed">
          Every pellet produced in Sepaku is a step toward an Indonesia
          that no longer depends on imported fuel.
        </p>
        <div className="mt-10">
          <div className="w-16 h-0.5 bg-[#377C1F] mx-auto mb-6" />
          <div className="text-white font-black text-base">Ruben Frangky Darwin Gratimusgun</div>
          <div className="text-white/45 text-sm mt-1.5">CEO — Evlogies Energy Indonesia</div>
        </div>
      </div>
    </section>
  )
}

// ─── 13. Blog ─────────────────────────────────────────────────────────────────
const posts = [
  {
    cat: "Industry",
    date: "June 5, 2025",
    title: "Indonesia's Growing Wood Pellet Export Market",
    desc: "A deep look at how Indonesia's biomass sector is becoming a major source of clean energy exports to Japan and South Korea.",
    img: "1473341304170-971dccb5ac1e"
  },
  {
    cat: "Policy",
    date: "May 18, 2025",
    title: "Indonesia's Path to a Renewable Energy Future",
    desc: "How new government policies and foreign investment mandates are shaping the nation's shift toward solar and wind power.",
    img: "1509391366360-2e959784a276"
  },
  {
    cat: "Innovation",
    date: "April 30, 2025",
    title: "Reducing Emissions Through Biodiesel Blending",
    desc: "A closer look at how regulatory blending mandates are transforming Indonesia's logistics and transport carbon footprint.",
    img: "1519003300449-424ad0405076"
  }
]

function Blog() {
  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <GreenLabel>Latest Updates</GreenLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl xl:text-5xl font-black text-[#0D0D0D]">Our Blog</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <div key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="overflow-hidden h-52">
                <img
                  src={img(p.img, 700, 420)}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#377C1F]/10 text-[#377C1F] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    {p.cat}
                  </span>
                  <span className="text-[#4D4D4D] text-xs">{p.date}</span>
                </div>
                <h3 className="font-black text-[#0D0D0D] text-base leading-snug">{p.title}</h3>
                <p className="mt-2 text-[#4D4D4D] text-sm leading-relaxed line-clamp-2">{p.desc}</p>
                <button className="mt-4 text-[#377C1F] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all duration-200">
                  Read More <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#377C1F] text-[#377C1F] font-black px-10 py-3.5 rounded-full hover:bg-[#377C1F] hover:text-white transition-all duration-200 text-sm">
            Explore More
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── 14. Consultation ─────────────────────────────────────────────────────────
function Consultation() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-[#0D0D0D] py-16 lg:py-20">
      <div className="max-w-2xl mx-auto px-5 lg:px-8 text-center">
        <GreenLabel>Get In Touch</GreenLabel>
        <h2 className="mt-4 text-2xl lg:text-3xl xl:text-4xl font-black text-white">
          Schedule Consultation
        </h2>
        <p className="mt-3 text-white/50 text-sm leading-relaxed">
          Ready to explore how Evlogies Energy can power your clean energy transition?
          Reach out and our team will respond within 24 hours.
        </p>
        <div className="mt-8 flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-full bg-white/8 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:bg-white/12 min-w-0"
          />
          <button className="bg-[#377C1F] text-white font-black px-7 py-3 rounded-full text-sm hover:bg-[#2d6518] transition-colors flex-shrink-0">
            Send
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── 15. Footer ───────────────────────────────────────────────────────────────
const footerLinks = [
  {
    title: "Company",
    links: ["About", "Our Team", "Partners", "Investor Relations", "News"]
  },
  {
    title: "Products",
    links: ["Carbon Reduction", "Solar Power", "Wind Power", "Biomass", "Biodiesel", "Mining"]
  },
  {
    title: "Resources",
    links: ["Blog", "Annual Reports", "Sustainability", "FAQ", "Contact Us"]
  }
]

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 text-white/45 text-sm leading-relaxed max-w-xs">
              Clean Energy Solution for a Renewable Future. Indonesia's leading biomass, solar,
              wind, and biodiesel energy company.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-7">
              {[
                { label: "f", title: "Facebook" },
                { label: "in", title: "LinkedIn" },
                { label: "ig", title: "Instagram" }
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 border border-white/15 rounded-full flex items-center justify-center text-white/40 text-xs font-bold hover:border-[#377C1F] hover:text-[#377C1F] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            {/* Contact */}
            <div className="mt-6 space-y-1.5">
              <div className="text-white/45 text-xs">hello@evlogiesenergy.com</div>
              <div className="text-white/45 text-xs">+62 21 1234 5678</div>
              <div className="text-white/45 text-xs">Jakarta, Indonesia</div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(col => (
            <div key={col.title}>
              <div className="text-white font-black text-sm mb-5">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-white/45 text-sm hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © 2025 PT Evlogies Energy Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
              <a key={l} href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}>
      <Navbar />
      <Hero />
      <WhyWeBegan />
      <FoundersJourney />
      <RoadAhead />
      <AboutCompany />
      <Products />
      <Team />
      <SepakuFacility />
      <Impact />
      <ReportBanner />
      <Testimonial />
      <Blog />
      <Consultation />
      <Footer />
    </div>
  )
}

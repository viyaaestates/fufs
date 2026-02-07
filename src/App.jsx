/**
 * Title: Viyaa Architecture & Real Estate Website
 * filepath: viyaa_website.jsx
 * description: A premium, immersive React website inspired by Solém, featuring smooth scroll animations, interactive hotspots, and architectural minimalism.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MapPin, Phone, Mail, Clock, Plus } from 'lucide-react';

// --- Data & Content Configuration ---

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Projects', href: '#projects' },
  { name: 'The Viyaa Edge', href: '#edge' },
  { name: 'Services', href: '#services' },
  { name: 'Partner With Us', href: '#partner' },
  { name: 'Enquire Now', href: '#contact' },
];

const SERVICES = [
  {
    id: 1,
    title: 'Project Management Consultancy (PMC)',
    subtitle: 'BUILD HASSLEFREE',
    desc: 'End-to-end oversight to ensure projects are delivered on time, within budget, and to exacting standards. We manage consultants, contractors, timelines, and quality—so every detail aligns with the original vision.',
    image: '/pictures/seq1.jpeg',
  },
  {
    id: 2,
    title: 'Architectural Design',
    subtitle: 'FORMED WITH PRECISION',
    desc: 'Responsive architectural design that balances aesthetics, functionality, and local sensibilities. Each home is thoughtfully planned to enhance light, airflow, privacy, and a strong sense of place.',
    image: '/pictures/seq2.jpeg',
  },
  {
    id: 3,
    title: 'Interior Design',
    subtitle: 'COMPOSED FOR STILLNESS',
    desc: 'Refined interior solutions that elevate everyday living. From spatial planning to material selection and finishes, our interiors are designed to feel intuitive, timeless, and deeply personal.',
    image: '/pictures/seq3.jpeg',
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Viyaa Shantam",
    location: "Goa",
    year: "2025",
    image: "/pictures/seq4.jpeg",
    specs: "4 Beds • 6 Baths • 450m²"
  },
  {
    id: 2,
    title: "Dune Residence",
    location: "Desert Ridge, Arizona",
    year: "2023",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop",
    specs: "3 Beds • 4 Baths • 320m²"
  },
  {
    id: 3,
    title: "The Glass Pavilion",
    location: "Beverly Hills, CA",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=1000&auto=format&fit=crop",
    specs: "5 Beds • 7 Baths • 890m²"
  }
];

// --- Quote Position Configuration (Edit these values to adjust quote positions) ---
const QUOTE_POSITIONS = {
  // Top-left quote position (negative values move it outside the card)
  topLeft: {
    top: '-1.75rem',      // -7 in Tailwind (adjust as needed, e.g., '-2rem', '-1.5rem')
    left: '-1.75rem',     // -7 in Tailwind
    topMobile: '-1.75rem',
    leftMobile: '-1.75rem',
  },
  // Bottom-right quote position
  bottomRight: {
    bottom: '-0.75rem',   // -3 in Tailwind (adjust as needed)
    right: '-0.75rem',    // -3 in Tailwind
    bottomMobile: '-0.75rem',
    rightMobile: '-0.75rem',
  },
  // Quote size
  size: {
    mobile: '2.5rem',     // w-10 h-10 (40px)
    desktop: '3.5rem',    // w-14 h-14 (56px)
  }
};

// --- Animation Variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Components ---

const SectionLabel = ({ text }) => (
  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-4 block">
    {text}
  </span>
);

const Hotspot = ({ top, left, title, detail }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute z-20 group cursor-pointer"
      style={{ top: `${top}%`, left: `${left}%` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-3 h-3 md:w-4 md:h-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-white border border-stone-400"></span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 w-48 md:w-64 bg-white/95 backdrop-blur-md p-4 shadow-2xl rounded-sm border border-stone-100 pointer-events-none"
          >
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">{title}</p>
            <p className="text-xs text-stone-800 leading-relaxed">{detail}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-stone-50 text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-stone-200/50 rounded-full transition-colors">
              <Menu className={`w-5 h-5 ${isScrolled ? 'text-stone-800' : 'text-white'}`} />
            </button>
            <div className="flex items-center relative">
              <img  
                src={isScrolled ? "/pictures/viyablacknew.png" : "/pictures/viyalogonew1.png"}
                alt="Viyaa" 
                className="h-16 md:h-20 w-auto object-contain -my-4 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium tracking-widest hover:opacity-60 transition-opacity ${isScrolled ? 'text-stone-800' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            
            <button className={`text-xs font-bold px-5 py-2 rounded-full border transition-all ${isScrolled ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white' : 'border-white text-white hover:bg-white hover:text-stone-900'}`}>
              LET'S TALK
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-stone-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-stone-100 flex flex-col justify-center items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light text-stone-800">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-stone-900">
        {/* Background Video */}
        <div className="absolute inset-0">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/viya.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-transparent to-stone-900/40"></div>
        </div>


        {/* Hero Footer Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col md:flex-row justify-between items-end text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md mb-6 md:mb-0"
          >
            <p className="text-me font-semibold leading-relaxed opacity-90 ">
              <span className="whitespace-nowrap text-me">Spaces envisioned with refined aesthetics and intelligent design, crafted to elevate everyday happiness.</span> <br className="hidden md:block" />
              Not built to impress — built to endure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3 text-xs tracking-widest font-bold cursor-pointer hover:opacity-70 transition-opacity"
          >
            SCROLL DOWN
            <ArrowRight className="w-4 h-4 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left Col */}
          <div className="md:col-span-4">
            <SectionLabel text="About Us" />
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-3xl md:text-5xl font-light leading-tight mb-8"
            >
              We create <em className="font-serif">atmospheres</em>, not just buildings.
            </motion.h2>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="w-24 h-24 rounded-full border border-stone-300 flex items-center justify-center p-4 text-center text-[10px] uppercase tracking-widest leading-tight text-stone-500"
            >
              Est. 2010<br/>Group
            </motion.div>
          </div>

          {/* Right Col */}
          <div className="md:col-span-8 flex flex-col md:flex-row gap-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="flex-1"
            >
              <p className=" text-stone-600 leading-relaxed mb-6 font-serif text-justify">
                Viyaa Estates is the real estate vertical of AJDA. Established in 2010, AJDA (Ankita Jain Design Associates) began as a boutique architectural and interior design consultancy, drawing its name from its founder, Ankita Jain Das.

              </p>
              <p className=" text-stone-600 leading-relaxed mb-6 font-serif text-justify">
                In 2025, with Abhishek Das joining as a partner, AJDA expanded into real estate development, leading to the creation of Viyaa Estates and the launch of its first project in Goa—Viyaa Shantam.

              </p>
             <p className=" text-stone-600 leading-relaxed font-serif text-justify">
  The name Viyaa signifies a connection between{" "}
  <span className="font-semibold italic text-stone-800">nature</span>,{" "}
  <span className="font-semibold italic text-stone-800">space</span>, and{" "}
  <span className="font-semibold italic text-stone-800">people</span>
  —a philosophy that guides our work as we craft spaces through thoughtful, aesthetic, and intelligent design.
</p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="w-full md:w-1/3"
            >
              <div className="relative aspect-[3/4] overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" 
                  alt="Villa Detail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] text-white font-bold uppercase tracking-widest">The Solana Villa</p>
                  <p className="text-[10px] text-white/70">©2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* --- Services Section (Dark Mode) --- */}
      <section id="services" className="bg-stone-900 text-stone-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 border-b border-stone-800 pb-8">
            <div className="max-w-xl">
              <SectionLabel text=" Our Services" />
              <h2 className="text-3xl md:text-5xl font-light leading-tight">
                Timeless Services. <span className="font-serif italic text-stone-400">Singular Vision.</span>
              </h2>
            </div>
            <p className="text-stone-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
              We understand that some owners prefer to build their own homes. For such clients, we offer additional services that ensure complete autonomy, flexibility, and peace of mind—without the usual complexities.
            </p>
          </div>

          {/* Service List */}
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Text Content */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-px w-12 bg-stone-700"></span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-500">{service.subtitle}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-4">{service.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6 text-justify">{service.desc}</p>
                  <button className="text-xs font-bold tracking-widest flex items-center gap-2 hover:text-white text-stone-400 transition-colors group">
                     
                    {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                  </button>
                </div>

                {/* Image Content */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[16/9] overflow-hidden group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* --- Projects Grid --- */}
      <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <SectionLabel text="Featured Projects" />
            <h2 className="text-3xl md:text-5xl font-light">Selected Works</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest">
                  {project.year}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1 group-hover:text-stone-500 transition-colors">{project.title}</h3>
              <div className="flex justify-between items-center text-xs text-stone-500 uppercase tracking-wider">
                <span>{project.location}</span>
                <span>{project.specs}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- The Viyaa Edge / Pillars --- */}
      <section id="edge" className="bg-stone-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="The Viyaa Edge" />
              <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                Built on Four <br/>
                <span className="font-serif italic">Immovable Pillars.</span>
              </h2>
              <div className="space-y-6 font-serif">
                {[
                  { title: 'Harmonious Design', desc: 'Architecture that is rooted in its surroundings—responding to climate, landscape, and context. Calm, intuitive, and timeless, our designs belong naturally to the place they stand in.' },
                  { title: 'Functional Spaces', desc: 'Spaces planned with clarity and purpose—well-proportioned, practical, and naturally comfortable—supporting effortless day-to-day living without compromise.' },
                  { title: 'Material Honesty', desc: 'An authentic approach to materials. Concrete is expressed as concrete. Wood is used as wood. Every finish is chosen for its natural character, durability, and timeless appeal—never imitation.' },
                  { title: 'Integrity', desc: 'Integrity underpins every stage of our process—from land procurement and legal diligence to design development and on-ground execution.' }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-xl font-serif italic text-stone-300">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">{pillar.title}</h4>
                      <p className="text-sm text-stone-600 leading-relaxed text-justify">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
               <img 
                 src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop" 
                 alt="Modern Interior"
                 className="w-full shadow-2xl"
               />
               <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs hidden md:block">
                 <p className="font-serif text-xl italic text-stone-800 mb-2">"True luxury lives at the intersection of nature, thoughtful design, and human connection."</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-stone-400"></p>
               </div>
            </div>
          </div>
        </div>
      </section>

 {/* --- Founder's Notes Section --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-stone-50">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-light">Founder's Note</h2>
        </div>

        {/* Abhishek Das */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start"
        >
          <div className="md:col-span-4 md:self-center scale-110">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
              <img 
                src="/pictures/fufu.jpeg" 
                alt="Abhishek Das"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="md:col-span-8 relative p-4">
            <div className="bg-white p-8 md:p-10 shadow-lg border border-stone-200 relative">
              {/* Top-left quotation mark */}
              <div 
                className="absolute flex items-center justify-center"
                style={{
                  top: QUOTE_POSITIONS.topLeft.topMobile,
                  left: QUOTE_POSITIONS.topLeft.leftMobile,
                  width: QUOTE_POSITIONS.size.mobile,
                  height: QUOTE_POSITIONS.size.mobile,
                }}
              >
                <img src="/pictures/quote1.svg" alt="" className="w-full h-full object-contain" style={{
                  width: QUOTE_POSITIONS.size.desktop,
                  height: QUOTE_POSITIONS.size.desktop,
                }} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif italic mb-6 text-stone-900">Abhishek Das</h3>
            <div className="space-y-4 text-stone-600 font-serif leading-relaxed text-justify text-sm">
              <p>
                My journey into real estate has been shaped as much by passion as by experience. After spending over sixteen years in the corporate world, I felt a growing pull towards building something more personal and enduring.
              </p>
              <p>
                Real estate was a natural progression. Over the years, I have personally invested in properties across Goa and the NCR region, and Goa, in particular, has always felt like home. Its old-world charm, warm people, verdant landscapes, and serene coastline continue to inspire me. When I decided to take the entrepreneurial leap, creating meaningful homes in Goa felt instinctive.
              </p>
              <p>
                This vision found its perfect balance through my wife, Ankita Jain Das, who has led an architectural and interior design consultancy for nearly eighteen years. Our shared appreciation for thoughtful design and well-crafted spaces laid the foundation for <span className="font-serif italic font-bold text-stone-800">Viyaa Estates</span>.
              </p>
              <p>
                 <span className="font-serif italic font-bold text-stone-800">Viyaa</span>, the brand represents a harmonious connection between <span className="font-serif italic font-bold text-stone-800">nature</span>, <span className="font-serif italic font-bold text-stone-800">space</span>, and <span className="font-serif italic font-bold text-stone-800">people</span>. This philosophy guides everything we do, as we create homes that are aesthetically refined, intelligently designed, and rooted in a genuine sense of place. From land selection to execution and delivery, we maintain uncompromising standards. Every project is developed on <span className="font-serif italic font-bold text-stone-800">land</span> with clear legal title and constructed using <span className="font-serif italic font-bold text-stone-800">high-quality materials</span> and <span className="font-serif italic font-bold text-stone-800">trusted brands</span>.
              </p>
            </div>
            
          </div>
          {/* Bottom-right quotation mark */}
          <div 
            className="absolute flex items-center justify-center"
            style={{
              bottom: QUOTE_POSITIONS.bottomRight.bottomMobile,
              right: QUOTE_POSITIONS.bottomRight.rightMobile,
              width: QUOTE_POSITIONS.size.mobile,
              height: QUOTE_POSITIONS.size.mobile,
            }}
          >
            <img src="/pictures/quote1.svg" alt="" className="w-full h-full object-contain" style={{
              width: QUOTE_POSITIONS.size.desktop,
              height: QUOTE_POSITIONS.size.desktop,
              transform: 'rotate(180deg)',
            }} />
          </div>
          </div>
        </motion.div>

        {/* Ankita Jain Das */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-8 md:order-1 order-2 relative p-4">
            <div className="bg-white p-8 md:p-10 shadow-lg border border-stone-200 relative">
              {/* Top-left quotation mark */}
              <div 
                className="absolute flex items-center justify-center"
                style={{
                  top: QUOTE_POSITIONS.topLeft.topMobile,
                  left: QUOTE_POSITIONS.topLeft.leftMobile,
                  width: QUOTE_POSITIONS.size.mobile,
                  height: QUOTE_POSITIONS.size.mobile,
                }}
              >
                <img src="/pictures/quote1.svg" alt="" className="w-full h-full object-contain" style={{
                  width: QUOTE_POSITIONS.size.desktop,
                  height: QUOTE_POSITIONS.size.desktop,
                }} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif italic mb-6 text-stone-900">Ankita Jain Das</h3>
            <div className="space-y-4 text-stone-600 font-serif leading-relaxed text-justify text-sm">
              <p>
                If Abhishek is the mind behind the company, I see myself as its heart. With over eighteen years of experience leading my own architectural and interior design consultancy, I have had the privilege of creating thoughtfully designed spaces for many discerning clients. The opportunity to now design and develop homes of our own—spaces that people can truly experience and call their own—has been deeply fulfilling.
              </p>
              <p>
                While my work has spanned a wide range of projects, villa developments have always been especially close to my heart. They offer the freedom to shape spaces from the ground up, allowing design, functionality, and emotion to come together seamlessly.
              </p>
              <p>
                My aspiration has always been to create homes that are not only aesthetically refined, but also highly functional and Vaastu-compliant. Every Viyaa Estates project is guided by our core pillars—<span className="font-serif italic font-bold text-stone-800">harmonious design</span>, <span className="font-serif italic font-bold text-stone-800">functional spaces</span>, <span className="font-serif italic font-bold text-stone-800">material honesty</span>, and <span className="font-serif italic font-bold text-stone-800">integrity</span>.
              </p>
              <p>
                We also recognise that some owners prefer to build their own homes. For such clients, we offer complementary services including <span className="font-serif italic font-bold text-stone-800">Project Management Consultancy (PMC)</span>, <span className="font-serif italic font-bold text-stone-800">architectural design</span>, and <span className="font-serif italic font-bold text-stone-800">interior design</span>—providing complete autonomy, flexibility, and peace of mind, without the usual complexities.
              </p>
            </div>
            
          </div>
          {/* Bottom-right quotation mark */}
          <div 
            className="absolute flex items-center justify-center"
            style={{
              bottom: QUOTE_POSITIONS.bottomRight.bottomMobile,
              right: QUOTE_POSITIONS.bottomRight.rightMobile,
              width: QUOTE_POSITIONS.size.mobile,
              height: QUOTE_POSITIONS.size.mobile,
            }}
          >
            <img src="/pictures/quote1.svg" alt="" className="w-full h-full object-contain" style={{
              width: QUOTE_POSITIONS.size.desktop,
              height: QUOTE_POSITIONS.size.desktop,
              transform: 'rotate(180deg)',
            }} />
          </div>
          </div>
          <div className="md:col-span-4 md:order-2 order-1 md:mt-16">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
              <img 
                src="/pictures/buii.jpeg" 
                alt="Ankita Jain Das"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- Contact / Footer --- */}
      <footer id="contact" className="bg-stone-900 text-stone-300 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <SectionLabel text="Contact Us" />
              <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8">
                A Space to Begin — <br/>
                Connect with Viyaa.
              </h2>
              <p className="text-stone-400 mb-8 max-w-md">
                Minimal, premium, elemental, eternal. Homes crafted to stand strong beyond trends.
              </p>
              <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-stone-200 transition-colors flex items-center gap-2">
                ENQUIRE NOW <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:pl-12">
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Location
                </h4>
                <p className="text-sm leading-relaxed">
                  A106, 3rd Floor, Okhla Phase 2,<br/>
                  New Delhi - 110020<br/>
                  India
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Us
                </h4>
                <p className="text-sm leading-relaxed">
                  +91 9810152674<br/>
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </h4>
                <p className="text-sm leading-relaxed">
                  info@viyaaestates.com<br/>
                  
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Open Time
                </h4>
                <p className="text-sm leading-relaxed">
                  10:00 am – 18:00 pm<br/>
                  Closed on Tuesdays
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 uppercase tracking-widest">
            <p>© 2010 AJDA Group Company. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {/* Instagram */}
              <a href="https://www.instagram.com/viyaa_estates/" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 102 102">
                  <defs>
                    <radialGradient id="ig-a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                      <stop offset=".09" stopColor="#fa8f21"></stop>
                      <stop offset=".78" stopColor="#d82d7e"></stop>
                    </radialGradient>
                    <radialGradient id="ig-b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                      <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#8c3aaa"></stop>
                    </radialGradient>
                  </defs>
                  <path fill="url(#ig-a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                  <path fill="url(#ig-b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                  <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/people/Viyaa-Estates/61587509340610/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="fb-a" x1="12" x2="12" y1="23" y2="1" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#0066ef"></stop>
                      <stop offset="1" stopColor="#00b2ff"></stop>
                    </linearGradient>
                  </defs>
                  <path fill="url(#fb-a)" d="M23 12c0 7.11-2.33 10.26-8.45 10.88A25.38 25.38 0 0 1 12 23h-1.09C3.7 22.71 1 19.66 1 12 1 4 4 1 12 1s11 3 11 11Z"></path>
                  <path fill="#fff" d="M14.55 10.53v2.33h3.37l-.53 3.42h-2.84v6.6A25.38 25.38 0 0 1 12 23h-1.09v-6.7H7.83v-3.44h3.08v-2.57a4.68 4.68 0 0 1 1.24-3.41C13.89 5 18 6 18 6v2.86h-1.78a1.67 1.67 0 0 0-1.67 1.67Z"></path>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/viyaa-estates/" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28.87 28.87">
                  <rect width="28.87" height="28.87" rx="6.48" ry="6.48" fill="#0b86ca"></rect>
                  <path d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 1 1-1.74 1.75 1.74 1.74 0 0 1 1.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 0 1 2.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z" fill="#fff"></path>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="https://www.youtube.com/@viyaa_estates" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="5.368 13.434 53.9 37.855">
                  <path fill="#FFF" d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"></path>
                  <path fill="#E8E0E0" d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"></path>
                  <path fill="#CD201F" d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"></path>
                </svg>
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/919810955103" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                  <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
                  <path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path>
                  <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
                  <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Partner With Us mini section in footer */}
          <div id="partner" className="mt-16 pt-16 border-t border-stone-800/50">
             <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-2xl font-light text-white mb-4 md:mb-0">Interested in Partnering?</h3>
                <div className="flex gap-4">
                  <button className="px-6 py-3 border border-stone-700 rounded-full text-xs hover:bg-stone-800 transition-colors">Channel Partner</button>
                  <button className="px-6 py-3 border border-stone-700 rounded-full text-xs hover:bg-stone-800 transition-colors">Collaborate</button>
                </div>
             </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
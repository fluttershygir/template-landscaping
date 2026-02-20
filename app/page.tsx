"use client";

import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Droplets, Sun, TreeDeciduous, Scissors, MapPin, Phone, Mail, Check, Sprout } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* NAVIGATION */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/90 backdrop-blur-md border-stone-200 py-4" : "bg-white/50 backdrop-blur-sm border-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-emerald-900 text-white flex items-center justify-center rounded-full group-hover:bg-emerald-800 transition-colors">
                    <Leaf className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl tracking-tight text-emerald-950">
                    Edenscapes
                </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
                <Link href="#" className="hover:text-emerald-800 transition-colors">Expertise</Link>
                <Link href="#" className="hover:text-emerald-800 transition-colors">Portfolio</Link>
                <Link href="#" className="hover:text-emerald-800 transition-colors">Process</Link>
                <Link href="#" className="hover:text-emerald-800 transition-colors">Journal</Link>
            </nav>

            <div className="flex items-center gap-4">
                <span className="hidden lg:block text-xs font-medium tracking-widest uppercase text-stone-500">
                    Est. 1998
                </span>
                <Button className="hidden md:flex rounded-full px-6 py-5 text-xs uppercase tracking-widest font-bold bg-emerald-900 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-900/20">
                    Consultation
                </Button>
                <button className="md:hidden text-emerald-950">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>
            </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="relative z-10"
            >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    Available for Spring 2026
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-emerald-950">
                    Cultivating <br/>
                    <span className="italic font-light text-emerald-700">Living Art.</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-600 max-w-lg mb-10 leading-relaxed font-light">
                    We design and build sustainable, luxury outdoor environments that harmonize with nature and elevate your lifestyle.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-full h-14 px-8 bg-emerald-900 hover:bg-emerald-800 text-white text-sm uppercase tracking-widest shadow-xl shadow-emerald-900/20">
                        View Our Work
                    </Button>
                    <Button variant="outline" className="rounded-full h-14 px-8 border-stone-300 text-stone-600 hover:bg-stone-100 text-sm uppercase tracking-widest bg-transparent">
                        Our Philosophy
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative"
            >
                <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                     <img 
                        src="https://images.unsplash.com/photo-1598902136373-c62584e03f0b?q=80&w=2670&auto=format&fit=crop" 
                        alt="Modern Landscape Architecture" 
                        className="w-full h-full object-cover"
                     />
                     {/* Overlay Graphic */}
                     <div className="absolute inset-0 border-[1px] border-white/20 rounded-2xl m-4 pointer-events-none"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-white p-6 rounded-xl shadow-xl border border-stone-100 flex items-center gap-4 max-w-xs">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 text-emerald-700">
                        <TreeDeciduous className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-serif text-lg text-emerald-950">Eco-Conscious</p>
                        <p className="text-xs text-stone-500 uppercase tracking-wider">Sustainable Design</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
            {[
                { label: "Projects Completed", value: "350+" },
                { label: "Design Awards", value: "24" },
                { label: "Years Experience", value: "25" },
                { label: "Acres Transformed", value: "150+" },
            ].map((stat, i) => (
                <div key={i} className="py-8 md:py-12 text-center p-4">
                    <p className="text-3xl md:text-4xl font-serif text-emerald-950 mb-2">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* SERVICES - CLEAN DESIGN */}
      <section className="py-24 md:py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6">Holistic Landscape Design</h2>
                <p className="text-stone-600 text-lg font-light leading-relaxed">
                    From initial concept to ongoing care, we offer a comprehensive suite of services to ensure your outdoor space remains pristine.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Sprout className="w-6 h-6" />,
                        title: "Landscape Architecture",
                        desc: "Master planning and detailed design for residential estates."
                    },
                    {
                        icon: <Droplets className="w-6 h-6" />,
                        title: "Water Management",
                        desc: "Sustainable irrigation and custom water feature installation."
                    },
                    {
                        icon: <Sun className="w-6 h-6" />,
                        title: "Outdoor Lighting",
                        desc: "Atmospheric illumination for evening ambiance and security."
                    },
                    {
                        icon: <Scissors className="w-6 h-6" />,
                        title: "Fine Gardening",
                        desc: "Seasonal planting, pruning, and soil health management."
                    },
                    {
                        icon: <TreeDeciduous className="w-6 h-6" />,
                        title: "Arboriculture",
                        desc: "Expert tree care, preservation, and strategic planting."
                    },
                    {
                        icon: <MapPin className="w-6 h-6" />,
                        title: "Hardscaping",
                        desc: "Stone masonry, patios, walkways, and retaining walls."
                    }
                ].map((service, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-serif text-emerald-950 mb-3">{service.title}</h3>
                        <p className="text-stone-500 font-light leading-relaxed text-sm">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FEATURED - MINIMAL IMAGE */}
      <section className="py-24 px-6 bg-emerald-900 text-white overflow-hidden relative">
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 lg:order-1">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl sm:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img 
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" 
                            alt="Featured Project" 
                            className="rounded-xl w-full"
                        />
                  </div>
              </div>
              
              <div className="order-1 lg:order-2">
                  <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-6 block">Featured Project</span>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8">The Highland Estate</h2>
                  <p className="text-emerald-100/80 text-lg font-light leading-relaxed mb-8">
                        A brutalist home softened by wild meadows and structured hedging. This project exemplifies our philosophy of blending architecture with the organic world.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                      {[
                          "Drought-tolerant native plant palette",
                          "Custom corten steel water features",
                          "Seamless indoor-outdoor transitions"
                      ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-emerald-50">
                              <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3" />
                              </div>
                              <span className="font-light">{item}</span>
                          </li>
                      ))}
                  </ul>

                  <Button className="bg-white text-emerald-950 hover:bg-emerald-50 rounded-full px-8 py-6 uppercase tracking-widest text-xs font-bold transition-all">
                      View Case Study
                  </Button>
              </div>
          </div>
      </section>

      {/* CTA SECTION - CLEAN */}
      <section className="py-24 md:py-32 px-6 bg-stone-100">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6">Create your sanctuary.</h2>
            <p className="text-stone-600 text-lg mb-10 font-light max-w-2xl mx-auto">
                We take on a limited number of commissions each year to ensure the highest level of attention and care for every detail.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-emerald-900 hover:bg-emerald-800 text-white rounded-full px-10 h-14 uppercase tracking-widest text-sm shadow-xl shadow-emerald-900/10">
                    Get Started
                </Button>
                <Button variant="outline" className="bg-white border-stone-200 text-stone-600 hover:bg-stone-50 rounded-full px-10 h-14 uppercase tracking-widest text-sm">
                    (212) 555-0198
                </Button>
            </div>
         </div>
      </section>

      {/* FOOTER - MINIMAL */}
      <footer className="bg-white border-t border-stone-200 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-emerald-900 text-white flex items-center justify-center rounded-full">
                        <Leaf className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-xl tracking-tight text-emerald-950">
                        Edenscapes
                    </span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                    Designing outdoor spaces that connect people with nature.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-emerald-950 uppercase tracking-widest text-xs mb-6">Sitemap</h4>
                <ul className="space-y-3 text-sm text-stone-500 font-medium">
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">Home</Link></li>
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">About</Link></li>
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">Services</Link></li>
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">Contact</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-emerald-950 uppercase tracking-widest text-xs mb-6">Social</h4>
                <ul className="space-y-3 text-sm text-stone-500 font-medium">
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">Instagram</Link></li>
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">Pinterest</Link></li>
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">Houzz</Link></li>
                    <li><Link href="#" className="hover:text-emerald-800 transition-colors">LinkedIn</Link></li>
                </ul>
            </div>

            <div>
                 <h4 className="font-bold text-emerald-950 uppercase tracking-widest text-xs mb-6">Contact</h4>
                 <div className="space-y-3 text-sm text-stone-500 font-medium">
                    <p>hello@edenscapes.com</p>
                    <p>+1 (555) 123-4567</p>
                    <p>Los Angeles, CA</p>
                 </div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center bg-white text-stone-400 text-xs">
            <p>&copy; 2026 Edenscapes. Made by QW Web Solutions.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#">Privacy</Link>
                <Link href="#">Terms</Link>
            </div>
        </div>
      </footer>

    </div>
  );
} 

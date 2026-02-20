"use client";

import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Droplets, Sun, TreeDeciduous, Scissors, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A2E24] font-sans selection:bg-[#D4AF37]/30">
      
      {/* NAVIGATION */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Leaf className={`w-6 h-6 ${scrolled ? "text-[#1A2E24]" : "text-white"}`} />
                <span className={`font-serif text-2xl tracking-tight ${scrolled ? "text-[#1A2E24]" : "text-white"}`}>
                    Edenscapes <span className="italic font-light">Landscaping</span>
                </span>
            </div>
            
            <div className={`hidden md:flex items-center gap-10 text-sm tracking-widest uppercase font-medium ${scrolled ? "text-[#1A2E24]" : "text-white"}`}>
                <Link href="#" className="hover:text-[#D4AF37] transition-colors">Services</Link>
                <Link href="#" className="hover:text-[#D4AF37] transition-colors">Portfolio</Link>
                <Link href="#" className="hover:text-[#D4AF37] transition-colors">About</Link>
            </div>

            <Button className={`hidden md:flex rounded-none px-8 py-6 text-xs uppercase tracking-widest transition-all ${scrolled ? "bg-[#1A2E24] text-white hover:bg-[#2C4A3B]" : "bg-white text-[#1A2E24] hover:bg-white/90"}`}>
                Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button className={`md:hidden ${scrolled ? "text-[#1A2E24]" : "text-white"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-full bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.span variants={fadeUp} className="block font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-[#D4AF37]">
                    Elevating Outdoor Living
                </motion.span>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 tracking-tight">
                    Masterpieces <br/>
                    <span className="italic font-light text-white/90">in Nature.</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Award-winning landscape architecture and design for luxury estates and modern homes.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B5952F] text-white rounded-none px-10 py-7 text-sm uppercase tracking-widest transition-all">
                        Explore Portfolio
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#1A2E24] rounded-none px-10 py-7 text-sm uppercase tracking-widest transition-all bg-transparent">
                        Our Services
                    </Button>
                </motion.div>
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60"
        >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-px h-12 bg-white/20 relative overflow-hidden">
                <motion.div 
                    animate={{ y: [0, 48] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-white"
                />
            </div>
        </motion.div>
      </section>

      {/* PHILOSOPHY / ABOUT */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="order-2 lg:order-1"
                >
                    <motion.span variants={fadeUp} className="block font-sans text-xs tracking-[0.2em] uppercase mb-6 text-[#D4AF37]">
                        Our Philosophy
                    </motion.span>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-[#1A2E24]">
                        Crafting environments <br/>that <span className="italic text-[#5D8736]">breathe.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[#5C7063] text-lg leading-relaxed mb-8 font-light">
                        We believe your outdoor space should be a seamless extension of your home. Our team of landscape architects and horticulturists transform ordinary grounds into extraordinary sanctuaries.
                    </motion.p>
                    <motion.p variants={fadeUp} className="text-[#5C7063] text-lg leading-relaxed mb-12 font-light">
                        By blending structural elegance with organic flow, we create living works of art that evolve beautifully with the seasons and stand the test of time.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <Link href="#" className="inline-flex items-center gap-3 text-[#1A2E24] font-medium uppercase tracking-widest text-sm group">
                            <span className="border-b border-[#1A2E24] pb-1 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">Read Our Story</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 group-hover:text-[#D4AF37] transition-all" />
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="order-1 lg:order-2 relative"
                >
                    <div className="aspect-[4/5] w-full overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop" 
                            alt="Luxury landscaping" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Floating Stat Box */}
                    <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white p-8 md:p-10 shadow-2xl max-w-[240px]">
                        <p className="text-5xl md:text-6xl font-serif text-[#1A2E24] mb-2">25<span className="text-[#D4AF37]">+</span></p>
                        <p className="text-xs md:text-sm uppercase tracking-widest text-[#5C7063] font-medium leading-relaxed">Years of Design Excellence</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* SERVICES BENTO GRID */}
      <section className="py-24 md:py-40 bg-[#1A2E24] text-white px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.span variants={fadeUp} className="block font-sans text-xs tracking-[0.2em] uppercase mb-4 text-[#D4AF37]">
                        Our Expertise
                    </motion.span>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1]">
                        Comprehensive <br/><span className="italic font-light text-white/80">Landscaping</span>
                    </motion.h2>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="#" className="inline-flex items-center gap-3 text-white font-medium uppercase tracking-widest text-sm group">
                        <span className="border-b border-white/30 pb-1 group-hover:border-white transition-colors">View All Services</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 - Large */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-2 relative h-[400px] md:h-[500px] group overflow-hidden bg-black"
                >
                    <img src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Hardscaping" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <h3 className="text-3xl md:text-4xl font-serif mb-4">Architectural Hardscaping</h3>
                        <p className="text-white/70 font-light max-w-md mb-6">Patios, retaining walls, and pathways crafted from premium natural stone and modern materials.</p>
                        <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                            Explore <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[500px] group overflow-hidden bg-black"
                >
                    <img src="https://images.unsplash.com/photo-1558293842-c0fd3db8415e?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Planting" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                        <h3 className="text-2xl md:text-3xl font-serif mb-4">Native Planting</h3>
                        <p className="text-white/70 font-light mb-6">Curated flora that thrives in your specific microclimate.</p>
                        <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                            Explore <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative h-[400px] group overflow-hidden bg-black"
                >
                    <img src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2669&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Water Features" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                        <h3 className="text-2xl md:text-3xl font-serif mb-4">Water Features</h3>
                        <p className="text-white/70 font-light mb-6">Tranquil ponds, modern fountains, and custom pools.</p>
                        <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                            Explore <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </motion.div>

                {/* Card 4 - Large */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="lg:col-span-2 relative h-[400px] group overflow-hidden bg-black"
                >
                    <img src="https://images.unsplash.com/photo-1598902136373-c62584e03f0b?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Maintenance" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <h3 className="text-3xl md:text-4xl font-serif mb-4">Estate Maintenance</h3>
                        <p className="text-white/70 font-light max-w-md mb-6">White-glove horticultural care to ensure your landscape grows more beautiful year after year.</p>
                        <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                            Explore <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* PARALLAX CTA */}
      <section className="relative py-32 md:py-48 bg-fixed bg-center bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2744&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Leaf className="w-12 h-12 mx-auto mb-8 text-[#D4AF37]" />
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">Ready to redefine your landscape?</h2>
                <p className="text-lg md:text-xl font-light text-white/80 mb-12 max-w-2xl mx-auto">
                    Schedule a private consultation with our lead architects to discuss your vision.
                </p>
                <Button className="bg-[#D4AF37] hover:bg-[#B5952F] text-white rounded-none px-10 py-7 text-sm uppercase tracking-widest transition-all">
                    Book a Consultation
                </Button>
            </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1F12] text-white/60 py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-8">
                    <Leaf className="w-6 h-6 text-[#D4AF37]" />
                    <span className="font-serif text-2xl tracking-tight text-white">
                        Edenscapes
                    </span>
                </div>
                <p className="font-light text-sm leading-relaxed mb-8">
                    Masterpieces in nature. Award-winning landscape architecture and estate management.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all">
                        <Twitter className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div>
                <h4 className="text-white font-sans text-xs tracking-[0.2em] uppercase mb-8">Services</h4>
                <ul className="space-y-4 font-light text-sm">
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Landscape Architecture</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Hardscaping & Masonry</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Native Planting</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Water Features</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Estate Maintenance</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-sans text-xs tracking-[0.2em] uppercase mb-8">Company</h4>
                <ul className="space-y-4 font-light text-sm">
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Our Story</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Portfolio</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Journal</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Careers</Link></li>
                    <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Contact</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-sans text-xs tracking-[0.2em] uppercase mb-8">Contact</h4>
                <ul className="space-y-6 font-light text-sm">
                    <li className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <span>1234 Botanical Way<br/>Beverly Hills, CA 90210</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <span>(310) 555-0198</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <span>design@edenscapes.com</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
            <p>&copy; {new Date().getFullYear()} Edenscapes Landscaping. All rights reserved.</p>
            <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
        </div>
      </footer>

    </div>
  );
}

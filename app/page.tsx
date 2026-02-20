import { Button } from "@/components/ui/button";
import { TreeDeciduous, Flower, Droplets, Sun, Leaf, Scissors } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C4A3B] font-serif">
      
      {/* HEADER - Floating Navigation */}
      <header className="fixed top-4 md:top-6 w-full z-50 flex justify-center pointer-events-none px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-[#E8E6E1] px-4 md:px-8 py-2 md:py-3 flex items-center justify-between md:justify-center w-full max-w-3xl pointer-events-auto">
            <div className="hidden md:flex items-center gap-8">
                <Link href="#" className="font-sans font-semibold text-sm hover:text-[#5D8736] transition-colors">Design</Link>
                <Link href="#" className="font-sans font-semibold text-sm hover:text-[#5D8736] transition-colors">Maintenance</Link>
            </div>
            
            <div className="flex items-center gap-2 md:mx-8">
                <div className="bg-[#5D8736] p-1.5 md:p-2 rounded-full shadow-lg shadow-[#5D8736]/20">
                    <Leaf className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-serif text-lg md:text-xl font-medium tracking-tight">Eden<span className="text-[#5D8736] italic">Scapes</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <Link href="#" className="font-sans font-semibold text-sm hover:text-[#5D8736] transition-colors">Seasonal</Link>
                <Button variant="ghost" className="font-sans font-semibold text-sm hover:bg-[#F0F2EB] hover:text-[#5D8736] rounded-full px-6 transition-colors">
                    Contact
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden text-[#2C4A3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
        </div>
      </header>

      {/* HERO - Full Image Background with Card */}
      <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center p-4 md:p-8 pt-24">
        <div className="absolute inset-0 z-0">
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558293842-c0fd3db8415e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform hover:scale-105 duration-[20s]"></div>
             <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch min-h-[500px] shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden animate-fade-in-up mt-12 md:mt-0">
            <div className="bg-[#FDFBF7]/95 backdrop-blur-md p-8 md:p-16 lg:p-20 flex-1 flex flex-col justify-center text-left relative overflow-hidden">
                {/* Subtle decorative element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5D8736]/5 rounded-full blur-3xl"></div>
                
                <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.2em] text-[#5D8736] uppercase mb-4 md:mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-[#5D8736]/50"></span>
                    Sustainable Outdoor Living
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-6 md:mb-8 text-[#1A2E24] tracking-tight">
                    Nature, <br/>
                    <span className="italic font-light text-[#5D8736]">Cultivated.</span>
                </h1>
                <p className="text-[#5C7063] font-sans text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
                    We create breathing spaces that connect your home to the earth. From minimalist gardens to sprawling estates.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Button className="w-full sm:w-auto rounded-full bg-[#2C4A3B] hover:bg-[#1A2E24] text-white px-8 py-6 md:py-7 font-sans text-sm md:text-base tracking-wide shadow-xl shadow-[#2C4A3B]/20 transition-all hover:-translate-y-1">
                        View Portfolio
                    </Button>
                    <span className="font-serif italic text-[#5C7063] text-base md:text-lg">Est. 1994</span>
                </div>
            </div>
            
            <div className="hidden md:flex w-1/3 bg-[#5D8736] text-white p-12 lg:p-16 flex-col justify-between relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div className="space-y-10 relative z-10">
                    <div className="border-l-2 border-white/30 pl-6 group cursor-pointer">
                        <h3 className="font-serif text-2xl mb-3 group-hover:text-white/90 transition-colors">Native Planting</h3>
                        <p className="text-white/80 font-sans text-sm leading-relaxed">Local flora that thrives in your climate with minimal water use.</p>
                    </div>
                    <div className="border-l-2 border-white/30 pl-6 opacity-60 hover:opacity-100 transition-all cursor-pointer group">
                        <h3 className="font-serif text-2xl mb-3 group-hover:text-white/90 transition-colors">Hardscaping</h3>
                        <p className="text-white/80 font-sans text-sm leading-relaxed">Structure meets organic flow.</p>
                    </div>
                </div>
                <div className="flex justify-end relative z-10">
                    <Sun className="w-16 h-16 text-white/20 rotate-12" />
                </div>
            </div>
        </div>
      </section>

      {/* PHILOSOPHY - Magazine Layout */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="order-2 lg:order-1 relative group px-4 md:px-0">
                    <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1598902136373-c62584e03f0b?q=80&w=2670&auto=format&fit=crop" 
                            alt="Garden design" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-full shadow-2xl w-36 h-36 md:w-48 md:h-48 flex flex-col justify-center items-center text-center border border-[#E8E6E1]/50">
                        <span className="font-serif text-3xl md:text-5xl text-[#5D8736] block mb-1">100%</span>
                        <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-[#2C4A3B] font-semibold">Organic<br/>Fertilizers</span>
                    </div>
                </div>
                <div className="order-1 lg:order-2 px-4 md:px-8">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A2E24] mb-6 md:mb-8 leading-[1.1] tracking-tight">
                        We don't just mow.<br/>
                        We <span className="italic text-[#5D8736] relative inline-block">
                            nurture.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#5D8736]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="font-sans text-[#5C7063] text-lg md:text-xl leading-relaxed mb-10 md:mb-12 font-light">
                        A garden is a living entity that evolves with the seasons. Our approach combines horticultural science with artistic vision to ensure your landscape grows more beautiful with time. 
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-4">
                        {[
                            { icon: Scissors, label: "Precision Pruning" },
                            { icon: Droplets, label: "Irrigation Systems" },
                            { icon: TreeDeciduous, label: "Tree Surgery" },
                            { icon: Flower, label: "Seasonal Color" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 group cursor-pointer p-3 -m-3 rounded-2xl hover:bg-[#F0F2EB]/50 transition-colors">
                                <span className="p-3 md:p-4 bg-[#F0F2EB] rounded-2xl text-[#5D8736] group-hover:bg-[#5D8736] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                                    <item.icon size={20} className="md:w-6 md:h-6" />
                                </span>
                                <span className="font-serif text-lg md:text-xl text-[#2C4A3B]">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* PROCESS - Horizontal Scroll Concept (Static for now) */}
      <section className="py-20 md:py-32 bg-[#E8E6E1]/50 overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2C4A3B]/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2C4A3B]/10 to-transparent"></div>
          
          <div className="container mx-auto px-6 mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                  <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.2em] text-[#5D8736] uppercase mb-4 block">How We Work</span>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A2E24] tracking-tight">Our Process</h2>
              </div>
              <p className="text-[#5C7063] font-sans max-w-sm text-sm md:text-base">From initial concept to ongoing care, we handle every detail of your landscape's lifecycle.</p>
          </div>
          
          {/* Hide scrollbar but keep functionality */}
          <div className="flex gap-6 md:gap-8 px-6 md:px-12 overflow-x-auto pt-8 md:pt-16 pb-16 snap-x snap-mandatory hide-scrollbar">
                {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="min-w-[280px] md:min-w-[400px] bg-[#FDFBF7] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] snap-center relative hover:-translate-y-2 md:hover:-translate-y-4 transition-all duration-500 shadow-sm hover:shadow-2xl border border-white">
                        <span className="absolute -top-6 md:-top-8 left-8 md:left-10 bg-[#2C4A3B] text-white font-serif text-3xl md:text-4xl w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-[#FDFBF7] transition-transform group-hover:scale-110">
                            {step}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl mt-6 md:mt-8 mb-4 text-[#1A2E24]">
                            {step === 1 ? "Consultation" : step === 2 ? "Design Concept" : step === 3 ? "Installation" : "Care Plan"}
                        </h3>
                        <p className="font-sans text-[#5C7063] text-sm md:text-base leading-relaxed font-light">
                            {step === 1 ? "We begin by understanding your lifestyle and the unique microclimate of your property to ensure a perfect match." : 
                             step === 2 ? "Our architects draft detailed 3D renderings and planting schedules tailored to your specific aesthetic." :
                             step === 3 ? "Master craftsmen and horticulturists bring the vision to life with minimal disruption to your daily routine." :
                             "Ongoing, seasonal maintenance to ensure your investment grows more beautiful year after year."}
                        </p>
                    </div>
                ))}
          </div>
      </section>

      {/* FOOTER - Simple & Centered */}
      <footer className="bg-[#1A2E24] text-[#E8E6E1] py-20 md:py-32 text-center relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
            
            <div className="relative z-10 px-4">
                <Leaf className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-8 text-[#5D8736] opacity-80" />
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10 tracking-tight max-w-2xl mx-auto leading-[1.1]">Ready to transform your outdoors?</h2>
                <Button className="bg-[#5D8736] hover:bg-[#7FB051] text-white rounded-full px-8 md:px-12 py-6 md:py-7 text-base md:text-lg font-sans tracking-wide shadow-2xl shadow-[#5D8736]/20 transition-all hover:-translate-y-1">
                    Book a Consultation
                </Button>
                <div className="mt-20 md:mt-32 flex flex-wrap justify-center gap-8 md:gap-12 font-sans text-[10px] md:text-xs tracking-[0.2em] opacity-60 uppercase font-semibold">
                    <Link href="#" className="hover:text-white transition-colors hover:opacity-100">Instagram</Link>
                    <Link href="#" className="hover:text-white transition-colors hover:opacity-100">Pinterest</Link>
                    <Link href="#" className="hover:text-white transition-colors hover:opacity-100">Houzz</Link>
                </div>
            </div>
      </footer>

    </div>
  );
}

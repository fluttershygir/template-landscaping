import { Button } from "@/components/ui/button";
import { TreeDeciduous, Flower, Droplets, Sun, Leaf, Scissors } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C4A3B] font-serif">
      
      {/* HEADER - Floating Navigation */}
      <header className="fixed top-6 w-full z-50 flex justify-center pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-[#E8E6E1] px-8 py-3 flex items-center gap-12 pointer-events-auto">
            <Link href="#" className="font-sans font-semibold text-sm hover:text-[#5D8736] transition-colors">Design</Link>
            <Link href="#" className="font-sans font-semibold text-sm hover:text-[#5D8736] transition-colors">Maintenance</Link>
            
            <div className="flex items-center gap-2 mx-4">
                <div className="bg-[#5D8736] p-2 rounded-full shadow-lg shadow-[#5D8736]/20">
                    <Leaf className="text-white w-5 h-5" />
                </div>
                <span className="font-serif text-xl font-medium tracking-tight">Eden<span className="text-[#5D8736] italic">Scapes</span></span>
            </div>

            <Link href="#" className="font-sans font-semibold text-sm hover:text-[#5D8736] transition-colors">Seasonal</Link>
            <Button variant="ghost" className="font-sans font-semibold text-sm hover:bg-[#F0F2EB] hover:text-[#5D8736] rounded-full px-6 transition-colors">
                Contact
            </Button>
        </div>
      </header>

      {/* HERO - Full Image Background with Card */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 z-0">
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558293842-c0fd3db8415e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform hover:scale-105 duration-[20s]"></div>
             <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch min-h-[500px] shadow-2xl rounded-3xl overflow-hidden animate-fade-in-up">
            <div className="bg-[#FDFBF7]/95 backdrop-blur-sm p-12 md:p-16 flex-1 flex flex-col justify-center text-left">
                <span className="font-sans font-bold text-xs tracking-[0.2em] text-[#5D8736] uppercase mb-6">Sustainable Outdoor Living</span>
                <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-[#1A2E24]">
                    Nature, <br/>
                    <span className="italic font-light text-[#5D8736]">Cultivated.</span>
                </h1>
                <p className="text-[#5C7063] font-sans text-lg leading-relaxed mb-10 max-w-sm">
                    We create breathing spaces that connect your home to the earth. From minimalist gardens to sprawling estates.
                </p>
                <div className="flex items-center gap-6">
                    <Button className="rounded-full bg-[#2C4A3B] hover:bg-[#1A2E24] text-white px-8 py-6 font-sans text-sm tracking-wide shadow-xl shadow-[#2C4A3B]/20">
                        View Portfolio
                    </Button>
                    <span className="font-serif italic text-[#5C7063] text-lg">Est. 1994</span>
                </div>
            </div>
            
            <div className="hidden md:block w-1/3 bg-[#5D8736] text-white p-12 flex flex-col justify-between">
                <div className="space-y-8">
                    <div className="border-l-2 border-white/30 pl-6">
                        <h3 className="font-serif text-2xl mb-2">Native Planting</h3>
                        <p className="text-white/80 font-sans text-sm leading-relaxed">Local flora that thrives in your climate with minimal water use.</p>
                    </div>
                    <div className="border-l-2 border-white/30 pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <h3 className="font-serif text-2xl mb-2">Hardscaping</h3>
                        <p className="text-white/80 font-sans text-sm leading-relaxed">Structure meets organic flow.</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Sun className="w-12 h-12 text-white/40 rotate-12" />
                </div>
            </div>
        </div>
      </section>

      {/* PHILOSOPHY - Magazine Layout */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="order-2 md:order-1 relative group">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1598902136373-c62584e03f0b?q=80&w=2670&auto=format&fit=crop" 
                            alt="Garden design" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-full shadow-xl w-48 h-48 flex flex-col justify-center items-center text-center">
                        <span className="font-serif text-5xl text-[#5D8736] block mb-1">100%</span>
                        <span className="font-sans text-xs uppercase tracking-widest text-[#2C4A3B]">Organic<br/>Fertilizers</span>
                    </div>
                </div>
                <div className="order-1 md:order-2 px-8">
                    <h2 className="font-serif text-5xl md:text-6xl text-[#1A2E24] mb-8 leading-tight">
                        We dont just mow.<br/>
                        We <span className="italic text-[#5D8736] decoration-1 decoration-[#5D8736]/30 underline-offset-8 underline">nurture.</span>
                    </h2>
                    <p className="font-sans text-[#5C7063] text-xl leading-relaxed mb-12">
                        A garden is a living entity that evolves with the seasons. Our approach combines horticultural science with artistic vision to ensure your landscape grows more beautiful with time. 
                    </p>
                    
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                        {[
                            { icon: Scissors, label: "Precision Pruning" },
                            { icon: Droplets, label: "Irrigation Systems" },
                            { icon: TreeDeciduous, label: "Tree Surgery" },
                            { icon: Flower, label: "Seasonal Color" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                                <span className="p-3 bg-[#F0F2EB] rounded-2xl text-[#5D8736] group-hover:bg-[#5D8736] group-hover:text-white transition-colors">
                                    <item.icon size={20} />
                                </span>
                                <span className="font-serif text-xl text-[#2C4A3B]">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* PROCESS - Horizontal Scroll Concept (Static for now) */}
      <section className="py-24 bg-[#E8E6E1] overflow-hidden">
          <div className="container mx-auto px-6 mb-16">
              <h2 className="font-serif text-4xl text-[#1A2E24]">Our Process</h2>
          </div>
          <div className="flex gap-8 px-6 overflow-x-auto pt-16 pb-12 snap-x">
                {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="min-w-[300px] md:min-w-[400px] bg-[#FDFBF7] p-10 rounded-3xl snap-center relative hover:-translate-y-4 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <span className="absolute -top-6 left-8 bg-[#2C4A3B] text-white font-serif text-4xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-[#E8E6E1]">
                            {step}
                        </span>
                        <h3 className="font-serif text-2xl mt-8 mb-4 text-[#1A2E24]">
                            {step === 1 ? "Consultation" : step === 2 ? "Design Concept" : step === 3 ? "Installation" : "Care Plan"}
                        </h3>
                        <p className="font-sans text-[#5C7063] leading-relaxed">
                            We begin by understanding your lifestyle and the unique microclimate of your property to ensure a perfect match.
                        </p>
                    </div>
                ))}
          </div>
      </section>

      {/* FOOTER - Simple & Centered */}
      <footer className="bg-[#1A2E24] text-[#E8E6E1] py-24 text-center">
            <Leaf className="w-12 h-12 mx-auto mb-8 text-[#5D8736] opacity-80" />
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to transform your outdoors?</h2>
            <Button className="bg-[#5D8736] hover:bg-[#7FB051] text-white rounded-full px-10 py-6 text-lg font-sans tracking-wide">
                Book a Consultation
            </Button>
            <div className="mt-20 flex justify-center gap-8 font-sans text-xs tracking-widest opacity-50 uppercase">
                <Link href="#">Instagram</Link>
                <Link href="#">Pinterest</Link>
                <Link href="#">Houzz</Link>
            </div>
      </footer>

    </div>
  );
}

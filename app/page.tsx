"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, ArrowRight, Shield, Clock, Flower2, Star, Trees } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-white">
            Green<span className="text-emerald-500">Scape</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Lawn Care</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Design</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Maintenance</Link>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-6 transition-all hover:scale-105">
            Get a Quote
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-950/50 border border-emerald-800 text-emerald-400 text-sm font-medium mb-6">
              Full-Service Landscaping
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Transform Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
                Outdoor Space
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              From lush lawn maintenance to stunning hardscape design, we create environments you'll love to come home to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20">
                <Phone className="mr-2 h-5 w-5" /> (555) LAWN-CARE
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES/STATS */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { icon: Shield, label: "Satisfaction Guarantee" },
                { icon: Clock, label: "Reliable Schedule" },
                { icon: Star, label: "Top Rated Service" },
                { icon: CheckCircle2, label: "Eco-Friendly" }
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-3 text-center">
                    <div className="p-3 rounded-full bg-slate-800 text-emerald-400">
                        <item.icon size={24} />
                    </div>
                    <span className="font-semibold text-slate-200">{item.label}</span>
                </div>
            ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Complete property care and enhancement.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { 
                        title: "Lawn Maintenance", 
                        desc: "Weekly mowing, fertilization, and weed control to keep your grass thick and green.",
                        icon: Flower2
                    },
                    { 
                        title: "Landscape Design", 
                        desc: "Custom garden planning, planting, and hardscaping including patios and walkways.",
                        icon: Trees
                    },
                    { 
                        title: "Seasonal Cleanup", 
                        desc: "Spring and fall debris removal, mulching, and pruning to prepare for the season.",
                        icon: CheckCircle2
                    },
                ].map((service, i) => (
                    <Card key={i} className="bg-slate-900 border-slate-800 hover:border-emerald-500/50 transition-colors group">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-950/50 transition-colors">
                                <service.icon size={24} />
                            </div>
                            <CardTitle className="text-xl text-slate-100">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-slate-400 mb-6">
                                {service.desc}
                            </CardDescription>
                            <div className="flex items-center text-sm font-medium text-emerald-400 group-hover:translate-x-1 transition-transform cursor-pointer">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Love Your Lawn Again</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Get a free customized quote for your property today.
            </p>
            <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-emerald-600 hover:bg-slate-100 font-bold">
                Get a Free Quote
            </Button>
        </div>
      </section>

    </div>
  );
}

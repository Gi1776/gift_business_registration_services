import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Users, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            About <span className="text-brand-blue">Gift Business</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a dedicated team of business consultants based in South Africa, committed to simplifying the process of entrepreneurship for everyone.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-gold p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm font-medium opacity-80">Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Empowering South African Entrepreneurs</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Gift Business Registration Services was founded with a single goal: to remove the administrative barriers that prevent talented South Africans from starting their own businesses.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We understand that the CIPC registration process can be daunting. That's why we've streamlined everything, offering a one-stop-shop for Pty Ltd registration, name reservations, and compliance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-brand-blue">1000+</p>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Companies Registered</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-brand-blue">98%</p>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold mb-6">What Drives Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Trust & Integrity",
                desc: "We handle your business information with the highest level of confidentiality and professionalism."
              },
              {
                icon: Target,
                title: "Efficiency",
                desc: "We value your time. Our processes are optimized to get your business up and running as fast as possible."
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We don't just register companies; we provide the foundation for your future success."
              }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
